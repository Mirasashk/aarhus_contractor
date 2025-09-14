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
			title: 'Aarhus Heritage Kitchen Revival',
			type: 'Kitchen',
			style: 'Heritage Restoration',
			area: 25,
			timeline: '3 months',
			rating: 4.9,
			sustainable: true,
			heritage: true,
			award: true,
			completedYear: 2024,
			description:
				'A thoughtful restoration of a 1920s kitchen that honors original Danish craftsmanship while introducing modern functionality.',
			fullDescription: `This remarkable kitchen transformation in central Aarhus represents the perfect marriage of heritage preservation and contemporary living. The original 1920s home featured beautiful architectural details that had been covered by decades of renovations. Our approach focused on revealing and celebrating these original elements while seamlessly integrating modern appliances and storage solutions.\n\nThe project required careful research into period-appropriate materials and techniques, working closely with local heritage specialists to ensure authenticity. Every detail, from the restored original hardwood floors to the hand-forged cabinet hardware, reflects our commitment to Danish craftsmanship traditions.`,
			clientQuote:
				"They didn't just renovate our kitchen; they brought our home's soul back to life.",
			fullTestimonial:
				"Working with Aarhus Contractor was like having a master craftsman and historian combined. They understood not just what we wanted, but what our 1920s home needed. The attention to detail was extraordinary - they even sourced original tiles from a demolished building of the same era. The result is a kitchen that feels both timeless and perfectly suited to our modern lifestyle. Every morning when I make coffee, I'm reminded of the incredible transformation they achieved.",
			clientName: 'Mette Andersen',
			clientLocation: 'Aarhus C',
			investment: { min: 450000, max: 550000 },
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
				'Original hardwood floor restoration',
				'Period-appropriate tile sourcing',
				'Custom oak cabinetry',
				'Integrated modern appliances',
				'Heritage color palette',
				'Handcrafted hardware',
			],
			processSteps: [
				{
					title: 'Heritage Assessment',
					description:
						'Detailed analysis of original features and materials',
					duration: '1 week',
				},
				{
					title: 'Design Development',
					description: "Creating plans that honor the home's history",
					duration: '2 weeks',
				},
				{
					title: 'Material Sourcing',
					description:
						'Finding period-appropriate materials and finishes',
					duration: '3 weeks',
				},
				{
					title: 'Restoration Work',
					description: 'Careful restoration of original elements',
					duration: '6 weeks',
				},
				{
					title: 'Modern Integration',
					description: 'Installing contemporary systems seamlessly',
					duration: '4 weeks',
				},
			],
			materials: [
				{
					category: 'Flooring',
					description: 'Restored original oak planks',
					quality: 'Heritage Grade',
				},
				{
					category: 'Cabinetry',
					description: 'Solid oak with traditional joinery',
					quality: 'Master Crafted',
				},
				{
					category: 'Countertops',
					description: 'Carrara marble with honed finish',
					quality: 'Premium Natural',
				},
				{
					category: 'Hardware',
					description: 'Hand-forged brass fittings',
					quality: 'Artisan Made',
				},
			],
		},
		{
			id: 2,
			title: 'Minimalist Bathroom Sanctuary',
			type: 'Bathroom',
			style: 'Minimalist',
			area: 12,
			timeline: '6 weeks',
			rating: 4.8,
			sustainable: true,
			heritage: false,
			award: false,
			completedYear: 2024,
			description:
				'A serene bathroom transformation emphasizing clean lines, natural materials, and Danish hygge principles.',
			fullDescription: `This bathroom renovation embodies the essence of Danish minimalism - creating a space that feels both luxurious and deeply calming. The design philosophy centered on the concept of 'less is more,' using a carefully curated palette of natural materials and clean geometric forms.\n\nEvery element was chosen for its quality and contribution to the overall sense of tranquility. The result is a bathroom that functions as a daily retreat, where the stresses of modern life can be washed away in an environment of pure, uncluttered beauty.`,
			clientQuote:
				"It's like having a spa in our home. The space feels so peaceful and rejuvenating.",
			fullTestimonial:
				"The transformation of our bathroom exceeded every expectation. The team understood our vision for a minimalist sanctuary and brought it to life with incredible attention to detail. The quality of materials and craftsmanship is evident in every surface. What impressed us most was how they maximized the sense of space while maintaining perfect functionality. It's become our favorite room in the house.",
			clientName: 'Lars Nielsen',
			clientLocation: 'Aarhus N',
			investment: { min: 180000, max: 220000 },
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
				'Floor-to-ceiling tiles',
				'Floating vanity design',
				'Rainfall shower system',
				'Heated flooring',
				'LED accent lighting',
				'Smart mirror technology',
			],
			processSteps: [
				{
					title: 'Space Planning',
					description: 'Optimizing layout for maximum impact',
					duration: '3 days',
				},
				{
					title: 'Plumbing Updates',
					description: 'Installing new systems for modern fixtures',
					duration: '1 week',
				},
				{
					title: 'Waterproofing',
					description: 'Comprehensive moisture protection',
					duration: '3 days',
				},
				{
					title: 'Tiling & Finishes',
					description: 'Precision installation of premium materials',
					duration: '2 weeks',
				},
				{
					title: 'Fixture Installation',
					description: 'Final fitting and testing of all systems',
					duration: '1 week',
				},
			],
			materials: [
				{
					category: 'Tiles',
					description: 'Large format porcelain in warm white',
					quality: 'Premium Grade',
				},
				{
					category: 'Vanity',
					description: 'Solid oak with integrated basin',
					quality: 'Custom Made',
				},
				{
					category: 'Fixtures',
					description: 'Matte black premium fittings',
					quality: 'Designer Series',
				},
				{
					category: 'Lighting',
					description: 'LED strips with dimming control',
					quality: 'Smart Technology',
				},
			],
		},
		{
			id: 3,
			title: 'Contemporary Hygge Living Space',
			type: 'Living Areas',
			style: 'Contemporary Hygge',
			area: 45,
			timeline: '4 months',
			rating: 4.9,
			sustainable: true,
			heritage: false,
			award: true,
			completedYear: 2024,
			description:
				'An open-plan living area that perfectly captures the Danish concept of hygge through thoughtful design and natural materials.',
			fullDescription: `This living space transformation represents the evolution of Danish design principles for contemporary life. The project involved opening up compartmentalized rooms to create a flowing, light-filled space that encourages both gathering and solitude.\n\nThe design carefully balances the need for modern functionality with the timeless appeal of hygge - that uniquely Danish sense of coziness and contentment. Every material choice, from the warm oak flooring to the soft wool textiles, contributes to an atmosphere of comfort and well-being.`,
			clientQuote:
				'Our home has become a place where we truly want to spend time. It feels warm and welcoming.',
			fullTestimonial:
				"The team transformed our cramped, dark living spaces into something magical. They understood that we wanted more than just a beautiful room - we wanted a space that would enhance our daily life and bring our family together. The attention to lighting, the choice of materials, and the way they created different zones within the open plan shows their deep understanding of how people actually live. It's sophisticated yet comfortable, modern yet timeless.",
			clientName: 'Anna & Erik Sørensen',
			clientLocation: 'Aarhus V',
			investment: { min: 320000, max: 380000 },
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
				'Open-plan layout',
				'Integrated storage solutions',
				'Natural light optimization',
				'Underfloor heating',
				'Built-in seating areas',
				'Acoustic design elements',
			],
			processSteps: [
				{
					title: 'Structural Assessment',
					description: 'Evaluating walls for safe removal',
					duration: '1 week',
				},
				{
					title: 'Demolition',
					description: 'Careful removal of non-structural elements',
					duration: '1 week',
				},
				{
					title: 'Systems Installation',
					description: 'Updating electrical, heating, and lighting',
					duration: '3 weeks',
				},
				{
					title: 'Flooring & Finishes',
					description: 'Installing premium materials throughout',
					duration: '4 weeks',
				},
				{
					title: 'Built-in Elements',
					description: 'Custom carpentry and final details',
					duration: '6 weeks',
				},
			],
			materials: [
				{
					category: 'Flooring',
					description: 'Wide-plank European oak',
					quality: 'Premium Select',
				},
				{
					category: 'Built-ins',
					description: 'Custom oak cabinetry and shelving',
					quality: 'Master Crafted',
				},
				{
					category: 'Textiles',
					description: 'Natural wool and linen fabrics',
					quality: 'Sustainable Luxury',
				},
				{
					category: 'Lighting',
					description: 'Designer pendant and accent lighting',
					quality: 'Architectural Grade',
				},
			],
		},
		{
			id: 4,
			title: 'Modern Danish Bedroom Retreat',
			type: 'Bedroom',
			style: 'Modern Danish',
			area: 20,
			timeline: '5 weeks',
			rating: 4.7,
			sustainable: false,
			heritage: false,
			award: false,
			completedYear: 2024,
			description:
				'A peaceful bedroom design that combines modern functionality with classic Danish design principles.',
			fullDescription: `This bedroom renovation focused on creating a serene retreat that promotes rest and relaxation. The design draws inspiration from classic Danish modernism, emphasizing clean lines, natural materials, and a connection to nature.\n\nThe space was completely reimagined to maximize both storage and comfort, with custom built-in solutions that maintain the room's clean aesthetic while providing practical functionality for modern living.`,
			clientQuote:
				'We sleep so much better now. The room feels like a peaceful retreat from the world.',
			fullTestimonial:
				"The bedroom transformation has genuinely improved our quality of life. The team created a space that feels both luxurious and calming. The built-in storage solutions are incredibly clever - everything has its place, but you'd never know there's so much storage because it's all seamlessly integrated. The lighting design is particularly impressive, with different settings for different times of day.",
			clientName: 'Sofie Madsen',
			clientLocation: 'Aarhus S',
			investment: { min: 150000, max: 200000 },
			images: {
				main: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
				gallery: [
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=entropy',
					'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=faces',
				],
			},
			features: [
				'Built-in wardrobes',
				'Custom headboard design',
				'Integrated lighting',
				'Natural ventilation',
				'Acoustic treatments',
				'Smart home integration',
			],
			processSteps: [
				{
					title: 'Design Planning',
					description: 'Creating optimal layout for rest and storage',
					duration: '1 week',
				},
				{
					title: 'Electrical Work',
					description: 'Installing smart lighting and controls',
					duration: '3 days',
				},
				{
					title: 'Custom Carpentry',
					description: 'Building integrated storage solutions',
					duration: '2 weeks',
				},
				{
					title: 'Finishes',
					description: 'Painting, flooring, and detail work',
					duration: '1 week',
				},
				{
					title: 'Final Styling',
					description:
						'Completing the space with textiles and accessories',
					duration: '3 days',
				},
			],
			materials: [
				{
					category: 'Wardrobes',
					description: 'White oak with soft-close mechanisms',
					quality: 'Premium Hardware',
				},
				{
					category: 'Flooring',
					description: 'Engineered oak planks',
					quality: 'Commercial Grade',
				},
				{
					category: 'Textiles',
					description: 'Organic cotton and linen bedding',
					quality: 'Luxury Comfort',
				},
				{
					category: 'Lighting',
					description: 'Adjustable LED system',
					quality: 'Smart Technology',
				},
			],
		},
		{
			id: 5,
			title: 'Industrial Loft Conversion',
			type: 'Whole Home',
			style: 'Industrial',
			area: 85,
			timeline: '6 months',
			rating: 4.8,
			sustainable: true,
			heritage: true,
			award: true,
			completedYear: 2023,
			description:
				'A complete transformation of a former textile factory into a stunning modern loft while preserving industrial character.',
			fullDescription: `This ambitious project involved converting a 1950s textile factory into a contemporary living space that celebrates its industrial heritage. The challenge was to create a comfortable home while preserving the building's authentic character and architectural significance.\n\nThe design approach focused on revealing and highlighting original structural elements - exposed brick walls, steel beams, and large factory windows - while introducing modern systems and finishes that complement rather than compete with the existing architecture.`,
			clientQuote:
				'They turned our industrial space into a warm, livable home without losing its unique character.',
			fullTestimonial:
				"Converting this old factory was a dream we weren't sure was possible. The team not only made it happen but exceeded our wildest expectations. They understood the building's history and character, preserving elements we didn't even know were special. The result is a home that's both dramatic and comfortable, industrial yet warm. Every visitor is amazed by the transformation, and we love telling the story of how our home used to make textiles.",
			clientName: 'Michael & Sarah Johnson',
			clientLocation: 'Aarhus Ø',
			investment: { min: 850000, max: 1200000 },
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
				'Exposed brick walls',
				'Steel beam ceiling',
				'Factory window restoration',
				'Polished concrete floors',
				'Mezzanine level addition',
				'Industrial lighting fixtures',
			],
			processSteps: [
				{
					title: 'Structural Engineering',
					description:
						'Assessing and reinforcing the building structure',
					duration: '3 weeks',
				},
				{
					title: 'Heritage Consultation',
					description: 'Working with preservation specialists',
					duration: '2 weeks',
				},
				{
					title: 'Systems Installation',
					description: 'Modern plumbing, electrical, and HVAC',
					duration: '8 weeks',
				},
				{
					title: 'Restoration Work',
					description: 'Cleaning and preserving original elements',
					duration: '6 weeks',
				},
				{
					title: 'Modern Additions',
					description: 'New construction within existing shell',
					duration: '12 weeks',
				},
			],
			materials: [
				{
					category: 'Flooring',
					description: 'Polished concrete with radiant heating',
					quality: 'Industrial Premium',
				},
				{
					category: 'Windows',
					description: 'Restored steel factory windows',
					quality: 'Heritage Restoration',
				},
				{
					category: 'Fixtures',
					description: 'Vintage industrial lighting',
					quality: 'Authentic Period',
				},
				{
					category: 'Finishes',
					description: 'Raw steel and reclaimed wood',
					quality: 'Sustainable Reclaimed',
				},
			],
		},
		{
			id: 6,
			title: 'Traditional Danish Farmhouse Kitchen',
			type: 'Kitchen',
			style: 'Traditional',
			area: 30,
			timeline: '10 weeks',
			rating: 4.9,
			sustainable: true,
			heritage: true,
			award: false,
			completedYear: 2023,
			description:
				'A complete kitchen renovation that honors traditional Danish farmhouse design while incorporating modern conveniences.',
			fullDescription: `This kitchen renovation in a 19th-century farmhouse required a delicate balance between preserving historical authenticity and meeting contemporary needs. The original kitchen had been modified many times over the decades, losing much of its original character.\n\nOur approach involved extensive research into traditional Danish farmhouse kitchens, sourcing period-appropriate materials, and employing traditional construction techniques wherever possible. The result is a kitchen that feels authentically historical while functioning perfectly for modern family life.`,
			clientQuote:
				"It's exactly what we imagined when we bought this old farmhouse. Authentic but completely functional.",
			fullTestimonial:
				"Renovating a historic farmhouse kitchen was daunting, but the team made it feel effortless. They researched the history of our home and the region, bringing knowledge and materials we never could have found ourselves. The craftsmanship is extraordinary - you can see the care in every joint, every finish. Our kitchen now feels like it's been part of the house for 200 years, which is exactly what we wanted.",
			clientName: 'Henrik & Ingrid Petersen',
			clientLocation: 'Silkeborg',
			investment: { min: 380000, max: 450000 },
			images: {
				main: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
				gallery: [
					'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
					'https://images.unsplash.com/photo-1556909045-f3c2e1b9b5b3?w=800&h=600&fit=crop',
					'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=entropy',
				],
			},
			features: [
				'Reclaimed wood cabinetry',
				'Traditional tile backsplash',
				'Farmhouse sink restoration',
				'Period-appropriate hardware',
				'Wood-burning stove integration',
				'Hand-painted details',
			],
			processSteps: [
				{
					title: 'Historical Research',
					description: 'Studying original farmhouse kitchen designs',
					duration: '2 weeks',
				},
				{
					title: 'Material Sourcing',
					description: 'Finding authentic reclaimed materials',
					duration: '4 weeks',
				},
				{
					title: 'Structural Work',
					description: 'Reinforcing floors and walls',
					duration: '2 weeks',
				},
				{
					title: 'Traditional Carpentry',
					description:
						'Hand-building cabinetry using period techniques',
					duration: '6 weeks',
				},
				{
					title: 'Finishing Work',
					description: 'Traditional painting and detailing',
					duration: '2 weeks',
				},
			],
			materials: [
				{
					category: 'Cabinetry',
					description: 'Reclaimed pine with traditional joinery',
					quality: 'Heritage Authentic',
				},
				{
					category: 'Countertops',
					description: 'Thick butcher block oak',
					quality: 'Traditional Craft',
				},
				{
					category: 'Tiles',
					description: 'Hand-made ceramic in traditional patterns',
					quality: 'Artisan Made',
				},
				{
					category: 'Hardware',
					description: 'Forged iron handles and hinges',
					quality: 'Period Reproduction',
				},
			],
		},
	]);

	const [filters, setFilters] = useState({
		spaceType: 'all',
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
		// Space type filter
		if (
			filters?.spaceType !== 'all' &&
			project?.type?.toLowerCase() !== filters?.spaceType
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
			spaceType: 'all',
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
				<div className='max-w-7xl mx-auto px-6 lg:px-8'>
					<div className='text-center max-w-4xl mx-auto'>
						<h1 className='headline-primary text-4xl lg:text-5xl font-bold text-foreground mb-6'>
							Project Transformations Gallery
						</h1>
						<p className='body-primary text-xl text-muted-foreground mb-8 leading-relaxed'>
							Discover how thoughtful Danish craftsmanship
							transforms spaces into sanctuaries. Each project
							tells a story of heritage, innovation, and the
							pursuit of hygge through design.
						</p>
						<div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
							<Button
								variant='default'
								size='lg'
								iconName='Calendar'
								iconPosition='left'
								className='bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground'
								onClick={() =>
									(window.location.href =
										'/consultation-journey')
								}
							>
								Start Your Transformation
							</Button>
							<Button
								variant='outline'
								size='lg'
								iconName='Play'
								iconPosition='left'
								onClick={() => handleOpenGallery(projects?.[0])}
							>
								View Gallery Tour
							</Button>
						</div>
					</div>
				</div>
			</section>
			<div className='max-w-7xl mx-auto px-6 lg:px-8 py-12'>
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
							<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
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
