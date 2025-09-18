import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectVisualization = ({ onNext, formData, setFormData }) => {
	const [selectedSpace, setSelectedSpace] = useState(
		formData?.spaceType || ''
	);
	const [selectedStyle, setSelectedStyle] = useState(
		formData?.currentStyle || ''
	);
	const [selectedGoals, setSelectedGoals] = useState(
		formData?.transformationGoals || []
	);

	const spaceTypes = [
		{
			id: 'housing-development',
			name: 'Housing Development',
			icon: 'Home',
			image: 'https://images.unsplash.com/photo-1598965402089-897ce52e8353?w=800&h=600&fit=crop',
			description: 'Multi-unit and social housing projects',
		},
		{
			id: 'government-buildings',
			name: 'Government Buildings',
			icon: 'Building',
			image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
			description: 'Municipal offices, public facilities',
		},
		{
			id: 'public-infrastructure',
			name: 'Public Infrastructure',
			icon: 'Landmark',
			image: 'https://images.unsplash.com/photo-1550781724-51b6f2c2e8e7?w=800&h=600&fit=crop',
			description: 'Community centers, cultural, transport',
		},
		{
			id: 'educational-healthcare',
			name: 'Educational & Healthcare',
			icon: 'GraduationCap',
			image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop',
			description: 'Schools, universities, hospitals',
		},
		{
			id: 'commercial-construction',
			name: 'Commercial Construction',
			icon: 'Briefcase',
			image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&h=600&fit=crop',
			description: 'Office, retail and mixed-use',
		},
	];

	const styleOptions = [
		{
			id: 'municipal',
			name: 'Municipal Government',
			image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&h=600&fit=crop',
			description: 'City and regional authorities',
		},
		{
			id: 'agency',
			name: 'Government Agency',
			image: 'https://images.unsplash.com/photo-1524578471082-8a51ad5d61c5?w=600&h=600&fit=crop',
			description: 'National and EU agencies',
		},
		{
			id: 'housing-association',
			name: 'Housing Association',
			image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&h=600&fit=crop',
			description: 'Social & affordable housing',
		},
		{
			id: 'private-developer',
			name: 'Private Developer',
			image: 'https://images.unsplash.com/photo-1529429612778-cff1a0285da1?w=600&h=600&fit=crop',
			description: 'Commercial development partners',
		},
	];

	const transformationGoals = [
		{ id: 'budget-adherence', name: 'Budget Adherence', icon: 'Wallet' },
		{
			id: 'timeline-compliance',
			name: 'Timeline Compliance',
			icon: 'CalendarCheck',
		},
		{
			id: 'procurement',
			name: 'EU Procurement Compliance',
			icon: 'Shield',
		},
		{ id: 'sustainability', name: 'Sustainability Targets', icon: 'Leaf' },
		{
			id: 'accessibility',
			name: 'Accessibility Standards',
			icon: 'Accessibility',
		},
		{
			id: 'zero-disruption',
			name: 'Zero Operational Disruption',
			icon: 'Activity',
		},
	];

	const handleSpaceSelect = (spaceId) => {
		setSelectedSpace(spaceId);
		setFormData((prev) => ({ ...prev, spaceType: spaceId }));
	};

	const handleStyleSelect = (styleId) => {
		setSelectedStyle(styleId);
		setFormData((prev) => ({ ...prev, currentStyle: styleId }));
	};

	const handleGoalToggle = (goalId) => {
		const updatedGoals = selectedGoals?.includes(goalId)
			? selectedGoals?.filter((id) => id !== goalId)
			: [...selectedGoals, goalId];

		setSelectedGoals(updatedGoals);
		setFormData((prev) => ({ ...prev, transformationGoals: updatedGoals }));
	};

	const canProceed =
		selectedSpace && selectedStyle && selectedGoals?.length > 0;

	return (
		<div className='space-y-8'>
			{/* Header */}
			<div className='text-center'>
				<h2 className='headline-secondary text-foreground mb-4'>
					Define Your Project Context
				</h2>
				<p className='body-secondary text-muted-foreground max-w-2xl mx-auto'>
					Select your project category, client type, and success
					targets. This ensures our consultation aligns with your
					procurement and delivery requirements.
				</p>
			</div>
			{/* Project Category Selection */}
			<div className='space-y-6'>
				<h3 className='text-xl font-headlines font-semibold text-foreground'>
					What type of project is this?
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{spaceTypes?.map((space) => (
						<div
							key={space?.id}
							onClick={() => handleSpaceSelect(space?.id)}
							className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-fast gentle-hover ${
								selectedSpace === space?.id
									? 'ring-2 ring-brand-primary shadow-elevated'
									: 'hover:shadow-card'
							}`}
						>
							<div className='aspect-[4/3] relative'>
								<Image
									src={space?.image}
									alt={space?.name}
									className='w-full h-full object-cover'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
								<div className='absolute bottom-4 left-4 text-white'>
									<div className='flex items-center space-x-2 mb-1'>
										<Icon
											name={space?.icon}
											size={20}
										/>
										<span className='font-headlines font-semibold'>
											{space?.name}
										</span>
									</div>
									<p className='text-sm opacity-90'>
										{space?.description}
									</p>
								</div>
								{selectedSpace === space?.id && (
									<div className='absolute top-4 right-4'>
										<div className='w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center'>
											<Icon
												name='Check'
												size={16}
												color='white'
											/>
										</div>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Client Type Selection */}
			<div className='space-y-6'>
				<h3 className='text-xl font-headlines font-semibold text-foreground'>
					Who is the client?
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{styleOptions?.map((style) => (
						<div
							key={style?.id}
							onClick={() => handleStyleSelect(style?.id)}
							className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-fast gentle-hover ${
								selectedStyle === style?.id
									? 'ring-2 ring-brand-primary shadow-elevated'
									: 'hover:shadow-card'
							}`}
						>
							<div className='aspect-square relative'>
								<Image
									src={style?.image}
									alt={style?.name}
									className='w-full h-full object-cover'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
								<div className='absolute bottom-3 left-3 text-white'>
									<h4 className='font-headlines font-semibold text-sm mb-1'>
										{style?.name}
									</h4>
									<p className='text-xs opacity-90'>
										{style?.description}
									</p>
								</div>
								{selectedStyle === style?.id && (
									<div className='absolute top-3 right-3'>
										<div className='w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center'>
											<Icon
												name='Check'
												size={12}
												color='white'
											/>
										</div>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Success Targets */}
			<div className='space-y-6'>
				<h3 className='text-xl font-headlines font-semibold text-foreground'>
					What are your key success targets?
					<span className='text-sm font-normal text-muted-foreground ml-2'>
						(Select all that apply)
					</span>
				</h3>
				<div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
					{transformationGoals?.map((goal) => (
						<div
							key={goal?.id}
							onClick={() => handleGoalToggle(goal?.id)}
							className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-fast ${
								selectedGoals?.includes(goal?.id)
									? 'border-brand-primary bg-brand-primary/5 text-brand-primary'
									: 'border-border bg-card hover:border-muted-foreground hover:bg-muted'
							}`}
						>
							<div className='flex items-center space-x-3'>
								<Icon
									name={goal?.icon}
									size={20}
									className={
										selectedGoals?.includes(goal?.id)
											? 'text-brand-primary'
											: 'text-muted-foreground'
									}
								/>
								<span className='font-headlines font-medium text-sm'>
									{goal?.name}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Continue Button */}
			<div className='flex justify-center pt-6'>
				<button
					onClick={onNext}
					disabled={!canProceed}
					className={`btn-primary px-8 py-3 rounded-lg font-cta font-medium transition-all duration-fast ${
						canProceed
							? 'bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground'
							: 'bg-muted text-muted-foreground cursor-not-allowed'
					}`}
				>
					Continue to Scheduling
					<Icon
						name='ArrowRight'
						size={16}
						className='ml-2'
					/>
				</button>
			</div>
		</div>
	);
};

export default ProjectVisualization;
