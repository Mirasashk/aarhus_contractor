// Employees Service - read-only helpers for employees collection
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from './config';

export const employeesService = {
	/**
	 * Get active employees for selection
	 * @returns {Promise<{success:boolean,data:Array,error?:string}>}
	 */
	getActiveEmployees: async () => {
		try {
			const q = query(
				collection(db, 'employees'),
				where('isActive', '==', true),
				orderBy('name', 'asc')
			);
			const snap = await getDocs(q);
			const employees = [];
			snap.forEach((doc) => {
				console.log(doc.data());
				employees.push({ id: doc.id, ...doc.data() });
			});
			return { success: true, data: employees };
		} catch (error) {
			console.error('Error fetching active employees:', error);
			return { success: false, data: [], error: error.message };
		}
	},
};

export default employeesService;
