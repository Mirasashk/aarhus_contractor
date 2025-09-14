import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProjectCard = ({ 
	project, 
	hoveredProject, 
	onMouseEnter, 
	onMouseLeave 
}) => {
	return (
		<div
			className='group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 gentle-hover'
			onMouseEnter={() => onMouseEnter(project?.id)}
			onMouseLeave={() => onMouseLeave()}
		>
			{/* Project Image */}
			<div className='relative h-64 overflow-hidden'>
				<Image
					src={
						hoveredProject === project?.id
							? project?.beforeImage
							: project?.image
					}
					alt={project?.title}
					className='w-full h-full object-cover transition-all duration-700 group-hover:scale-105'
				/>

				{/* Overlay */}
				<div className='absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

				{/* Before/After Indicator */}
				<div className='absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full'>
					<span className='text-xs font-medium text-foreground'>
						{hoveredProject === project?.id
							? 'Before'
							: 'After'}
					</span>
				</div>

				{/* Category Badge */}
				<div className='absolute top-4 left-4 bg-brand-primary/90 backdrop-blur-sm px-3 py-1 rounded-full'>
					<span className='text-xs font-medium text-primary-foreground capitalize'>
						{project?.category}
					</span>
				</div>
			</div>

			{/* Project Content */}
			<div className='p-6 space-y-4'>
				<div className='space-y-2'>
					<h3 className='font-headlines font-semibold text-xl text-card-foreground group-hover:text-brand-primary transition-colors duration-300'>
						{project?.title}
					</h3>
					<p className='text-sm text-muted-foreground flex items-center'>
						<Icon
							name='MapPin'
							size={14}
							className='mr-1'
						/>
						{project?.location}
					</p>
				</div>

				<p className='text-sm text-muted-foreground line-clamp-3'>
					{project?.description}
				</p>

				{/* Project Features */}
				<div className='space-y-2'>
					<h4 className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
						Key Features
					</h4>
					<div className='flex flex-wrap gap-1'>
						{project?.features
							?.slice(0, 2)
							?.map((feature, index) => (
								<span
									key={index}
									className='text-xs bg-muted text-muted-foreground px-2 py-1 rounded'
								>
									{feature}
								</span>
							))}
						{project?.features?.length > 2 && (
							<span className='text-xs text-brand-primary'>
								+{project?.features?.length - 2}{' '}
								more
							</span>
						)}
					</div>
				</div>

				{/* Project Stats */}
				<div className='flex items-center justify-between pt-4 border-t border-border'>
					<div className='space-y-1'>
						<p className='text-xs text-muted-foreground'>
							Timeline
						</p>
						<p className='text-sm font-medium text-card-foreground'>
							{project?.timeline}
						</p>
					</div>
					<div className='space-y-1 text-right'>
						<p className='text-xs text-muted-foreground'>
							Investment
						</p>
						<p className='text-sm font-medium text-card-foreground'>
							{project?.investment}
						</p>
					</div>
				</div>

				{/* View Details Button */}
				<Button
					variant='outline'
					size='sm'
					fullWidth
					className='mt-4 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground'
					iconName='ArrowRight'
					iconPosition='right'
					onClick={() =>
						(window.location.href =
							'/project-transformations-gallery')
					}
				>
					View Details
				</Button>
			</div>
		</div>
	);
};

export default ProjectCard;
