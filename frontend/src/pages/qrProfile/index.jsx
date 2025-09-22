import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import PinForm from './components/PinForm';
import ProfilePage from './components/ProfilePage';
import { pinService } from '../../firebase/pinService';

const QRProfile = () => {
	const { id } = useParams();
	const [authorized, setAuthorized] = useState(false);
	const [employee, setEmployee] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [pinError, setPinError] = useState('');

	const handlePinSubmit = async (pin) => {
		try {
			const result = await pinService.verifyPIN(pin);

			if (result.success && result.isValid) {
				setAuthorized(true);
				setPinError('');
			} else {
				setPinError('Invalid PIN. Please try again.');
			}
		} catch (error) {
			console.error('Error verifying PIN:', error);
			setPinError('Error verifying PIN. Please try again.');
		}
	};

	useEffect(() => {
		const fetchEmployee = async () => {
			try {
				const employeeRef = doc(db, 'employees', id);
				const employeeDoc = await getDoc(employeeRef);
				if (employeeDoc.exists()) {
					setEmployee(employeeDoc.data());
				}
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchEmployee();
	}, [id]);

	if (isLoading) {
		return (
			<div className='w-screen h-screen flex items-center justify-center bg-sky-700'>
				<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white'></div>
			</div>
		);
	}

	if (!authorized) {
		return (
			<PinForm
				onSubmit={handlePinSubmit}
				error={pinError}
			/>
		);
	}

	return <ProfilePage employee={employee} />;
};

export default QRProfile;
