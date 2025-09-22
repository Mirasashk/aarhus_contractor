### Users creation flow — short implementation plan

-   **Frontend (admin users page)**

    -   **Add pre-create choice modal** in `frontend/src/admin/pages/users/index.jsx`: ask “Create from employees?” with YES/NO.
    -   **If YES**: query Firestore collection `employees` where `isActive == true`; show dropdown of employees; allow selection, handle loading/empty states.
    -   **Prefill form**: map selected employee → `initialData` (firstName, lastName, email, phone, photoURL, role default, isActive) and pass to `CreateUserModal`.
    -   **Enhance `CreateUserModal`** in `frontend/src/admin/pages/users/components/CreateUserModal.jsx` to accept `initialData` and prefill fields; allow edits for remaining fields.
    -   **Submit**: call `usersApi.createUser(formData)`; on success, close modals and `refreshUsers()`; surface API validation/auth errors.
    -   **Guardrails**: prevent creating a user for an employee already linked (disable or warn), handle cancel paths.

-   **Backend (users controller)**

    -   **Create in Firebase Auth first**: use provided email/password (or backend default) to create user; capture `uid`.
    -   **Set custom claims** (role when provided) and `disabled` based on `isActive`.
    -   **Create Firestore user document** using `User.js` shape, keyed by `uid`; merge request data; set `createdAt/updatedAt`.
    -   **Generation logic**: if missing, generate `employeeId` and `pin` on the server; sanitize response.
    -   **Validation & errors**: reuse validation middleware for create/update; return consistent error payloads for email conflicts, invalid input.

-   **Data mapping**

    -   Employee → User fields: `{ firstName, lastName, email, phone, photoURL }`; default `role='employee'`, `isActive=true` (unless specified), carry `employeeId` if present on employee doc.

-   **Testing/UX**
    -   Verify flows: NO path (manual entry) and YES path (prefill) both create Auth user and Firestore doc.
    -   Test duplicates, invalid emails, weak passwords, and already-linked employees.
    -   Ensure users list refreshes and states (loading/empty/error) are handled.
