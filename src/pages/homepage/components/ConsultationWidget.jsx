import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ConsultationWidget = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		projectType: '',
		timeline: '',
		budget: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const projectTypeOptions = [
		{ value: 'housing-development', label: 'Housing Development' },
		{ value: 'government-buildings', label: 'Government Buildings' },
		{ value: 'public-infrastructure', label: 'Public Infrastructure' },
		{ value: 'commercial-construction', label: 'Commercial Construction' },
		{ value: 'social-housing', label: 'Social Housing' },
	];

	const timelineOptions = [
		{ value: 'immediate', label: 'Ready to Start (1-2 months)' },
		{ value: 'planning', label: 'Planning Phase (3-6 months)' },
		{ value: 'future', label: 'Future Project (6+ months)' },
		{ value: 'exploring', label: 'Just Exploring Ideas' },
	];

	const budgetOptions = [
		{ value: '500k-2m', label: 'DKK 500K - 2M (Small projects)' },
		{ value: '2m-10m', label: 'DKK 2M - 10M (Medium projects)' },
		{ value: '10m-25m', label: 'DKK 10M - 25M (Large projects)' },
		{ value: '25m-50m', label: 'DKK 25M - 50M (Major projects)' },
		{ value: 'over-50m', label: 'Over DKK 50M (Infrastructure)' },
		{ value: 'government', label: 'Government Contract (EU compliant)' },
		{ value: 'discuss', label: 'Prefer to Discuss' },
	];

	const handleInputChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e?.preventDefault();
		setIsSubmitting(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 2000));

		setIsSubmitting(false);
		setShowSuccess(true);

		// Reset form after success
		setTimeout(() => {
			setShowSuccess(false);
			setFormData({
				name: '',
				email: '',
				phone: '',
				projectType: '',
				timeline: '',
				budget: '',
				message: '',
			});
		}, 3000);
	};

	const availableSlots = [
		{ date: '2024-09-12', time: '10:00', available: true },
		{ date: '2024-09-12', time: '14:00', available: true },
		{ date: '2024-09-13', time: '09:00', available: false },
		{ date: '2024-09-13', time: '11:00', available: true },
		{ date: '2024-09-14', time: '13:00', available: true },
		{ date: '2024-09-14', time: '15:00', available: true },
	];

	if (showSuccess) {
		return (
			<section className='py-8 bg-card'>
				<div className='max-w-4xl mx-auto px-6 lg:px-8'>
					<div className='bg-background rounded-2xl shadow-elevated p-12 text-center space-y-6'>
						<div className='w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto'>
							<Icon
								name='CheckCircle'
								size={32}
								className='text-success'
							/>
						</div>

						<div className='space-y-4'>
							<h3 className='headline-secondary text-2xl font-bold text-foreground'>
								Thank You for Your Interest!
							</h3>
							<p className='body-primary text-muted-foreground max-w-2xl mx-auto'>
								We've received your project proposal request and
								will contact you within 24 hours to schedule
								your professional project assessment.
							</p>
						</div>

						<div className='bg-muted/50 p-6 rounded-xl'>
							<h4 className='font-headlines font-semibold text-foreground mb-3'>
								What Happens Next?
							</h4>
							<div className='space-y-2 text-sm text-muted-foreground'>
								<div className='flex items-center space-x-2'>
									<Icon
										name='Clock'
										size={16}
										className='text-brand-primary'
									/>
									<span>
										We'll call you within 24 hours to
										discuss your project requirements
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Icon
										name='Calendar'
										size={16}
										className='text-brand-primary'
									/>
									<span>
										Schedule a site visit or meeting at your
										convenience
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Icon
										name='FileText'
										size={16}
										className='text-brand-primary'
									/>
									<span>
										Receive a detailed proposal with
										timeline and budget breakdown
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className='py-8 bg-card'>
			<div className='max-w-6xl mx-auto px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-2 items-start'>
					{/* Left Content */}
					<div className='space-y-2'>
						<div className='space-y-6'>
							{/* <div className='inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full'>
								<Icon
									name='Calendar'
									size={16}
									className='text-brand-primary'
								/>
								<span className='text-sm font-medium text-muted-foreground'>
									Free Consultation
								</span>
							</div> */}

							<h2 className='headline-secondary text-3xl lg:text-4xl font-bold text-foreground'>
								Request Your
								<span className='block text-brand-primary'>
									Project Proposal
								</span>
							</h2>

							<p className='body-primary text-lg text-muted-foreground'>
								Schedule a professional consultation where we'll
								assess your project requirements, discuss
								compliance needs, and create a detailed proposal
								for your construction project.
							</p>
						</div>

						{/* Consultation Benefits */}
						{/* <div className='space-y-4'>
							<h3 className='font-headlines font-semibold text-lg text-foreground'>
								What You'll Receive:
							</h3>

							<div className='space-y-3'>
								{[
									{
										icon: 'PenTool',
										title: 'Design Concepts',
										description:
											'Initial sketches and ideas tailored to your lifestyle',
									},
									{
										icon: 'Calculator',
										title: 'Investment Planning',
										description:
											'Transparent pricing and timeline estimates',
									},
									{
										icon: 'Users',
										title: 'Expert Guidance',
										description:
											'Professional advice on materials, permits, and process',
									},
								]?.map((benefit, index) => (
									<div
										key={index}
										className='flex items-start space-x-3'
									>
										<div className='w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
											<Icon
												name={benefit?.icon}
												size={16}
												className='text-brand-primary'
											/>
										</div>
										<div>
											<h4 className='font-medium text-foreground text-sm'>
												{benefit?.title}
											</h4>
											<p className='text-xs text-muted-foreground'>
												{benefit?.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div> */}

						{/* Trust Indicators */}
						<div className='bg-muted/50 p-6 rounded-xl space-y-4'>
							<h4 className='font-headlines font-semibold text-foreground'>
								Why Choose Aarhus Contractor?
							</h4>
							<div className='grid grid-cols-2 gap-4'>
								<div className='flex items-center space-x-2'>
									<Icon
										name='Shield'
										size={16}
										className='text-success'
									/>
									<span className='text-sm text-muted-foreground'>
										EU Public Procurement Certified
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Icon
										name='Award'
										size={16}
										className='text-conversion-accent'
									/>
									<span className='text-sm text-muted-foreground'>
										ISO 9001:2015 Certified
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Icon
										name='CheckCircle'
										size={16}
										className='text-success'
									/>
									<span className='text-sm text-muted-foreground'>
										Government Contract Approved
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Icon
										name='Leaf'
										size={16}
										className='text-success'
									/>
									<span className='text-sm text-muted-foreground'>
										Environmental Compliance
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Right Content - Form */}
					<div className='bg-background rounded-2xl shadow-elevated p-4'>
						<div className='space-y-6'>
							<div className='text-center space-y-2'>
								<h3 className='font-headlines font-semibold text-xl text-foreground'>
									Request Project Assessment
								</h3>
								<p className='text-sm text-muted-foreground'>
									Tell us about your project and we'll create
									a detailed proposal for you.
								</p>
							</div>

							<form
								onSubmit={handleSubmit}
								className='space-y-6'
							>
								{/* Personal Information */}
								<div className='grid md:grid-cols-2 gap-4'>
									<Input
										label='Full Name'
										type='text'
										placeholder='Your name'
										value={formData?.name}
										onChange={(e) =>
											handleInputChange(
												'name',
												e?.target?.value
											)
										}
										required
									/>

									<Input
										label='Phone Number'
										type='tel'
										placeholder='+45 XX XX XX XX'
										value={formData?.phone}
										onChange={(e) =>
											handleInputChange(
												'phone',
												e?.target?.value
											)
										}
										required
									/>
								</div>

								<Input
									label='Email Address'
									type='email'
									placeholder='your.email@example.com'
									value={formData?.email}
									onChange={(e) =>
										handleInputChange(
											'email',
											e?.target?.value
										)
									}
									required
								/>

								{/* Project Details */}
								<div className='space-y-4'>
									<Select
										label='Project Type'
										placeholder='Select your project type'
										options={projectTypeOptions}
										value={formData?.projectType}
										onChange={(value) =>
											handleInputChange(
												'projectType',
												value
											)
										}
										required
									/>

									<div className='grid md:grid-cols-2 gap-4'>
										<Select
											label='Timeline'
											placeholder='When do you want to start?'
											options={timelineOptions}
											value={formData?.timeline}
											onChange={(value) =>
												handleInputChange(
													'timeline',
													value
												)
											}
											required
										/>

										{/* <Select
											label='Budget Range'
											placeholder='Select budget range'
											options={budgetOptions}
											value={formData?.budget}
											onChange={(value) =>
												handleInputChange(
													'budget',
													value
												)
											}
											required
										/> */}
									</div>
								</div>

								<Input
									label='Tell Us About Your Vision'
									type='textarea'
									placeholder='Describe your dream space, style preferences, or specific requirements...'
									value={formData?.message}
									onChange={(e) =>
										handleInputChange(
											'message',
											e?.target?.value
										)
									}
									description='Help us prepare for your consultation by sharing your ideas and inspirations'
								/>

								{/* Submit Button */}
								<Button
									type='submit'
									variant='default'
									size='lg'
									fullWidth
									loading={isSubmitting}
									className='bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground font-cta font-semibold py-4 shadow-subtle'
									iconName='Calendar'
									iconPosition='left'
								>
									{isSubmitting
										? 'Scheduling...'
										: 'Schedule Free Consultation'}
								</Button>

								{/* Privacy Note */}
								<p className='text-xs text-muted-foreground text-center'>
									By submitting this form, you agree to our
									privacy policy. We'll never share your
									information and you can unsubscribe at any
									time.
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ConsultationWidget;
