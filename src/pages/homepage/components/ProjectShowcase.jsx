import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import ProjectCard from './ProjectCard';

const ProjectShowcase = () => {
	const [activeCategory, setActiveCategory] = useState('all');

	const projectCategories = [
		{ id: 'all', name: 'All Projects', icon: 'Grid3X3' },
		{ id: 'housing', name: 'Housing Projects', icon: 'Home' },
		{ id: 'government', name: 'Government', icon: 'Building' },
		{ id: 'infrastructure', name: 'Infrastructure', icon: 'MapPin' },
	];

	const featuredProjects = [
		{
			id: 1,
			title: 'Social Housing Development - 48 Units',
			category: 'housing',
			location: 'Aarhus N, Denmark',
			image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
			beforeImage:
				'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
			description:
				'Modern affordable housing complex with energy-efficient design, accessibility compliance, and sustainable materials.',
			features: [
				'Energy Efficient Design',
				'Accessibility Compliant',
				'Sustainable Materials',
			],
			timeline: '12 months',
			investment: 'DKK 15,000,000',
			completedDate: 'August 2024',
		},
		{
			id: 2,
			title: 'Municipal Office Renovation',
			category: 'government',
			location: 'Aarhus C, Denmark',
			image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
			beforeImage:
				'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
			description:
				'Complete modernization of government building with sustainable materials, smart systems, and improved accessibility.',
			features: [
				'Smart Building Systems',
				'Sustainable Materials',
				'Accessibility Improvements',
			],
			timeline: '8 months',
			investment: 'DKK 8,500,000',
			completedDate: 'July 2024',
		},
		{
			id: 3,
			title: 'Student Housing Complex - 120 Units',
			category: 'housing',
			location: 'Aarhus V, Denmark',
			image: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=600&h=400&fit=crop',
			beforeImage:
				'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
			description:
				'Contemporary student accommodation with shared facilities, sustainable design, and modern amenities.',
			features: [
				'Shared Facilities',
				'Sustainable Design',
				'Modern Amenities',
			],
			timeline: '18 months',
			investment: 'DKK 25,000,000',
			completedDate: 'September 2024',
		},
		{
			id: 4,
			title: 'Community Center Development',
			category: 'infrastructure',
			location: 'Aarhus C, Denmark',
			image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
			beforeImage:
				'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
			description:
				'Multi-purpose community center with sports facilities, meeting rooms, and cultural spaces for local residents.',
			features: ['Sports Facilities', 'Meeting Rooms', 'Cultural Spaces'],
			timeline: '10 months',
			investment: 'DKK 12,000,000',
			completedDate: 'June 2024',
		},
		{
			id: 5,
			title: 'Healthcare Facility Renovation',
			category: 'government',
			location: 'Aarhus S, Denmark',
			image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
			beforeImage:
				'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
			description:
				'Complete renovation of healthcare facility with modern medical equipment integration and patient comfort improvements.',
			features: [
				'Medical Equipment Integration',
				'Patient Comfort',
				'Modern Design',
			],
			timeline: '6 months',
			investment: 'DKK 6,500,000',
			completedDate: 'May 2024',
		},
		{
			id: 6,
			title: 'Educational Campus Expansion',
			category: 'infrastructure',
			location: 'Aarhus University, Denmark',
			image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
			beforeImage:
				'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
			description:
				'Expansion of university campus with new lecture halls, research facilities, and student common areas.',
			features: [
				'Lecture Halls',
				'Research Facilities',
				'Student Common Areas',
			],
			timeline: '15 months',
			investment: 'DKK 35,000,000',
			completedDate: 'April 2024',
		},
	];

	// Helper function to convert date string to comparable date
	const parseDate = (dateString) => {
		const monthMap = {
			January: 1,
			February: 2,
			March: 3,
			April: 4,
			May: 5,
			June: 6,
			July: 7,
			August: 8,
			September: 9,
			October: 10,
			November: 11,
			December: 12,
		};

		const [month, year] = dateString.split(' ');
		return new Date(parseInt(year), monthMap[month] - 1);
	};

	const filteredProjects = (() => {
		let projects =
			activeCategory === 'all'
				? featuredProjects
				: featuredProjects?.filter(
						(project) => project?.category === activeCategory
				  );

		// Sort by completedDate (newest first) and take only the latest 3
		return projects
			?.sort(
				(a, b) =>
					parseDate(b.completedDate) - parseDate(a.completedDate)
			)
			?.slice(0, 3);
	})();

	const [hoveredProject, setHoveredProject] = useState(null);

	return (
		<section className='py-8 bg-background'>
			<div className='max-w-7xl mx-auto px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center space-y-6 mb-16'>
					<h2 className='headline-secondary text-3xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto'>
						Delivering Projects That
						<span className='block text-brand-primary'>
							Exceed Expectations
						</span>
					</h2>

					<p className='body-primary text-lg text-muted-foreground max-w-2xl mx-auto'>
						Each project reflects our commitment to professional
						excellence, government compliance, and creating
						infrastructure that serves communities.
					</p>
				</div>

				{/* Category Filter */}
				<div className='flex flex-wrap justify-center gap-3 mb-12'>
					{projectCategories?.map((category) => (
						<button
							key={category?.id}
							onClick={() => setActiveCategory(category?.id)}
							className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
								activeCategory === category?.id
									? 'bg-brand-primary text-primary-foreground shadow-subtle'
									: 'bg-card text-card-foreground hover:bg-muted border border-border'
							}`}
						>
							<Icon
								name={category?.icon}
								size={16}
							/>
							<span className='text-sm'>{category?.name}</span>
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredProjects?.map((project) => (
						<ProjectCard
							key={project?.id}
							project={project}
							hoveredProject={hoveredProject}
							onMouseEnter={setHoveredProject}
							onMouseLeave={() => setHoveredProject(null)}
						/>
					))}
				</div>

				{/* View All Projects CTA */}
				<div className='text-center mt-16'>
					<Button
						variant='default'
						size='lg'
						className='bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground font-cta font-semibold px-8 py-4 shadow-subtle'
						iconName='Grid3X3'
						iconPosition='left'
						onClick={() =>
							(window.location.href =
								'/project-transformations-gallery')
						}
					>
						View Complete Portfolio
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ProjectShowcase;
