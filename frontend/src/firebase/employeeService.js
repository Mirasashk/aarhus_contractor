// Employee Service - Firestore and Storage operations for employees
import {
	collection,
	addDoc,
	updateDoc,
	deleteDoc,
	getDocs,
	doc,
	query,
	orderBy,
} from 'firebase/firestore';
import {
	ref,
	uploadBytes,
	getDownloadURL,
	deleteObject,
} from 'firebase/storage';
import { db, storage } from './config';
import { qrService } from './qrService';

// Employee Service
export const employeeService = {
	// Create a new employee
	createEmployee: async (employeeData, imageFile = null, documents = []) => {
		try {
			// First, create the employee document in Firestore to get the ID
			const docRef = await addDoc(collection(db, 'employees'), {
				...employeeData,
				createdAt: new Date(),
				updatedAt: new Date(),
			});

			let imageUrl = null;
			let qrCodeUrl = null;
			let uploadedDocuments = [];

			// If an image file is provided, upload it to Firebase Storage
			if (imageFile) {
				try {
					// Create a reference to the file in Firebase Storage
					const imageRef = ref(
						storage,
						`employees/${docRef.id}/profile.jpg`
					);

					// Upload the file
					await uploadBytes(imageRef, imageFile);

					// Get the download URL
					imageUrl = await getDownloadURL(imageRef);

					// Update the employee document with the image URL
					await updateDoc(docRef, {
						image: imageUrl,
						updatedAt: new Date(),
					});
				} catch (uploadError) {
					console.error('Error uploading image:', uploadError);
					// Continue without the image if upload fails
				}
			}

			// Upload documents if provided
			if (documents && documents.length > 0) {
				try {
					const docResult =
						await employeeService.uploadEmployeeDocuments(
							docRef.id,
							documents
						);
					if (docResult.success) {
						uploadedDocuments = docResult.documents;
						// Update the employee document with the documents
						await updateDoc(docRef, {
							documents: uploadedDocuments,
							updatedAt: new Date(),
						});
					} else {
						console.error(
							'Error uploading documents:',
							docResult.error
						);
					}
				} catch (docError) {
					console.error('Error uploading documents:', docError);
					// Continue without documents if upload fails
				}
			}

			// Generate and upload QR code
			try {
				const qrData = qrService.generateEmployeeQRData(
					docRef.id,
					employeeData.name
				);

				const qrResult = await qrService.uploadQRCode(
					docRef.id,
					employeeData.name,
					qrData
				);

				if (qrResult.success) {
					qrCodeUrl = qrResult.downloadURL;

					// Update the employee document with the QR code URL
					await updateDoc(docRef, {
						qrCode: qrCodeUrl,
						updatedAt: new Date(),
					});
				} else {
					console.error('Error generating QR code:', qrResult.error);
					// Continue without QR code if generation fails
				}
			} catch (qrError) {
				console.error('Error uploading QR code:', qrError);
				// Continue without QR code if upload fails
			}

			return {
				success: true,
				employeeId: docRef.id,
				imageUrl: imageUrl,
				qrCodeUrl: qrCodeUrl,
				documents: uploadedDocuments,
			};
		} catch (error) {
			console.error('Error creating employee:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	// Update an existing employee
	updateEmployee: async (
		employeeId,
		employeeData,
		imageFile = null,
		documents = null
	) => {
		try {
			const employeeRef = doc(db, 'employees', employeeId);

			let updateData = {
				...employeeData,
				updatedAt: new Date(),
			};

			// If a new image file is provided, upload it
			if (imageFile) {
				try {
					// Create a reference to the file in Firebase Storage
					const imageRef = ref(
						storage,
						`employees/${employeeId}/profile.jpg`
					);

					// Upload the file
					await uploadBytes(imageRef, imageFile);

					// Get the download URL
					const imageUrl = await getDownloadURL(imageRef);
					updateData.image = imageUrl;
				} catch (uploadError) {
					console.error('Error uploading image:', uploadError);
					// Continue without updating the image if upload fails
				}
			}

			// If documents are provided, upload them
			if (documents !== null) {
				try {
					const docResult =
						await employeeService.uploadEmployeeDocuments(
							employeeId,
							documents
						);
					if (docResult.success) {
						updateData.documents = docResult.documents;
					} else {
						console.error(
							'Error uploading documents:',
							docResult.error
						);
					}
				} catch (docError) {
					console.error('Error uploading documents:', docError);
					// Continue without updating documents if upload fails
				}
			}

			// If name changed, regenerate QR code
			if (employeeData.name) {
				try {
					const qrData = qrService.generateEmployeeQRData(
						employeeId,
						employeeData.name
					);
					const qrResult = await qrService.uploadQRCode(
						employeeId,
						employeeData.name,
						qrData
					);

					if (qrResult.success) {
						updateData.qrCode = qrResult.downloadURL;
					} else {
						console.error(
							'Error regenerating QR code:',
							qrResult.error
						);
					}
				} catch (qrError) {
					console.error('Error uploading updated QR code:', qrError);
				}
			}

			// Update the employee document
			await updateDoc(employeeRef, updateData);

			return {
				success: true,
				employeeId: employeeId,
			};
		} catch (error) {
			console.error('Error updating employee:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	// Delete an employee
	deleteEmployee: async (employeeId) => {
		try {
			// Delete the employee document
			await deleteDoc(doc(db, 'employees', employeeId));

			// Try to delete the associated image from Storage
			try {
				const imageRef = ref(
					storage,
					`employees/${employeeId}/profile.jpg`
				);
				await deleteObject(imageRef);
			} catch (storageError) {
				console.warn(
					'Error deleting image from storage:',
					storageError
				);
				// Continue even if image deletion fails
			}

			return {
				success: true,
			};
		} catch (error) {
			console.error('Error deleting employee:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	// Get all employees
	getEmployees: async () => {
		try {
			const q = query(
				collection(db, 'employees'),
				orderBy('createdAt', 'desc')
			);
			const querySnapshot = await getDocs(q);

			const employees = [];
			querySnapshot.forEach((doc) => {
				employees.push({
					id: doc.id,
					...doc.data(),
				});
			});

			return {
				success: true,
				employees: employees,
			};
		} catch (error) {
			console.error('Error getting employees:', error);
			return {
				success: false,
				error: error.message,
				employees: [],
			};
		}
	},

	// Upload image only (for updating existing employee image)
	uploadEmployeeImage: async (employeeId, imageFile) => {
		try {
			// Create a reference to the file in Firebase Storage
			const imageRef = ref(
				storage,
				`employees/${employeeId}/profile.jpg`
			);

			// Upload the file
			await uploadBytes(imageRef, imageFile);

			// Get the download URL
			const imageUrl = await getDownloadURL(imageRef);

			return {
				success: true,
				imageUrl: imageUrl,
			};
		} catch (error) {
			console.error('Error uploading employee image:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	// Upload documents for an employee
	uploadEmployeeDocuments: async (employeeId, documents) => {
		try {
			const uploadedDocuments = [];

			for (const doc of documents) {
				if (doc.file) {
					// Generate a unique filename
					const timestamp = Date.now();
					const fileExtension = doc.name.split('.').pop();
					const fileName = `${timestamp}_${doc.name.replace(
						/[^a-zA-Z0-9.-]/g,
						'_'
					)}`;

					// Create a reference to the file in Firebase Storage
					const docRef = ref(
						storage,
						`employees/${employeeId}/documents/${fileName}`
					);

					// Upload the file
					await uploadBytes(docRef, doc.file);

					// Get the download URL
					const downloadURL = await getDownloadURL(docRef);

					uploadedDocuments.push({
						name: doc.name,
						url: downloadURL,
						size: doc.size,
						type: doc.type,
						uploadedAt: new Date(),
					});
				} else if (doc.url) {
					// Document already uploaded, keep existing data
					uploadedDocuments.push(doc);
				}
			}

			return {
				success: true,
				documents: uploadedDocuments,
			};
		} catch (error) {
			console.error('Error uploading employee documents:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	// Delete a specific document
	deleteEmployeeDocument: async (employeeId, documentUrl) => {
		try {
			// Extract the file path from the URL
			const url = new URL(documentUrl);
			const pathMatch = url.pathname.match(/\/o\/(.+)\?/);

			if (pathMatch) {
				const filePath = decodeURIComponent(pathMatch[1]);
				const docRef = ref(storage, filePath);
				await deleteObject(docRef);
			}

			return {
				success: true,
			};
		} catch (error) {
			console.error('Error deleting employee document:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},
};

export default employeeService;
