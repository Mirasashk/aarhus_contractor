# QR Badge MVP — Firebase + React Implementation Plan

Goal: ship a working MVP where each printed badge has a QR that opens a *badge page* (`/b/:slug`). The page shows a password prompt; on correct PIN it reveals worker info. Keep it **simple**, security-light (we’ll harden later).

---

## Tech Stack

- **React** (your existing app, deployed on Firebase Hosting)
- **Firebase**: Auth (for admin only), Firestore, Storage (optional), Cloud Functions (HTTP/Callable)
- **QR generation**: client-side `qrcode` or a tiny Cloud Function
- **MVP constraint**: No sessions, no cookies. The **PIN is entered each time** to view a badge profile. (We’ll add sessions & rate limits later.)

---

## Phase 1 — Firestore Data (MVP)

> Minimal collections; avoid PII in the QR slug.

```
projects/{projectId}
  name: string
  leaderPin: string            // 🔴 MVP: plain text pin (NOT for production)
  status: "active" | "archived"
  createdAt, updatedAt: timestamps

workers/{workerId}
  firstName, lastName: string
  company: string
  role: string
  status: "active" | "suspended"
  photoPath?: string           // optional: Storage path
  docs?: [
    { label: string, type: "contract"|"cert"|"id", storagePath: string }
  ]
  createdAt, updatedAt: timestamps

badges/{badgeId}
  slug: string                 // short code printed in QR (6–8 chars, unique)
  workerId: string (ref)
  projectId: string (ref)
  active: boolean
  expiresAt?: timestamp
  createdAt, updatedAt: timestamps
```

**Notes**
- `leaderPin` in plain text is acceptable for the MVP demo. We will replace with a hashed PIN in V2.

---

## Phase 2 — Security Rules (MVP)

We’ll **block direct reads** of workers/badges from the public client to avoid casual scraping. Reads go via Cloud Functions. Admin portal uses Auth.

**Firestore rules (very simple first cut):**

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {

    function isAdmin() {
      return request.auth != null && request.auth.token.role == 'admin';
    }

    // Admin-only collections
    match /projects/{projectId} {
      allow read, write: if isAdmin();
    }
    match /workers/{workerId} {
      allow read, write: if isAdmin();
    }
    match /badges/{badgeId} {
      allow read, write: if isAdmin();
    }

    // No public reads — all public access via Cloud Functions:
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

**Storage rules (MVP):**

```js
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    function isAdmin() {
      return request.auth != null && request.auth.token.role == 'admin';
    }
    // Admin uploads & reads
    match /docs/{projectId}/{workerId}/{fileId} {
      allow read, write: if isAdmin();
    }
    match /photos/{workerId}/{filename} {
      allow read, write: if isAdmin();
    }
  }
}
```

> MVP choice: public badge page won’t pull from Storage directly; the Function will generate **temporary download URLs** on demand.

---

## Phase 3 — Cloud Functions (MVP)

We’ll build two Functions:

1) **`getBadgeProfile`** *(Callable)* — input `{ slug, pin }`, returns worker profile if the pin matches the project’s `leaderPin`. No session; the pin is required each call.
2) **`adminCreateBadge`** *(Callable)* — input `{ workerId, projectId, expiresAt? }`, returns `{ slug, link, qrDataUrl }` for printing.

Install packages in `functions/`:
```bash
npm i firebase-admin firebase-functions nanoid qrcode
```

**`functions/src/index.ts` (skeleton):**
```ts
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { nanoid } from "nanoid";
import QRCode from "qrcode";

admin.initializeApp();
const db = admin.firestore();

type BadgeDoc = {
  slug: string; workerId: string; projectId: string;
  active: boolean; expiresAt?: FirebaseFirestore.Timestamp;
};

export const getBadgeProfile = functions.https.onCall(async (data, context) => {
  const { slug, pin } = data as { slug: string; pin: string };
  if (!slug || !pin) throw new functions.https.HttpsError("invalid-argument", "slug and pin required");

  // 1) Find badge by slug
  const badgeSnap = await db.collection("badges").where("slug", "==", slug).limit(1).get();
  if (badgeSnap.empty) throw new functions.https.HttpsError("not-found", "Badge not found");
  const badgeRef = badgeSnap.docs[0].ref;
  const badge = badgeSnap.docs[0].data() as BadgeDoc;

  if (!badge.active) throw new functions.https.HttpsError("permission-denied", "Badge inactive");
  if (badge.expiresAt && badge.expiresAt.toDate() < new Date()) {
    throw new functions.https.HttpsError("permission-denied", "Badge expired");
  }

  // 2) Load project and verify PIN (MVP: plain string equality)
  const projectSnap = await db.doc(`projects/${badge.projectId}`).get();
  const project = projectSnap.data() as any;
  if (!project || project.leaderPin !== pin) {
    throw new functions.https.HttpsError("unauthenticated", "Invalid PIN");
  }

  // 3) Load worker
  const workerSnap = await db.doc(`workers/${badge.workerId}`).get();
  const worker = workerSnap.data() as any;
  if (!worker) throw new functions.https.HttpsError("not-found", "Worker not found");

  // 4) Optional: build temporary signed URLs for docs/photos (skip for strict MVP)
  // const storage = admin.storage().bucket();
  // const photoUrl = worker.photoPath
  //   ? (await storage.file(worker.photoPath).getSignedUrl({ action: "read", expires: Date.now() + 5*60*1000 }))[0]
  //   : undefined;
  // const docs = await Promise.all((worker.docs ?? []).map(async (d:any) => ({
  //   label: d.label, type: d.type,
  //   url: (await storage.file(d.storagePath).getSignedUrl({ action: "read", expires: Date.now() + 5*60*1000 }))[0]
  // })));

  // MVP: return core profile only
  return {
    name: `${worker.firstName} ${worker.lastName}`,
    company: worker.company,
    role: worker.role,
    status: worker.status,
    // photoUrl, docs
  };
});

export const adminCreateBadge = functions.https.onCall(async (data, context) => {
  // Admin-only (simple): require signed-in user with custom claim role=admin
  const token = context.auth?.token as any;
  if (!token || token.role !== "admin") {
    throw new functions.https.HttpsError("permission-denied", "Admin only");
  }
  const { workerId, projectId, expiresAt } = data as { workerId: string; projectId: string; expiresAt?: string };

  // Generate slug
  const slug = nanoid(7);

  // Create badge
  const now = admin.firestore.FieldValue.serverTimestamp();
  const badgeRef = await db.collection("badges").add({
    slug, workerId, projectId, active: true,
    ...(expiresAt ? { expiresAt: admin.firestore.Timestamp.fromDate(new Date(expiresAt)) } : {}),
    createdAt: now, updatedAt: now,
  });

  // Build the URL that the QR encodes
  const publicBase = functions.config().app?.public_base || "https://<YOUR_HOSTING_DOMAIN>";
  const link = `${publicBase}/b/${slug}`;

  // Create QR PNG data URL for quick download in admin
  const qrDataUrl = await QRCode.toDataURL(link, { width: 512, errorCorrectionLevel: "H", margin: 2 });

  return { badgeId: badgeRef.id, slug, link, qrDataUrl };
});
```

> Configure `app.public_base` via `firebase functions:config:set app.public_base="https://yourapp.web.app"`

Deploy:
```bash
firebase deploy --only functions
```

---

## Phase 4 — React Pages

### 4.1 Public badge page `/b/:slug`

- Displays project name (optional) and PIN form.
- On submit, calls `getBadgeProfile({ slug, pin })` and renders the returned profile.
- No session; if the user reloads, they re-enter PIN.

**Example component:**
```tsx
import { httpsCallable, getFunctions } from "firebase/functions";
import { useState } from "react";
import { useParams } from "react-router-dom"; // or your router

export default function BadgePage() {
  const { slug } = useParams<{ slug: string }>();
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<any>(null);

  const onUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      const fn = httpsCallable(getFunctions(), "getBadgeProfile");
      const res = await fn({ slug, pin });
      setProfile(res.data);
    } catch (err:any) {
      setError(err?.message || "Unlock failed");
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Badge Access</h1>
      {!profile ? (
        <form onSubmit={onUnlock}>
          <label>Site PIN</label>
          <input value={pin} onChange={e=>setPin(e.target.value)} required />
          <button disabled={loading}>{loading ? "Checking..." : "Unlock"}</button>
          {error && <p style={{color:"red"}}>{error}</p>}
        </form>
      ) : (
        <div className="card">
          <h2>{profile.name}</h2>
          <p>{profile.company} — {profile.role}</p>
          <p>Status: {profile.status}</p>
          {/* Optional: photo/docs if you enable signed URLs in the function */}
        </div>
      )}
    </div>
  );
}
```

### 4.2 Admin screen — Create badge

- Form fields: Worker (dropdown), Project (dropdown), ExpiresAt (optional).
- Calls `adminCreateBadge` and shows:
  - The slug & link
  - A **Download PNG** button using the `qrDataUrl`
- Optional: render a print-ready card (worker name + QR).

**Download helper:**
```ts
function downloadDataUrl(dataUrl: string, filename: string) {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  a.click();
}
```

---

## Phase 5 — QR Links & Hosting

- QR encodes: `https://yourapp.web.app/b/{slug}`
- In `firebase.json`, ensure React routes work (SPA fallback):
```json
{
  "hosting": {
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

---

## Phase 6 — Minimal Admin Auth (custom claim)

- Use standard Firebase Auth for the admin portal.
- After creating your own admin user, set a custom claim:
```js
// Run once from a secure script
const admin = require("firebase-admin");
admin.initializeApp();
admin.auth().setCustomUserClaims("<ADMIN_UID>", { role: "admin" });
```
- In the admin UI, check `getIdTokenResult()`; show admin screens only if `token.claims.role === "admin"`.
- In Functions, we already check `token.role === "admin"` for `adminCreateBadge`.

---

## Phase 7 — Printing Tips (MVP)

- Print QR at **≥ 25–30 mm** square on badge.
- Use **EC level H** (already set) and keep a white quiet zone.
- High contrast: black on white background.

---

## Phase 8 — What we’ll harden next (V2 roadmap)

- Hash the project PIN (argon2) and add rate limiting & lockouts.
- Short-lived **session** after unlock (Function issues a signed token cookie).
- Audit logs (attempts/views) and quick revoke UI.
- Signed URLs for docs/photos; watermark previews.
- Role-based accounts for site leaders + optional 2FA.
- Per-project IP allowlists and PIN rotation scheduling.
- Bulk import & PDF sheet generator for batch badge printing.

---

## Quick Task Checklist

- [ ] Create Firestore collections & a couple seed docs (1 project with simple `leaderPin`, 1 worker, 1 badge with `slug`).
- [ ] Deploy `getBadgeProfile` and `adminCreateBadge` Functions.
- [ ] Build `/b/:slug` page with PIN form → renders profile.
- [ ] Build admin “Create Badge” form → outputs QR and link.
- [ ] Deploy to Hosting; test scanning from phones.
