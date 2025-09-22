import React, { useState, useEffect } from 'react';
import Employee from '../../utils/models/Employee';
import BuildSite from '../../utils/models/BuildSite';
import EmployeesTable from './components/EmployeesTable';
import EmployeeModal from './components/EmployeeModal';
import BuildSiteModal from './components/BuildSiteModal';
import PINManagementModal from './components/PINManagementModal';
import { employeeService } from '../../../firebase/employeeService';
import { buildSiteService } from '../../../firebase/buildSiteService';

const Employees = () => {
	const [employees, setEmployees] = useState([]);
	const [buildSites, setBuildSites] = useState([]);
	const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
	const [isBuildSiteModalOpen, setIsBuildSiteModalOpen] = useState(false);
	const [selectedEmployee, setSelectedEmployee] = useState(null);
	const [selectedBuildSite, setSelectedBuildSite] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredEmployees, setFilteredEmployees] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isPinSettingsModalOpen, setIsPinSettingsModalOpen] = useState(false);

	// Load employees and build sites from Firebase on component mount
	useEffect(() => {
		const loadData = async () => {
			setIsLoading(true);
			setError(null);

			try {
				// Load employees
				const employeesResult = await employeeService.getEmployees();
				if (employeesResult.success) {
					// Convert Firebase data to Employee objects
					const employeeObjects = employeesResult.employees.map(
						(emp) =>
							new Employee(
								emp.id,
								emp.name,
								emp.firm,
								emp.birthdate,
								emp.buildSite,
								emp.role,
								emp.image,
								emp.documents || [],
								emp.notes,
								emp.rating,
								emp.qrCode,
								emp.createdAt?.toDate?.()?.toISOString() ||
									emp.createdAt,
								emp.updatedAt?.toDate?.()?.toISOString() ||
									emp.updatedAt
							)
					);
					setEmployees(employeeObjects);
					console.log('Employees loaded:', employeeObjects);
				} else {
					setError(employeesResult.error);
				}

				// Load build sites
				const buildSitesResult = await buildSiteService.getBuildSites();
				if (buildSitesResult.success) {
					// Convert Firebase data to BuildSite objects
					const buildSiteObjects = buildSitesResult.buildSites.map(
						(site) =>
							new BuildSite(
								site.id,
								site.name,
								site.address,
								site.city,
								site.state,
								site.zip,
								site.country,
								site.phone,
								site.email,
								site.website,
								site.notes,
								site.createdAt?.toDate?.()?.toISOString() ||
									site.createdAt,
								site.updatedAt?.toDate?.()?.toISOString() ||
									site.updatedAt
							)
					);
					setBuildSites(buildSiteObjects);
					console.log('Build sites loaded:', buildSiteObjects);
				} else {
					console.error(
						'Error loading build sites:',
						buildSitesResult.error
					);
					// Don't set error for build sites as they're not critical for employees
				}
			} catch (err) {
				console.error('Error loading data:', err);
				setError('Failed to load data');
			} finally {
				setIsLoading(false);
			}
		};

		loadData();
	}, []);

	// Filter employees based on search term
	useEffect(() => {
		const filtered = employees.filter(
			(employee) =>
				employee.name
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				employee.firm
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				employee.role
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				employee.buildSite
					.toLowerCase()
					.includes(searchTerm.toLowerCase())
		);
		setFilteredEmployees(filtered);
	}, [employees, searchTerm]);

	const handleAddEmployee = () => {
		setSelectedEmployee(null);
		setIsEmployeeModalOpen(true);
	};

	const handleEditEmployee = (employee) => {
		setSelectedEmployee(employee);
		setIsEmployeeModalOpen(true);
	};

	const handleViewEmployee = (employee) => {
		setSelectedEmployee(employee);
		setIsEmployeeModalOpen(true);
	};

	const handleDeleteEmployee = async (employee) => {
		if (
			window.confirm(`Are you sure you want to delete ${employee.name}?`)
		) {
			try {
				const result = await employeeService.deleteEmployee(
					employee.id
				);
				if (result.success) {
					setEmployees((prev) =>
						prev.filter((emp) => emp.id !== employee.id)
					);
				} else {
					alert(`Error deleting employee: ${result.error}`);
				}
			} catch (error) {
				console.error('Error deleting employee:', error);
				alert('Failed to delete employee. Please try again.');
			}
		}
	};

	const handlePinSettings = () => {
		setIsPinSettingsModalOpen(true);
	};

	const handleClosePinSettings = () => {
		setIsPinSettingsModalOpen(false);
	};

	const handleSaveEmployee = (employee) => {
		if (selectedEmployee) {
			// Update existing employee
			setEmployees((prev) =>
				prev.map((emp) => (emp.id === employee.id ? employee : emp))
			);
		} else {
			// Add new employee
			setEmployees((prev) => [...prev, employee]);
		}
	};

	const handleCreateBuildSite = () => {
		setSelectedBuildSite(null);
		setIsBuildSiteModalOpen(true);
	};

	const handleEditBuildSite = (buildSite) => {
		setSelectedBuildSite(buildSite);
		setIsBuildSiteModalOpen(true);
	};

	const handleSaveBuildSite = (buildSite) => {
		if (selectedBuildSite) {
			// Update existing build site
			setBuildSites((prev) =>
				prev.map((site) =>
					site.id === buildSite.id ? buildSite : site
				)
			);
		} else {
			// Add new build site
			setBuildSites((prev) => [...prev, buildSite]);
		}
	};

	const handleDeleteBuildSite = async (buildSite) => {
		if (
			window.confirm(`Are you sure you want to delete ${buildSite.name}?`)
		) {
			try {
				const result = await buildSiteService.deleteBuildSite(
					buildSite.id
				);
				if (result.success) {
					setBuildSites((prev) =>
						prev.filter((site) => site.id !== buildSite.id)
					);
				} else {
					alert(`Error deleting build site: ${result.error}`);
				}
			} catch (error) {
				console.error('Error deleting build site:', error);
				alert('Failed to delete build site. Please try again.');
			}
		}
	};

	return (
		<div className='p-6'>
			<div className='mb-6'>
				<div className='flex justify-between items-center mb-4'>
					<h1 className='text-2xl font-bold text-gray-900'>
						Employees Management
					</h1>
					<div className='flex space-x-3'>
						<button
							onClick={handlePinSettings}
							className='px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500'
						>
							Pin Settings
						</button>
						<button
							onClick={handleCreateBuildSite}
							className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
						>
							Create Build Site
						</button>
						<button
							onClick={handleAddEmployee}
							className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
						>
							Add Employee
						</button>
					</div>
				</div>

				<div className='mb-4'>
					<input
						type='text'
						placeholder='Search employees...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>
			</div>

			<div className='bg-white rounded-lg shadow'>
				{isLoading ? (
					<div className='flex justify-center items-center py-12'>
						<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
						<span className='ml-2 text-gray-600'>
							Loading employees...
						</span>
					</div>
				) : error ? (
					<div className='text-center py-12'>
						<div className='text-red-600 mb-4'>
							<svg
								className='mx-auto h-12 w-12'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
								/>
							</svg>
						</div>
						<h3 className='text-lg font-medium text-gray-900 mb-2'>
							Error loading employees
						</h3>
						<p className='text-gray-500 mb-4'>{error}</p>
						<button
							onClick={() => window.location.reload()}
							className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
						>
							Try Again
						</button>
					</div>
				) : (
					<EmployeesTable
						employees={filteredEmployees}
						onEdit={handleEditEmployee}
						onDelete={handleDeleteEmployee}
						onView={handleViewEmployee}
					/>
				)}
			</div>

			<EmployeeModal
				isOpen={isEmployeeModalOpen}
				onClose={() => setIsEmployeeModalOpen(false)}
				onSave={handleSaveEmployee}
				employee={selectedEmployee}
				buildSites={buildSites}
			/>

			<BuildSiteModal
				isOpen={isBuildSiteModalOpen}
				onClose={() => setIsBuildSiteModalOpen(false)}
				onSave={handleSaveBuildSite}
				buildSite={selectedBuildSite}
			/>

			<PINManagementModal
				isOpen={isPinSettingsModalOpen}
				onClose={handleClosePinSettings}
			/>
		</div>
	);
};

export default Employees;
