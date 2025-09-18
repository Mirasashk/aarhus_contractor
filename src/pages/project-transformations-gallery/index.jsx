import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import FilterPanel from './components/FilterPanel';
import ProjectModal from './components/ProjectModal';
import GalleryLightbox from './components/GalleryLightbox';
import ProjectStats from './components/ProjectStats';
import Footer from '../../components/ui/Footer';
import AdminFloatButton from '../../components/AdminFloatButton';

const ProjectTransformationsGallery = () => {
	const [projects] = useState([
		{
			id: 1,
			title: 'Social Housing Development - 48 Units',
			type: 'Housing',
			style: 'Social Housing',
			area: 4800,
			timeline: '8 months',
			rating: 4.9,
			sustainable: true,
			heritage: false,
			award: true,
			completedYear: 2024,
			description:
				'Large-scale social housing development delivering 48 affordable units with modern amenities and sustainable design.',
			fullDescription: `This comprehensive social housing project represents our commitment to creating quality affordable housing for the community. The development includes 48 modern units across multiple buildings, each designed to maximize natural light, energy efficiency, and community integration.\n\nThe project required extensive coordination with municipal authorities, compliance with EU regulations, and careful attention to sustainable building practices. Every aspect was designed to create not just housing, but a thriving community environment.`,
			clientQuote:
				'Aarhus Contractor delivered exceptional quality within budget and timeline. The project exceeded all expectations.',
			fullTestimonial:
				'Working with Aarhus Contractor on this social housing project was exceptional. They understood the complex requirements of government contracts and delivered a project that not only met but exceeded all specifications. The attention to detail, quality of construction, and adherence to timeline was outstanding. The residents love their new homes, and the project has become a model for future developments.',
			clientName: 'Aarhus Municipality',
			clientLocation: 'Aarhus C',
			investment: { min: 15000000, max: 18000000 },
			images: {
				main: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
				gallery: [
					'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
					'https://images.unsplash.com/photo-1556909045-f3c2e1b9b5b3?w=800&h=600&fit=crop',
					'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
					'https://images.unsplash.com/photo-1556909045-4d5c2b4b8b8b?w=800&h=600&fit=crop',
				],
			},
			features: [
				'Energy-efficient building systems',
				'Sustainable materials throughout',
				'Community facilities integration',
				'Accessibility compliance',
				'Modern apartment layouts',
				'Green building certification',
			],
			processSteps: [
				{
					title: 'Site Assessment',
					description:
						'Comprehensive evaluation of site conditions and requirements',
					duration: '2 weeks',
				},
				{
					title: 'Design Development',
					description:
						'Creating plans that meet government standards',
					duration: '4 weeks',
				},
				{
					title: 'Permit Acquisition',
					description: 'Obtaining all necessary government approvals',
					duration: '6 weeks',
				},
				{
					title: 'Construction Phase',
					description:
						'Building with quality control and safety standards',
					duration: '24 weeks',
				},
				{
					title: 'Final Inspection',
					description:
						'Government compliance verification and handover',
					duration: '2 weeks',
				},
			],
			materials: [
				{
					category: 'Structure',
					description: 'Reinforced concrete with steel framework',
					quality: 'Government Standard',
				},
				{
					category: 'Insulation',
					description: 'High-performance thermal insulation',
					quality: 'Energy Efficient',
				},
				{
					category: 'Windows',
					description: 'Triple-glazed energy-efficient windows',
					quality: 'Premium Grade',
				},
				{
					category: 'Finishes',
					description: 'Durable, low-maintenance materials',
					quality: 'Commercial Grade',
				},
			],
		},
		{
			id: 2,
			title: 'Municipal Office Renovation',
			type: 'Government',
			style: 'Government Building',
			area: 1200,
			timeline: '6 months',
			rating: 4.8,
			sustainable: true,
			heritage: false,
			award: false,
			completedYear: 2024,
			description:
				'Complete renovation of municipal office building with modern workspace design and energy efficiency upgrades.',
			fullDescription: `This municipal office renovation project required careful coordination with ongoing government operations while implementing modern workspace design and energy efficiency improvements. The challenge was to maintain full operational capacity while completely modernizing the building's systems and finishes.\n\nThe project included comprehensive energy efficiency upgrades, modern workspace design, and accessibility improvements, all while ensuring zero disruption to government services.`,
			clientQuote:
				'The renovation was completed seamlessly with minimal disruption to our operations.',
			fullTestimonial:
				'The municipal office renovation exceeded our expectations in every way. The team worked around our operational requirements, ensuring zero disruption to government services while delivering a completely modernized facility. The energy efficiency improvements have already shown significant cost savings, and the new workspace design has improved employee satisfaction and productivity.',
			clientName: 'Aarhus Municipality',
			clientLocation: 'Aarhus C',
			investment: { min: 8500000, max: 10000000 },
			images: {
				main: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop',
				gallery: [
					'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop',
					'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
					'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop&crop=entropy',
					'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop&crop=faces',
				],
			},
			features: [
				'Energy efficiency improvements',
				'Modern workspace design',
				'Accessibility compliance',
				'Zero operational disruption',
				'Smart building systems',
				'Government standards compliance',
			],
			processSteps: [
				{
					title: 'Operational Assessment',
					description:
						'Evaluating current operations and requirements',
					duration: '1 week',
				},
				{
					title: 'Phased Planning',
					description:
						'Creating phased approach to minimize disruption',
					duration: '2 weeks',
				},
				{
					title: 'Systems Upgrade',
					description:
						'Installing modern HVAC and electrical systems',
					duration: '8 weeks',
				},
				{
					title: 'Interior Renovation',
					description: 'Modernizing workspace design and finishes',
					duration: '12 weeks',
				},
				{
					title: 'Final Testing',
					description: 'System testing and staff training',
					duration: '2 weeks',
				},
			],
			materials: [
				{
					category: 'HVAC',
					description: 'High-efficiency heating and cooling systems',
					quality: 'Energy Star Certified',
				},
				{
					category: 'Lighting',
					description: 'LED lighting with smart controls',
					quality: 'Commercial Grade',
				},
				{
					category: 'Flooring',
					description: 'Durable commercial carpet and tile',
					quality: 'Government Standard',
				},
				{
					category: 'Furniture',
					description: 'Ergonomic office furniture systems',
					quality: 'Professional Grade',
				},
			],
		},
		{
			id: 3,
			title: 'Student Housing Complex - 120 Units',
			type: 'Housing',
			style: 'Student Housing',
			area: 7200,
			timeline: '10 months',
			rating: 4.9,
			sustainable: true,
			heritage: false,
			award: true,
			completedYear: 2024,
			description:
				'Large-scale student housing development with modern amenities, study facilities, and sustainable design features.',
			fullDescription: `This comprehensive student housing project was designed to meet the growing demand for quality student accommodation in Aarhus. The development includes 120 modern units with integrated study facilities, common areas, and sustainable design features.\n\nThe project required careful coordination with university requirements, government standards, and student needs. Every aspect was designed to create a supportive environment for student life while maintaining high construction standards.`,
			clientQuote:
				'Students love their new homes and the facilities exceed expectations.',
			fullTestimonial:
				"The student housing project was delivered with exceptional quality and attention to detail. The team understood the unique requirements of student accommodation and created a facility that not only meets but exceeds expectations. The integration of study facilities, common areas, and modern amenities has created a thriving student community. The sustainable design features also align with the university's environmental goals.",
			clientName: 'Aarhus University',
			clientLocation: 'Aarhus N',
			investment: { min: 22000000, max: 25000000 },
			images: {
				main: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
				gallery: [
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=entropy',
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=faces',
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=edges',
				],
			},
			features: [
				'Modern student amenities',
				'Integrated study facilities',
				'Common area design',
				'Sustainable materials',
				'Energy-efficient systems',
				'Accessibility compliance',
			],
			processSteps: [
				{
					title: 'University Consultation',
					description:
						'Working with university requirements and standards',
					duration: '2 weeks',
				},
				{
					title: 'Design Development',
					description:
						'Creating student-focused living and study spaces',
					duration: '4 weeks',
				},
				{
					title: 'Permit Process',
					description: 'Obtaining all necessary government approvals',
					duration: '8 weeks',
				},
				{
					title: 'Construction Phase',
					description:
						'Building with quality control and safety standards',
					duration: '32 weeks',
				},
				{
					title: 'Furnishing & Setup',
					description:
						'Installing furniture and preparing for occupancy',
					duration: '4 weeks',
				},
			],
			materials: [
				{
					category: 'Structure',
					description: 'Reinforced concrete with steel framework',
					quality: 'Commercial Grade',
				},
				{
					category: 'Insulation',
					description:
						'High-performance thermal and acoustic insulation',
					quality: 'Energy Efficient',
				},
				{
					category: 'Windows',
					description: 'Triple-glazed energy-efficient windows',
					quality: 'Premium Grade',
				},
				{
					category: 'Furniture',
					description: 'Durable student furniture and fixtures',
					quality: 'Commercial Standard',
				},
			],
		},
		{
			id: 4,
			title: 'Community Center Development',
			type: 'Infrastructure',
			style: 'Community Center',
			area: 2000,
			timeline: '12 months',
			rating: 4.7,
			sustainable: false,
			heritage: false,
			award: false,
			completedYear: 2024,
			description:
				'New community center development with multi-purpose spaces, sports facilities, and cultural amenities.',
			fullDescription: `This community center project was designed to serve as a hub for local activities and cultural events. The development includes multi-purpose spaces, sports facilities, cultural amenities, and administrative offices.\n\nThe project required extensive community consultation to ensure the facility meets local needs while maintaining high construction standards and government compliance.`,
			clientQuote:
				'The community center has become the heart of our neighborhood.',
			fullTestimonial:
				'The community center project has exceeded all expectations. The facility has become a true hub for our community, hosting everything from sports activities to cultural events. The team understood the diverse needs of our community and created a space that serves everyone. The quality of construction and attention to detail is evident throughout the facility.',
			clientName: 'Aarhus Municipality',
			clientLocation: 'Aarhus V',
			investment: { min: 12000000, max: 15000000 },
			images: {
				main: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
				gallery: [
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=entropy',
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=faces',
				],
			},
			features: [
				'Multi-purpose spaces',
				'Sports facilities',
				'Cultural amenities',
				'Administrative offices',
				'Community consultation',
				'Government compliance',
			],
			processSteps: [
				{
					title: 'Community Consultation',
					description:
						'Engaging with local community and stakeholders',
					duration: '4 weeks',
				},
				{
					title: 'Design Development',
					description: 'Creating multi-functional community spaces',
					duration: '8 weeks',
				},
				{
					title: 'Permit Process',
					description: 'Obtaining all necessary government approvals',
					duration: '12 weeks',
				},
				{
					title: 'Construction Phase',
					description:
						'Building with quality control and safety standards',
					duration: '36 weeks',
				},
				{
					title: 'Community Setup',
					description: 'Preparing facility for community use',
					duration: '4 weeks',
				},
			],
			materials: [
				{
					category: 'Structure',
					description: 'Reinforced concrete with steel framework',
					quality: 'Commercial Grade',
				},
				{
					category: 'Sports Flooring',
					description: 'Professional-grade sports flooring systems',
					quality: 'Competition Standard',
				},
				{
					category: 'HVAC',
					description: 'High-efficiency heating and cooling systems',
					quality: 'Energy Star Certified',
				},
				{
					category: 'Lighting',
					description: 'LED lighting with smart controls',
					quality: 'Commercial Grade',
				},
			],
		},
		{
			id: 5,
			title: 'Healthcare Facility Renovation',
			type: 'Government',
			style: 'Healthcare',
			area: 1500,
			timeline: '8 months',
			rating: 4.8,
			sustainable: true,
			heritage: true,
			award: true,
			completedYear: 2023,
			description:
				'Complete renovation of healthcare facility with modern medical equipment integration and accessibility improvements.',
			fullDescription: `This healthcare facility renovation project required careful coordination with medical operations while implementing modern medical equipment integration and accessibility improvements. The challenge was to maintain full medical services while completely modernizing the facility's systems and finishes.\n\nThe project included comprehensive accessibility improvements, modern medical equipment integration, and energy efficiency upgrades, all while ensuring zero disruption to patient care.`,
			clientQuote:
				'The renovation has improved patient care and staff efficiency significantly.',
			fullTestimonial:
				'The healthcare facility renovation has transformed our ability to provide quality patient care. The team worked around our medical operations, ensuring zero disruption to patient services while delivering a completely modernized facility. The accessibility improvements have made our services more inclusive, and the new medical equipment integration has improved both patient care and staff efficiency.',
			clientName: 'Aarhus University Hospital',
			clientLocation: 'Aarhus C',
			investment: { min: 18000000, max: 22000000 },
			images: {
				main: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
				gallery: [
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=entropy',
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=faces',
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=edges',
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
				],
			},
			features: [
				'Medical equipment integration',
				'Accessibility improvements',
				'Energy efficiency upgrades',
				'Zero disruption to patient care',
				'Modern medical systems',
				'Compliance with healthcare standards',
			],
			processSteps: [
				{
					title: 'Medical Operations Planning',
					description:
						'Coordinating with medical staff and operations',
					duration: '4 weeks',
				},
				{
					title: 'Equipment Integration',
					description:
						'Installing modern medical equipment and systems',
					duration: '12 weeks',
				},
				{
					title: 'Accessibility Upgrades',
					description:
						'Implementing comprehensive accessibility improvements',
					duration: '8 weeks',
				},
				{
					title: 'Energy Efficiency',
					description: 'Upgrading HVAC and lighting systems',
					duration: '6 weeks',
				},
				{
					title: 'Final Testing',
					description: 'Testing all systems and ensuring compliance',
					duration: '2 weeks',
				},
			],
			materials: [
				{
					category: 'Medical Equipment',
					description:
						'State-of-the-art medical systems and equipment',
					quality: 'Healthcare Grade',
				},
				{
					category: 'Accessibility',
					description: 'ADA-compliant fixtures and systems',
					quality: 'Universal Design',
				},
				{
					category: 'HVAC',
					description: 'High-efficiency medical-grade systems',
					quality: 'Healthcare Certified',
				},
				{
					category: 'Lighting',
					description: 'Medical-grade LED lighting systems',
					quality: 'Healthcare Standard',
				},
			],
		},
		{
			id: 6,
			title: 'Educational Campus Expansion',
			type: 'Infrastructure',
			style: 'Educational',
			area: 3000,
			timeline: '18 months',
			rating: 4.9,
			sustainable: true,
			heritage: true,
			award: false,
			completedYear: 2023,
			description:
				'Comprehensive campus expansion with new classrooms, laboratories, and student facilities.',
			fullDescription: `This educational campus expansion project involved creating new classrooms, laboratories, and student facilities to accommodate growing enrollment. The project required careful coordination with educational operations and compliance with educational facility standards.\n\nOur approach involved extensive research into educational facility requirements, sourcing appropriate materials, and employing construction techniques that meet educational standards. The result is a campus expansion that supports 21st-century education while maintaining the campus's architectural character.`,
			clientQuote:
				'The new facilities have enhanced our educational capabilities significantly.',
			fullTestimonial:
				'The campus expansion has transformed our educational capabilities. The new facilities provide modern learning environments that support our educational mission. The team worked closely with our faculty and staff to ensure the spaces meet our specific needs. The quality of construction and attention to detail is evident throughout, and the new facilities have become a source of pride for our entire community.',
			clientName: 'Aarhus University',
			clientLocation: 'Aarhus C',
			investment: { min: 35000000, max: 45000000 },
			images: {
				main: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
				gallery: [
					'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
					'https://images.unsplash.com/photo-1556909045-f3c2e1b9b5b3?w=800&h=600&fit=crop',
					'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=entropy',
				],
			},
			features: [
				'Modern learning spaces',
				'State-of-the-art laboratories',
				'Student amenities',
				'Educational facility standards',
				'Campus integration',
				'Sustainable design',
			],
			processSteps: [
				{
					title: 'Educational Planning',
					description:
						'Coordinating with faculty and educational staff',
					duration: '8 weeks',
				},
				{
					title: 'Design Development',
					description: 'Creating modern learning environments',
					duration: '12 weeks',
				},
				{
					title: 'Permit Process',
					description: 'Obtaining educational facility approvals',
					duration: '16 weeks',
				},
				{
					title: 'Construction Phase',
					description: 'Building with educational standards',
					duration: '48 weeks',
				},
				{
					title: 'Campus Integration',
					description:
						'Connecting new facilities with existing campus',
					duration: '8 weeks',
				},
			],
			materials: [
				{
					category: 'Structure',
					description: 'Reinforced concrete with steel framework',
					quality: 'Educational Grade',
				},
				{
					category: 'Laboratory Systems',
					description: 'Specialized laboratory infrastructure',
					quality: 'Research Standard',
				},
				{
					category: 'HVAC',
					description: 'High-efficiency educational systems',
					quality: 'Energy Star Certified',
				},
				{
					category: 'Lighting',
					description: 'LED lighting with smart controls',
					quality: 'Educational Standard',
				},
			],
		},
	]);

	const [filters, setFilters] = useState({
		projectType: 'all',
		style: 'all',
		scope: 'all',
		investment: 'all',
		timeline: 'all',
		sustainable: false,
		heritage: false,
		award: false,
	});

	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
	const [sortBy, setSortBy] = useState('newest');

	// Filter projects based on current filters
	const filteredProjects = projects?.filter((project) => {
		// Project type filter
		if (
			filters?.projectType !== 'all' &&
			project?.type?.toLowerCase() !== filters?.projectType
		) {
			return false;
		}

		// Style filter
		if (
			filters?.style !== 'all' &&
			project?.style?.toLowerCase()?.replace(' ', '-') !== filters?.style
		) {
			return false;
		}

		// Investment filter
		if (filters?.investment !== 'all') {
			const [min, max] = filters?.investment
				?.split('-')
				?.map((v) => (v === '+' ? Infinity : parseInt(v)));
			const projectAvg =
				(project?.investment?.min + project?.investment?.max) / 2;
			if (max) {
				if (projectAvg < min || projectAvg > max) return false;
			} else {
				if (projectAvg < min) return false;
			}
		}

		// Timeline filter
		if (filters?.timeline !== 'all') {
			const timelineMap = {
				'1-4': ['1 week', '2 weeks', '3 weeks', '4 weeks'],
				'1-3': ['1 month', '2 months', '3 months'],
				'3-6': ['3 months', '4 months', '5 months', '6 months'],
				'6+': [
					'6 months',
					'7 months',
					'8 months',
					'9 months',
					'10 months',
				],
			};

			const allowedTimelines = timelineMap?.[filters?.timeline] || [];
			if (
				!allowedTimelines?.some((timeline) =>
					project?.timeline?.includes(timeline?.split(' ')?.[0])
				)
			) {
				return false;
			}
		}

		// Special features filters
		if (filters?.sustainable && !project?.sustainable) return false;
		if (filters?.heritage && !project?.heritage) return false;
		if (filters?.award && !project?.award) return false;

		return true;
	});

	// Sort filtered projects
	const sortedProjects = [...filteredProjects]?.sort((a, b) => {
		switch (sortBy) {
			case 'newest':
				return b?.completedYear - a?.completedYear || b?.id - a?.id;
			case 'oldest':
				return a?.completedYear - b?.completedYear || a?.id - b?.id;
			case 'rating':
				return b?.rating - a?.rating;
			case 'investment-high':
				return (
					(b?.investment?.min + b?.investment?.max) / 2 -
					(a?.investment?.min + a?.investment?.max) / 2
				);
			case 'investment-low':
				return (
					(a?.investment?.min + a?.investment?.max) / 2 -
					(b?.investment?.min + b?.investment?.max) / 2
				);
			default:
				return 0;
		}
	});

	const handleFilterChange = (key, value) => {
		setFilters((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	const handleClearFilters = () => {
		setFilters({
			projectType: 'all',
			style: 'all',
			scope: 'all',
			investment: 'all',
			timeline: 'all',
			sustainable: false,
			heritage: false,
			award: false,
		});
	};

	const handleViewDetails = (project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const handleOpenGallery = (project, imageIndex = 0) => {
		setSelectedProject(project);
		setLightboxImageIndex(imageIndex);
		setIsLightboxOpen(true);
	};

	const sortOptions = [
		{ value: 'newest', label: 'Newest First' },
		{ value: 'oldest', label: 'Oldest First' },
		{ value: 'rating', label: 'Highest Rated' },
		{ value: 'investment-high', label: 'Highest Investment' },
		{ value: 'investment-low', label: 'Lowest Investment' },
	];

	return (
		<div className='min-h-screen bg-background'>
			<Header />
			{/* Hero Section */}
			<section className='pt-20 pb-12 bg-gradient-to-b from-muted to-background'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center max-w-4xl mx-auto'>
						<h1 className='headline-primary text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6'>
							Professional Construction Portfolio
						</h1>
						<p className='body-primary text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed'>
							Explore our comprehensive portfolio of large-scale
							construction projects, government contracts, and
							infrastructure developments. Each project
							demonstrates our commitment to professional
							excellence, regulatory compliance, and delivering
							exceptional results for our B2B clients.
						</p>
						<div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
							<Button
								variant='default'
								size='lg'
								iconName='FileText'
								iconPosition='left'
								className='bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground'
								onClick={() =>
									(window.location.href =
										'/consultation-journey')
								}
							>
								Request Project Proposal
							</Button>
							<Button
								variant='outline'
								size='lg'
								iconName='Building'
								iconPosition='left'
								onClick={() => handleOpenGallery(projects?.[0])}
							>
								View Project Gallery
							</Button>
						</div>
					</div>
				</div>
			</section>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
				{/* Portfolio Stats */}
				<div className='mb-12'>
					<ProjectStats
						projects={projects}
						filteredProjects={filteredProjects}
					/>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
					{/* Filter Sidebar */}
					<div className='lg:col-span-1'>
						<FilterPanel
							filters={filters}
							onFilterChange={handleFilterChange}
							onClearFilters={handleClearFilters}
							isOpen={isFilterOpen}
							onToggle={() => setIsFilterOpen(!isFilterOpen)}
							projectCount={filteredProjects?.length}
						/>
					</div>

					{/* Main Content */}
					<div className='lg:col-span-3'>
						{/* Sort and View Controls */}
						<div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0'>
							<div className='flex items-center space-x-4'>
								<h2 className='text-lg font-semibold text-foreground'>
									{filteredProjects?.length} Projects Found
								</h2>
								{filteredProjects?.length !==
									projects?.length && (
									<Button
										variant='ghost'
										size='sm'
										iconName='X'
										iconPosition='left'
										onClick={handleClearFilters}
										className='text-muted-foreground hover:text-foreground'
									>
										Clear Filters
									</Button>
								)}
							</div>

							<div className='flex items-center space-x-4'>
								<span className='text-sm text-muted-foreground'>
									Sort by:
								</span>
								<select
									value={sortBy}
									onChange={(e) =>
										setSortBy(e?.target?.value)
									}
									className='bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-primary'
								>
									{sortOptions?.map((option) => (
										<option
											key={option?.value}
											value={option?.value}
										>
											{option?.label}
										</option>
									))}
								</select>
							</div>
						</div>

						{/* Projects Grid */}
						{sortedProjects?.length > 0 ? (
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
								{sortedProjects?.map((project) => (
									<ProjectCard
										key={project?.id}
										project={project}
										onViewDetails={handleViewDetails}
										onOpenGallery={handleOpenGallery}
									/>
								))}
							</div>
						) : (
							<div className='text-center py-16'>
								<Icon
									name='Search'
									size={48}
									className='text-muted-foreground mx-auto mb-4'
								/>
								<h3 className='text-xl font-semibold text-foreground mb-2'>
									No Projects Found
								</h3>
								<p className='text-muted-foreground mb-6'>
									Try adjusting your filters to see more
									projects.
								</p>
								<Button
									variant='outline'
									iconName='RotateCcw'
									iconPosition='left'
									onClick={handleClearFilters}
								>
									Clear All Filters
								</Button>
							</div>
						)}

						{/* Load More / Pagination could go here */}
						{sortedProjects?.length > 0 && (
							<div className='text-center mt-12'>
								<p className='text-sm text-muted-foreground mb-4'>
									Showing {sortedProjects?.length} of{' '}
									{projects?.length} projects
								</p>
								<Button
									variant='outline'
									iconName='MessageCircle'
									iconPosition='left'
									onClick={() =>
										(window.location.href =
											'/consultation-journey')
									}
								>
									Discuss Your Project Ideas
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
			{/* Call to Action Section */}
			<section className='bg-muted py-16'>
				<div className='max-w-4xl mx-auto px-6 lg:px-8 text-center'>
					<h2 className='headline-secondary text-3xl font-bold text-foreground mb-6'>
						Ready to Transform Your Space?
					</h2>
					<p className='body-primary text-lg text-muted-foreground mb-8 leading-relaxed'>
						Every great transformation begins with a conversation.
						Let's discuss your vision and explore how Danish
						craftsmanship can bring your dream space to life.
					</p>
					<div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
						<Button
							variant='default'
							size='lg'
							iconName='Calendar'
							iconPosition='left'
							className='bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground'
							onClick={() =>
								(window.location.href = '/consultation-journey')
							}
						>
							Schedule Consultation
						</Button>
						<Button
							variant='outline'
							size='lg'
							iconName='Phone'
							iconPosition='left'
						>
							Call: +45 8765 4321
						</Button>
					</div>
				</div>
			</section>
			{/* Project Detail Modal */}
			<ProjectModal
				project={selectedProject}
				isOpen={isModalOpen}
				onClose={() => {
					setIsModalOpen(false);
					setSelectedProject(null);
				}}
			/>
			{/* Gallery Lightbox */}
			<GalleryLightbox
				project={selectedProject}
				isOpen={isLightboxOpen}
				onClose={() => {
					setIsLightboxOpen(false);
					setSelectedProject(null);
				}}
				initialImageIndex={lightboxImageIndex}
			/>
			<Footer />
			<AdminFloatButton />
		</div>
	);
};

export default ProjectTransformationsGallery;
