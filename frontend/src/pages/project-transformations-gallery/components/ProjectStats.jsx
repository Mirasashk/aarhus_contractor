import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects, filteredProjects }) => {
	const calculateStats = () => {
		const totalProjects = filteredProjects?.length;
		const totalProjectValue = filteredProjects?.reduce(
			(sum, project) =>
				sum + (project?.investment?.min + project?.investment?.max) / 2,
			0
		);
		const avgProjectValue =
			totalProjects > 0 ? totalProjectValue / totalProjects : 0;

		const avgRating =
			filteredProjects?.reduce(
				(sum, project) => sum + project?.rating,
				0
			) / totalProjects || 0;

		const completedThisYear = filteredProjects?.filter(
			(project) => project?.completedYear === new Date()?.getFullYear()
		)?.length;

		const sustainableProjects = filteredProjects?.filter(
			(project) => project?.sustainable
		)?.length;

		const housingUnits = filteredProjects?.reduce((sum, project) => {
			// Extract housing units from project titles or descriptions
			const unitsMatch = project?.title?.match(/(\d+)\s*units?/i);
			return sum + (unitsMatch ? parseInt(unitsMatch[1]) : 0);
		}, 0);

		const governmentProjects = filteredProjects?.filter(
			(project) =>
				project?.type === 'Government' ||
				project?.type === 'Infrastructure'
		)?.length;

		return {
			totalProjects,
			totalProjectValue,
			avgProjectValue,
			avgRating,
			completedThisYear,
			sustainableProjects,
			sustainablePercentage:
				totalProjects > 0
					? (sustainableProjects / totalProjects) * 100
					: 0,
			housingUnits,
			governmentProjects,
		};
	};

	const stats = calculateStats();

	const formatCurrency = (amount) => {
		return new Intl.NumberFormat('da-DK', {
			style: 'currency',
			currency: 'DKK',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		})?.format(amount);
	};

	const statItems = [
		{
			icon: 'Building',
			label: 'Total Projects',
			value: stats?.totalProjects?.toString(),
			color: 'text-brand-primary',
		},
		{
			icon: 'DollarSign',
			label: 'Total Value',
			value: formatCurrency(stats?.totalProjectValue),
			color: 'text-conversion-accent',
		},
		{
			icon: 'Home',
			label: 'Housing Units',
			value: stats?.housingUnits?.toString(),
			color: 'text-brand-secondary',
		},
		{
			icon: 'Shield',
			label: 'Government Contracts',
			value: stats?.governmentProjects?.toString(),
			color: 'text-success',
		},
		{
			icon: 'Star',
			label: 'Client Rating',
			value: stats?.avgRating?.toFixed(1),
			color: 'text-success',
		},
	];

	return (
		<div className='bg-card rounded-lg shadow-card p-6'>
			<div className='flex items-center space-x-3 mb-6'>
				<Icon
					name='BarChart3'
					size={20}
					className='text-brand-primary'
				/>
				<h3 className='headline-secondary text-lg font-semibold text-foreground'>
					Professional Portfolio Statistics
				</h3>
			</div>
			<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
				{statItems?.map((stat, index) => (
					<div
						key={index}
						className='text-center'
					>
						<div className='flex justify-center mb-2'>
							<div
								className={`p-3 rounded-full bg-muted ${stat?.color}`}
							>
								<Icon
									name={stat?.icon}
									size={20}
								/>
							</div>
						</div>
						<div
							className={`text-2xl font-bold ${stat?.color} mb-1`}
						>
							{stat?.value}
						</div>
						<div className='text-xs text-muted-foreground'>
							{stat?.label}
						</div>
					</div>
				))}
			</div>
			{/* Additional Insights */}
			<div className='mt-6 pt-6 border-t border-border'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
					<div>
						<div className='text-sm text-muted-foreground mb-1'>
							Most Popular Type
						</div>
						<div className='font-medium text-foreground'>
							Housing Projects
						</div>
					</div>
					<div>
						<div className='text-sm text-muted-foreground mb-1'>
							Avg Timeline
						</div>
						<div className='font-medium text-foreground'>
							8-12 months
						</div>
					</div>
					<div>
						<div className='text-sm text-muted-foreground mb-1'>
							Client Satisfaction
						</div>
						<div className='font-medium text-success'>98%</div>
					</div>
					<div>
						<div className='text-sm text-muted-foreground mb-1'>
							Safety Record
						</div>
						<div className='font-medium text-success'>
							Zero Accidents
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectStats;
