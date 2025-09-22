import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ProjectDetailsForm = ({ onNext, onBack, formData, setFormData }) => {
	const [errors, setErrors] = useState({});

	const timelineOptions = [
		{ value: '3-6months', label: '3-6 months' },
		{ value: '6-12months', label: '6-12 months' },
		{ value: '12-18months', label: '12-18 months' },
		{ value: '18months+', label: '18+ months' },
		{ value: 'tbd', label: 'To be determined' },
	];

	const budgetOptions = [
		{ value: 'under-500k', label: 'Under 500.000 DKK' },
		{ value: '500k-2m', label: '500.000 - 2.000.000 DKK' },
		{ value: '2m-10m', label: '2.000.000 - 10.000.000 DKK' },
		{ value: '10m-25m', label: '10.000.000 - 25.000.000 DKK' },
		{ value: '25m+', label: 'Over 25.000.000 DKK' },
		{ value: 'gov-contract', label: 'Government Contract (EU Compliant)' },
	];

	const priorityOptions = [
		{ value: 'compliance', label: 'Compliance & Quality' },
		{ value: 'timeline', label: 'Timeline Adherence' },
		{ value: 'budget', label: 'Budget Compliance' },
		{ value: 'sustainability', label: 'Sustainability Targets' },
		{ value: 'zero-disruption', label: 'Zero Operational Disruption' },
	];

	const clientTypeOptions = [
		{ value: 'municipal', label: 'Municipal Government' },
		{ value: 'agency', label: 'Government Agency' },
		{ value: 'housing-association', label: 'Housing Association' },
		{ value: 'private-developer', label: 'Private Developer' },
		{ value: 'non-profit', label: 'Non-profit Organization' },
	];

	const fundingSourceOptions = [
		{ value: 'municipal-budget', label: 'Municipal Budget' },
		{ value: 'state-grant', label: 'State/EU Grant' },
		{ value: 'private-capital', label: 'Private Capital' },
		{ value: 'mixed', label: 'Mixed Funding' },
	];

	const handleInputChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
		if (errors?.[field]) {
			setErrors((prev) => ({ ...prev, [field]: '' }));
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData?.companyName?.trim()) {
			newErrors.companyName = 'Company name is required';
		}

		if (!formData?.fullName?.trim()) {
			newErrors.fullName = 'Contact person is required';
		}

		if (!formData?.email?.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData?.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		if (!formData?.phone?.trim()) {
			newErrors.phone = 'Phone number is required';
		}

		if (!formData?.timeline) {
			newErrors.timeline = 'Please select your preferred timeline';
		}

		if (!formData?.budget) {
			newErrors.budget = 'Please select your budget range';
		}

		if (!formData?.clientType) {
			newErrors.clientType = 'Please select the client type';
		}

		setErrors(newErrors);
		return Object.keys(newErrors)?.length === 0;
	};

	const handleSubmit = () => {
		if (validateForm()) {
			onNext();
		}
	};

	return (
		<div className='space-y-8'>
			{/* Header */}
			<div className='text-center'>
				<h2 className='headline-secondary text-foreground mb-4'>
					Project Details & Corporate Contacts
				</h2>
				<p className='body-secondary text-muted-foreground max-w-2xl mx-auto'>
					Share your organization details and project parameters so we
					can tailor a compliant, comprehensive proposal.
				</p>
			</div>
			<div className='max-w-2xl mx-auto space-y-8'>
				{/* Organization Information */}
				<div className='space-y-6'>
					<h3 className='text-xl font-headlines font-semibold text-foreground flex items-center'>
						<Icon
							name='Building'
							size={20}
							className='mr-2 text-brand-primary'
						/>
						Organization Information
					</h3>

					<Input
						label='Company / Organization Name'
						type='text'
						placeholder='Enter company name'
						value={formData?.companyName || ''}
						onChange={(e) =>
							handleInputChange('companyName', e?.target?.value)
						}
						error={errors?.companyName}
						required
					/>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<Input
							label='CVR Number'
							type='text'
							placeholder='e.g., 12345678'
							value={formData?.cvrNumber || ''}
							onChange={(e) =>
								handleInputChange('cvrNumber', e?.target?.value)
							}
						/>
						<Select
							label='Client Type'
							placeholder='Select client type'
							options={clientTypeOptions}
							value={formData?.clientType || ''}
							onChange={(value) =>
								handleInputChange('clientType', value)
							}
							error={errors?.clientType}
							required
						/>
					</div>

					<Select
						label='Funding Source'
						placeholder='Select funding source'
						options={fundingSourceOptions}
						value={formData?.fundingSource || ''}
						onChange={(value) =>
							handleInputChange('fundingSource', value)
						}
					/>
				</div>

				{/* Contact Information */}
				<div className='space-y-6'>
					<h3 className='text-xl font-headlines font-semibold text-foreground flex items-center'>
						<Icon
							name='User'
							size={20}
							className='mr-2 text-brand-primary'
						/>
						Primary Contact
					</h3>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<Input
							label='Contact Person'
							type='text'
							placeholder='Enter full name'
							value={formData?.fullName || ''}
							onChange={(e) =>
								handleInputChange('fullName', e?.target?.value)
							}
							error={errors?.fullName}
							required
						/>

						<Input
							label='Phone Number'
							type='tel'
							placeholder='+45 12 34 56 78'
							value={formData?.phone || ''}
							onChange={(e) =>
								handleInputChange('phone', e?.target?.value)
							}
							error={errors?.phone}
							required
						/>
					</div>

					<Input
						label='Email Address'
						type='email'
						placeholder='your.email@example.com'
						value={formData?.email || ''}
						onChange={(e) =>
							handleInputChange('email', e?.target?.value)
						}
						error={errors?.email}
						description="We'll send meeting details and proposal here"
						required
					/>
				</div>

				{/* Project Parameters */}
				<div className='space-y-6'>
					<h3 className='text-xl font-headlines font-semibold text-foreground flex items-center'>
						<Icon
							name='Settings'
							size={20}
							className='mr-2 text-brand-primary'
						/>
						Project Parameters
					</h3>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<Select
							label='Preferred Timeline'
							placeholder='Select your timeline'
							options={timelineOptions}
							value={formData?.timeline || ''}
							onChange={(value) =>
								handleInputChange('timeline', value)
							}
							error={errors?.timeline}
							required
						/>

						<Select
							label='Project Value Range'
							placeholder='Select project value range'
							options={budgetOptions}
							value={formData?.budget || ''}
							onChange={(value) =>
								handleInputChange('budget', value)
							}
							error={errors?.budget}
							required
						/>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<Input
							label='Project Location'
							type='text'
							placeholder='City / Region'
							value={formData?.address || ''}
							onChange={(e) =>
								handleInputChange('address', e?.target?.value)
							}
						/>
						<Select
							label='Top Priority'
							placeholder='What matters most?'
							options={priorityOptions}
							value={formData?.priority || ''}
							onChange={(value) =>
								handleInputChange('priority', value)
							}
						/>
					</div>

					<div className='space-y-4'>
						<label className='block'>
							<span className='font-headlines font-medium text-foreground mb-2 block'>
								Compliance Requirements{' '}
								<span className='text-muted-foreground font-normal'>
									(Optional)
								</span>
							</span>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
								<label className='flex items-center space-x-2 cursor-pointer'>
									<input
										type='checkbox'
										checked={!!formData?.requireISO9001}
										onChange={(e) =>
											handleInputChange(
												'requireISO9001',
												e?.target?.checked
											)
										}
										className='rounded border-border text-brand-primary focus:ring-brand-primary'
									/>
									<span className='text-sm text-foreground'>
										ISO 9001 Quality
									</span>
								</label>
								<label className='flex items-center space-x-2 cursor-pointer'>
									<input
										type='checkbox'
										checked={!!formData?.requireISO14001}
										onChange={(e) =>
											handleInputChange(
												'requireISO14001',
												e?.target?.checked
											)
										}
										className='rounded border-border text-brand-primary focus:ring-brand-primary'
									/>
									<span className='text-sm text-foreground'>
										ISO 14001 Environmental
									</span>
								</label>
								<label className='flex items-center space-x-2 cursor-pointer'>
									<input
										type='checkbox'
										checked={!!formData?.requireOHSAS18001}
										onChange={(e) =>
											handleInputChange(
												'requireOHSAS18001',
												e?.target?.checked
											)
										}
										className='rounded border-border text-brand-primary focus:ring-brand-primary'
									/>
									<span className='text-sm text-foreground'>
										OHSAS 18001 Safety
									</span>
								</label>
								<label className='flex items-center space-x-2 cursor-pointer'>
									<input
										type='checkbox'
										checked={
											!!formData?.requireEUProcurement
										}
										onChange={(e) =>
											handleInputChange(
												'requireEUProcurement',
												e?.target?.checked
											)
										}
										className='rounded border-border text-brand-primary focus:ring-brand-primary'
									/>
									<span className='text-sm text-foreground'>
										EU Public Procurement
									</span>
								</label>
							</div>
						</label>
					</div>
				</div>

				{/* Additional Information */}
				<div className='space-y-6'>
					<h3 className='text-xl font-headlines font-semibold text-foreground flex items-center'>
						<Icon
							name='MessageSquare'
							size={20}
							className='mr-2 text-brand-primary'
						/>
						Additional Information
					</h3>

					<div className='space-y-4'>
						<label className='block'>
							<span className='font-headlines font-medium text-foreground mb-2 block'>
								Project Description
								<span className='text-muted-foreground font-normal ml-2'>
									(Optional)
								</span>
							</span>
							<textarea
								rows={4}
								placeholder='Describe scope, site conditions, key stakeholders, and constraints...'
								value={formData?.description || ''}
								onChange={(e) =>
									handleInputChange(
										'description',
										e?.target?.value
									)
								}
								className='form-input w-full resize-none'
							/>
							<p className='text-sm text-muted-foreground mt-1'>
								Include any known compliance needs, stakeholder
								approvals, or phasing requirements
							</p>
						</label>
					</div>
				</div>
			</div>
			{/* Navigation */}
			<div className='flex justify-between pt-6'>
				<button
					onClick={onBack}
					className='btn-secondary px-6 py-2 rounded-lg font-cta font-medium flex items-center'
				>
					<Icon
						name='ArrowLeft'
						size={16}
						className='mr-2'
					/>
					Back to Scheduling
				</button>

				<button
					onClick={handleSubmit}
					className='btn-primary px-6 py-2 rounded-lg font-cta font-medium bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground flex items-center'
				>
					Review & Confirm
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

export default ProjectDetailsForm;
