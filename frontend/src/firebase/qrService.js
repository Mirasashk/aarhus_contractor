// QR Code Service - Generate and manage QR codes for employees
import QRCode from 'qrcode';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './config';

export const qrService = {
	// Generate QR code data URL
	generateQRCodeDataURL: async (data, options = {}) => {
		try {
			const defaultOptions = {
				width: 300,
				margin: 2,
				color: {
					dark: '#000000',
					light: '#FFFFFF',
				},
				errorCorrectionLevel: 'M',
			};

			const qrOptions = { ...defaultOptions, ...options };
			const dataURL = await QRCode.toDataURL(data, qrOptions);
			return {
				success: true,
				dataURL: dataURL,
			};
		} catch (error) {
			console.error('Error generating QR code:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	// Generate QR code as buffer (for file upload)
	generateQRCodeBuffer: async (data, options = {}) => {
		try {
			const defaultOptions = {
				width: 300,
				margin: 2,
				color: {
					dark: '#000000',
					light: '#FFFFFF',
				},
				errorCorrectionLevel: 'M',
			};

			const qrOptions = { ...defaultOptions, ...options };

			// Generate QR code as data URL first (browser compatible)
			const dataURL = await QRCode.toDataURL(data, qrOptions);

			// Convert data URL to buffer
			const base64Data = dataURL.split(',')[1];
			const binaryString = atob(base64Data);
			const bytes = new Uint8Array(binaryString.length);
			for (let i = 0; i < binaryString.length; i++) {
				bytes[i] = binaryString.charCodeAt(i);
			}

			return {
				success: true,
				buffer: bytes,
			};
		} catch (error) {
			console.error('Error generating QR code buffer:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	// Upload QR code to Firebase Storage
	uploadQRCode: async (employeeId, employeeName, qrData) => {
		try {
			// Generate QR code buffer
			const qrResult = await qrService.generateQRCodeBuffer(qrData);

			if (!qrResult.success) {
				return qrResult;
			}

			// Create filename: firstname-lastname-QRCODE.png
			const nameParts = employeeName.trim().split(' ');
			const firstName = nameParts[0] || 'Employee';
			const lastName = nameParts.slice(1).join('-') || 'Unknown';
			const fileName = `${firstName}-${lastName}-QRCODE.png`;

			// Create storage reference
			const qrRef = ref(storage, `employees/${employeeId}/${fileName}`);

			// Upload the QR code
			await uploadBytes(qrRef, qrResult.buffer, {
				contentType: 'image/png',
			});

			// Get download URL
			const downloadURL = await getDownloadURL(qrRef);

			return {
				success: true,
				fileName: fileName,
				downloadURL: downloadURL,
			};
		} catch (error) {
			console.error('Error uploading QR code:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	// Generate QR code data for employee profile
	generateEmployeeQRData: (employeeId, employeeName, baseUrl = '') => {
		// Create a direct URL that will open in the browser
		// This should match the route defined in Routes.jsx: qr-profile/:id
		const profileUrl = baseUrl
			? `${baseUrl}/qr-profile/${employeeId}`
			: `${window.location.origin}/qr-profile/${employeeId}`;

		// Return the direct URL for the QR code
		return profileUrl;
	},

	// Parse QR code data
	parseQRData: (qrDataString) => {
		try {
			const data = JSON.parse(qrDataString);
			return {
				success: true,
				data: data,
			};
		} catch (error) {
			console.error('Error parsing QR data:', error);
			return {
				success: false,
				error: 'Invalid QR code data',
			};
		}
	},
};

export default qrService;
