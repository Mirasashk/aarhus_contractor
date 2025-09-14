import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import ProjectCard from './ProjectCard';

const ProjectShowcase = () => {
	const [activeCategory, setActiveCategory] = useState('all');

	const projectCategories = [
		{ id: 'all', name: 'All Projects', icon: 'Grid3X3' },
		{ id: 'residential', name: 'Residential', icon: 'Home' },
		{ id: 'commercial', name: 'Commercial', icon: 'ShoppingBag' },
		{ id: 'public', name: 'Public', icon: 'Building' },
	];

	const featuredProjects = [
		{
			id: 1,
			title: 'Modern Danish Kitchen',
			category: 'residential',
			location: 'Viby J, Aarhus',
			image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
			beforeImage:
				'https://images.unsplash.com/photo-1556909045-f208e2d75806?w=600&h=400&fit=crop',
			description:
				'Transformed a closed-off kitchen into an open, light-filled heart of the home with custom oak cabinetry and natural stone countertops.',
			features: [
				'Custom Oak Cabinetry',
				'Natural Stone Counters',
				'Integrated Appliances',
			],
			timeline: '6 weeks',
			investment: 'DKK 180,000 - 220,000',
			completedDate: 'August 2024',
		},
		{
			id: 2,
			title: 'Spa-Inspired Bathroom',
			category: 'residential',
			location: 'Risskov, Aarhus',
			image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop',
			beforeImage:
				'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop',
			description:
				'Created a serene bathroom sanctuary with natural materials, underfloor heating, and custom vanity crafted from reclaimed Danish oak.',
			features: [
				'Underfloor Heating',
				'Natural Stone Tiles',
				'Custom Oak Vanity',
			],
			timeline: '4 weeks',
			investment: 'DKK 120,000 - 160,000',
			completedDate: 'July 2024',
		},
		{
			id: 3,
			title: 'Hygge Living Room',
			category: 'residential',
			location: 'Højbjerg, Aarhus',
			image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
			beforeImage:
				'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
			description:
				'Opened up traditional room divisions to create a flowing living space that embodies Danish hygge principles with built-in storage and natural lighting.',
			features: [
				'Built-in Storage',
				'Natural Oak Flooring',
				'Custom Lighting',
			],
			timeline: '8 weeks',
			investment: 'DKK 200,000 - 280,000',
			completedDate: 'September 2024',
		},
		{
			id: 4,
			title: 'Artisan Kitchen Island',
			category: 'residential',
			location: 'Aarhus C, Denmark',
			image: 'https://images.unsplash.com/photo-1556909045-f208e2d75806?w=600&h=400&fit=crop',
			beforeImage:
				'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
			description:
				'Hand-crafted kitchen island becomes the centerpiece of family life, featuring integrated seating and hidden storage solutions.',
			features: [
				'Hand-crafted Island',
				'Integrated Seating',
				'Hidden Storage',
			],
			timeline: '3 weeks',
			investment: 'DKK 80,000 - 120,000',
			completedDate: 'June 2024',
		},
		{
			id: 5,
			title: 'Minimalist Master Bath',
			category: 'residential',
			location: 'Brabrand, Aarhus',
			image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop',
			beforeImage:
				'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop',
			description:
				'Clean lines and natural materials create a peaceful retreat with walk-in shower and floating vanity design.',
			features: [
				'Walk-in Shower',
				'Floating Vanity',
				'Natural Materials',
			],
			timeline: '5 weeks',
			investment: 'DKK 140,000 - 180,000',
			completedDate: 'May 2024',
		},
		{
			id: 6,
			title: 'Open Concept Living',
			category: 'residential',
			location: 'Tranbjerg, Aarhus',
			image: 'https://images.unsplash.com/photo-1560448075-bb485b067938?w=600&h=400&fit=crop',
			beforeImage:
				'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
			description:
				'Removed walls to create seamless flow between kitchen, dining, and living areas while maintaining structural integrity.',
			features: [
				'Open Floor Plan',
				'Structural Modifications',
				'Seamless Flow',
			],
			timeline: '10 weeks',
			investment: 'DKK 250,000 - 350,000',
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
						Crafting Spaces That Tell
						<span className='block text-brand-primary'>
							Your Story
						</span>
					</h2>

					<p className='body-primary text-lg text-muted-foreground max-w-2xl mx-auto'>
						Each project reflects our commitment to Danish design
						principles, exceptional craftsmanship, and creating
						spaces that enhance daily life.
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
						Explore All Projects
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ProjectShowcase;
