import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const FilterPanel = ({
	filters,
	onFilterChange,
	onClearFilters,
	isOpen,
	onToggle,
	projectCount,
}) => {
	const projectTypeOptions = [
		{ value: 'all', label: 'All Projects' },
		{ value: 'housing', label: 'Housing Projects' },
		{ value: 'government', label: 'Government' },
		{ value: 'infrastructure', label: 'Infrastructure' },
		{ value: 'healthcare', label: 'Healthcare' },
		{ value: 'educational', label: 'Educational' },
		{ value: 'commercial', label: 'Commercial' },
	];

	const styleOptions = [
		{ value: 'all', label: 'All Styles' },
		{ value: 'modern', label: 'Modern' },
		{ value: 'contemporary', label: 'Contemporary' },
		{ value: 'sustainable', label: 'Sustainable' },
		{ value: 'accessible', label: 'Accessible' },
		{ value: 'energy-efficient', label: 'Energy Efficient' },
		{ value: 'heritage', label: 'Heritage' },
	];

	const scopeOptions = [
		{ value: 'all', label: 'All Scopes' },
		{ value: 'new-construction', label: 'New Construction' },
		{ value: 'renovation', label: 'Renovation' },
		{ value: 'expansion', label: 'Expansion' },
		{ value: 'modernization', label: 'Modernization' },
		{ value: 'restoration', label: 'Restoration' },
	];

	const investmentOptions = [
		{ value: 'all', label: 'All Budgets' },
		{ value: '0-1000000', label: 'Under 1M DKK' },
		{ value: '1000000-5000000', label: '1M - 5M DKK' },
		{ value: '5000000-10000000', label: '5M - 10M DKK' },
		{ value: '10000000-25000000', label: '10M - 25M DKK' },
		{ value: '25000000+', label: 'Over 25M DKK' },
	];

	const timelineOptions = [
		{ value: 'all', label: 'All Timelines' },
		{ value: '3-6', label: '3-6 months' },
		{ value: '6-12', label: '6-12 months' },
		{ value: '12-18', label: '12-18 months' },
		{ value: '18+', label: '18+ months' },
	];

	return (
		<div className='bg-card rounded-lg shadow-card'>
			{/* Filter Header */}
			<div className='flex items-center justify-between p-6 border-b border-border'>
				<div className='flex items-center space-x-3'>
					<Icon
						name='Filter'
						size={20}
						className='text-brand-primary'
					/>
					<h3 className='headline-secondary text-lg font-semibold text-foreground'>
						Filter Projects
					</h3>
					<span className='bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs font-medium'>
						{projectCount} projects
					</span>
				</div>

				<div className='flex items-center space-x-2'>
					<Button
						variant='ghost'
						size='sm'
						iconName='RotateCcw'
						iconPosition='left'
						onClick={onClearFilters}
						className='text-muted-foreground hover:text-foreground'
					>
						Clear All
					</Button>
					<Button
						variant='ghost'
						size='sm'
						iconName={isOpen ? 'ChevronUp' : 'ChevronDown'}
						onClick={onToggle}
						className='lg:hidden'
					>
						{isOpen ? 'Hide' : 'Show'} Filters
					</Button>
				</div>
			</div>
			{/* Filter Content */}
			<div
				className={`transition-all duration-medium ${
					isOpen ? 'block' : 'hidden lg:block'
				}`}
			>
				<div className='p-6 space-y-6'>
					{/* Project Type Filter */}
					<div>
						<Select
							label='Project Type'
							options={projectTypeOptions}
							value={filters?.projectType}
							onChange={(value) =>
								onFilterChange('projectType', value)
							}
							className='w-full'
						/>
					</div>

					{/* Style Filter */}
					<div>
						<Select
							label='Design Style'
							options={styleOptions}
							value={filters?.style}
							onChange={(value) => onFilterChange('style', value)}
							className='w-full'
						/>
					</div>

					{/* Scope Filter */}
					<div>
						<Select
							label='Project Scope'
							options={scopeOptions}
							value={filters?.scope}
							onChange={(value) => onFilterChange('scope', value)}
							className='w-full'
						/>
					</div>

					{/* Investment Filter */}
					<div>
						<Select
							label='Investment Range'
							options={investmentOptions}
							value={filters?.investment}
							onChange={(value) =>
								onFilterChange('investment', value)
							}
							className='w-full'
						/>
					</div>

					{/* Timeline Filter */}
					<div>
						<Select
							label='Timeline'
							options={timelineOptions}
							value={filters?.timeline}
							onChange={(value) =>
								onFilterChange('timeline', value)
							}
							className='w-full'
						/>
					</div>

					{/* Special Features */}
					<div>
						<h4 className='text-sm font-medium text-foreground mb-3'>
							Certifications & Features
						</h4>
						<div className='space-y-2'>
							<label className='flex items-center space-x-2 cursor-pointer'>
								<input
									type='checkbox'
									checked={filters?.sustainable}
									onChange={(e) =>
										onFilterChange(
											'sustainable',
											e?.target?.checked
										)
									}
									className='rounded border-border text-brand-primary focus:ring-brand-primary'
								/>
								<span className='text-sm text-foreground'>
									Energy Efficient
								</span>
							</label>
							<label className='flex items-center space-x-2 cursor-pointer'>
								<input
									type='checkbox'
									checked={filters?.heritage}
									onChange={(e) =>
										onFilterChange(
											'heritage',
											e?.target?.checked
										)
									}
									className='rounded border-border text-brand-primary focus:ring-brand-primary'
								/>
								<span className='text-sm text-foreground'>
									Accessible Design
								</span>
							</label>
							<label className='flex items-center space-x-2 cursor-pointer'>
								<input
									type='checkbox'
									checked={filters?.award}
									onChange={(e) =>
										onFilterChange(
											'award',
											e?.target?.checked
										)
									}
									className='rounded border-border text-brand-primary focus:ring-brand-primary'
								/>
								<span className='text-sm text-foreground'>
									Award Winning
								</span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterPanel;
