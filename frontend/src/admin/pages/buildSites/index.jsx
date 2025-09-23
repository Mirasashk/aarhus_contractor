import React, { useState, useEffect } from 'react';
import BuildSite from '../../utils/models/BuildSite';
import BuildSitesTable from './components/BuildSitesTable';
import BuildSiteModal from './components/BuildSiteModal';
import BuildSiteViewModal from './components/BuildSiteViewModal';
import { buildSiteService } from '../../../firebase/buildSiteService';

const BuildSites = () => {
	const [buildSites, setBuildSites] = useState([]);
	const [isBuildSiteModalOpen, setIsBuildSiteModalOpen] = useState(false);
	const [isViewModalOpen, setIsViewModalOpen] = useState(false);
	const [selectedBuildSite, setSelectedBuildSite] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredBuildSites, setFilteredBuildSites] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	// Load build sites from Firebase on component mount
	useEffect(() => {
		const loadData = async () => {
			setIsLoading(true);
			setError(null);

			try {
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
					setError(buildSitesResult.error);
				}
			} catch (err) {
				console.error('Error loading build sites:', err);
				setError('Failed to load build sites');
			} finally {
				setIsLoading(false);
			}
		};

		loadData();
	}, []);

	// Filter build sites based on search term
	useEffect(() => {
		const filtered = buildSites.filter(
			(site) =>
				site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				site.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
				site.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
				site.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
				site.country.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredBuildSites(filtered);
	}, [buildSites, searchTerm]);

	const handleAddBuildSite = () => {
		setSelectedBuildSite(null);
		setIsBuildSiteModalOpen(true);
	};

	const handleEditBuildSite = (buildSite) => {
		setSelectedBuildSite(buildSite);
		setIsBuildSiteModalOpen(true);
	};

	const handleViewBuildSite = (buildSite) => {
		setSelectedBuildSite(buildSite);
		setIsViewModalOpen(true);
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

	return (
		<div className='p-6'>
			<div className='mb-6'>
				<div className='flex justify-between items-center mb-4'>
					<h1 className='text-2xl font-bold text-gray-900'>
						Build Sites Management
					</h1>
					<div className='flex space-x-3'>
						<button
							onClick={handleAddBuildSite}
							className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
						>
							Add Build Site
						</button>
					</div>
				</div>

				<div className='mb-4'>
					<input
						type='text'
						placeholder='Search build sites...'
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
							Loading build sites...
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
							Error loading build sites
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
					<BuildSitesTable
						buildSites={filteredBuildSites}
						onEdit={handleEditBuildSite}
						onDelete={handleDeleteBuildSite}
						onView={handleViewBuildSite}
					/>
				)}
			</div>

			<BuildSiteModal
				isOpen={isBuildSiteModalOpen}
				onClose={() => setIsBuildSiteModalOpen(false)}
				onSave={handleSaveBuildSite}
				buildSite={selectedBuildSite}
			/>

			<BuildSiteViewModal
				isOpen={isViewModalOpen}
				onClose={() => setIsViewModalOpen(false)}
				buildSite={selectedBuildSite}
			/>
		</div>
	);
};

export default BuildSites;
