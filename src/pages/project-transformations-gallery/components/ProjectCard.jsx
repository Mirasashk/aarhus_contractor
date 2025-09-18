import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, onOpenGallery }) => {
	const formatInvestment = (range) => {
		return `${range?.min?.toLocaleString(
			'da-DK'
		)} - ${range?.max?.toLocaleString('da-DK')} DKK`;
	};

	return (
		<div className='bg-card rounded-lg shadow-card overflow-hidden group gentle-hover'>
			{/* Main Project Image */}
			<div className='relative h-64 overflow-hidden'>
				<Image
					src={project?.images?.main}
					alt={project?.title}
					className='w-full h-full object-cover transition-transform duration-medium group-hover:scale-105'
				/>

				{/* Overlay with Quick Actions */}
				<div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-fast flex items-center justify-center'>
					<div className='flex space-x-3'>
						<Button
							variant='secondary'
							size='sm'
							iconName='Eye'
							iconPosition='left'
							className='bg-white/90 text-foreground hover:bg-white'
							onClick={() => onViewDetails(project)}
						>
							View Details
						</Button>
						<Button
							variant='secondary'
							size='sm'
							iconName='Image'
							iconPosition='left'
							className='bg-white/90 text-foreground hover:bg-white'
							onClick={() => onOpenGallery(project)}
						>
							Gallery
						</Button>
					</div>
				</div>

				{/* Project Type Badge */}
				<div className='absolute top-4 left-4'>
					<span className='bg-brand-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-cta font-medium'>
						{project?.type}
					</span>
				</div>

				{/* Style Badge */}
				<div className='absolute top-4 right-4'>
					<span className='bg-white/90 text-foreground px-3 py-1 rounded-full text-xs font-cta font-medium'>
						{project?.style}
					</span>
				</div>
			</div>
			{/* Project Information */}
			<div className='p-6'>
				<div className='flex items-start justify-between mb-3'>
					<h3 className='headline-secondary text-lg font-semibold text-foreground leading-tight'>
						{project?.title}
					</h3>
					<div className='flex items-center space-x-1 text-conversion-accent'>
						<Icon
							name='Star'
							size={16}
							className='fill-current'
						/>
						<span className='text-sm font-medium'>
							{project?.rating}
						</span>
					</div>
				</div>

				<p className='body-secondary text-sm text-muted-foreground mb-4 line-clamp-2'>
					{project?.description}
				</p>

				{/* Project Stats */}
				<div className='grid grid-cols-2 gap-4 mb-4'>
					<div className='flex items-center space-x-2'>
						<Icon
							name='Calendar'
							size={16}
							className='text-brand-primary'
						/>
						<span className='text-sm text-foreground font-medium'>
							{project?.timeline}
						</span>
					</div>
					<div className='flex items-center space-x-2'>
						<Icon
							name='Building'
							size={16}
							className='text-brand-primary'
						/>
						<span className='text-sm text-foreground font-medium'>
							{project?.area}m²
						</span>
					</div>
				</div>

				{/* Project Value Range */}
				<div className='flex items-center justify-between mb-4'>
					<span className='text-sm text-muted-foreground'>
						Project Value:
					</span>
					<span className='text-sm font-semibold text-brand-primary'>
						{formatInvestment(project?.investment)}
					</span>
				</div>

				{/* Energy Efficiency Badge */}
				{project?.sustainable && (
					<div className='flex items-center space-x-2 mb-4'>
						<Icon
							name='Leaf'
							size={16}
							className='text-success'
						/>
						<span className='text-xs text-success font-medium'>
							Energy Efficient
						</span>
					</div>
				)}

				{/* Client Quote */}
				<div className='bg-muted rounded-lg p-3 mb-4'>
					<p className='text-xs italic text-muted-foreground mb-2'>
						"{project?.clientQuote}"
					</p>
					<p className='text-xs font-medium text-foreground'>
						— {project?.clientName}
					</p>
				</div>

				{/* Action Buttons */}
				<div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2'>
					<Button
						variant='outline'
						size='sm'
						fullWidth
						iconName='FileText'
						iconPosition='left'
						onClick={() => onViewDetails(project)}
					>
						View Details
					</Button>
					<Button
						variant='default'
						size='sm'
						fullWidth
						iconName='MessageCircle'
						iconPosition='left'
						className='bg-conversion-accent hover:bg-brand-primary'
						onClick={() =>
							(window.location.href = '/consultation-journey')
						}
					>
						Request Proposal
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
