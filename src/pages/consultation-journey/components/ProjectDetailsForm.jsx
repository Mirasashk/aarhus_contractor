import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ProjectDetailsForm = ({ onNext, onBack, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const timelineOptions = [
    { value: 'flexible', label: 'Flexible - When it fits your schedule' },
    { value: '1-3months', label: '1-3 months - Ready to start soon' },
    { value: '3-6months', label: '3-6 months - Planning ahead' },
    { value: '6-12months', label: '6-12 months - Long-term planning' },
    { value: 'exploring', label: 'Just exploring options' }
  ];

  const budgetOptions = [
    { value: 'under-50k', label: 'Under 50.000 DKK' },
    { value: '50k-100k', label: '50.000 - 100.000 DKK' },
    { value: '100k-200k', label: '100.000 - 200.000 DKK' },
    { value: '200k-500k', label: '200.000 - 500.000 DKK' },
    { value: 'over-500k', label: 'Over 500.000 DKK' },
    { value: 'discuss', label: 'Prefer to discuss in consultation' }
  ];

  const priorityOptions = [
    { value: 'quality', label: 'Quality & Craftsmanship' },
    { value: 'timeline', label: 'Quick Completion' },
    { value: 'budget', label: 'Cost Effectiveness' },
    { value: 'design', label: 'Design Innovation' },
    { value: 'sustainability', label: 'Sustainable Materials' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.fullName?.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData?.address?.trim()) {
      newErrors.address = 'Project address is required';
    }

    if (!formData?.timeline) {
      newErrors.timeline = 'Please select your preferred timeline';
    }

    if (!formData?.budget) {
      newErrors.budget = 'Please select your budget range';
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
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="headline-secondary text-foreground mb-4">
          Project Details & Contact
        </h2>
        <p className="body-secondary text-muted-foreground max-w-2xl mx-auto">
          Help us prepare for your consultation by sharing some details about yourself and your project preferences.
        </p>
      </div>
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-headlines font-semibold text-foreground flex items-center">
            <Icon name="User" size={20} className="mr-2 text-brand-primary" />
            Contact Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={formData?.fullName || ''}
              onChange={(e) => handleInputChange('fullName', e?.target?.value)}
              error={errors?.fullName}
              required
            />
            
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+45 12 34 56 78"
              value={formData?.phone || ''}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              error={errors?.phone}
              required
            />
          </div>
          
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData?.email || ''}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            error={errors?.email}
            description="We'll send consultation details and follow-up information here"
            required
          />
          
          <Input
            label="Project Address"
            type="text"
            placeholder="Street address, city, postal code"
            value={formData?.address || ''}
            onChange={(e) => handleInputChange('address', e?.target?.value)}
            error={errors?.address}
            description="Where will the renovation take place?"
            required
          />
        </div>

        {/* Project Preferences */}
        <div className="space-y-6">
          <h3 className="text-xl font-headlines font-semibold text-foreground flex items-center">
            <Icon name="Settings" size={20} className="mr-2 text-brand-primary" />
            Project Preferences
          </h3>
          
          <Select
            label="Preferred Timeline"
            placeholder="Select your timeline preference"
            options={timelineOptions}
            value={formData?.timeline || ''}
            onChange={(value) => handleInputChange('timeline', value)}
            error={errors?.timeline}
            description="When would you like to start your project?"
            required
          />
          
          <Select
            label="Investment Range"
            placeholder="Select your budget range"
            options={budgetOptions}
            value={formData?.budget || ''}
            onChange={(value) => handleInputChange('budget', value)}
            error={errors?.budget}
            description="This helps us tailor our recommendations"
            required
          />
          
          <Select
            label="Top Priority"
            placeholder="What matters most to you?"
            options={priorityOptions}
            value={formData?.priority || ''}
            onChange={(value) => handleInputChange('priority', value)}
            description="Optional: Helps us understand your values"
          />
        </div>

        {/* Additional Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-headlines font-semibold text-foreground flex items-center">
            <Icon name="MessageSquare" size={20} className="mr-2 text-brand-primary" />
            Additional Information
          </h3>
          
          <div className="space-y-4">
            <label className="block">
              <span className="font-headlines font-medium text-foreground mb-2 block">
                Project Description
                <span className="text-muted-foreground font-normal ml-2">(Optional)</span>
              </span>
              <textarea
                rows={4}
                placeholder="Tell us more about your vision, specific requirements, or any questions you have..."
                value={formData?.description || ''}
                onChange={(e) => handleInputChange('description', e?.target?.value)}
                className="form-input w-full resize-none"
              />
              <p className="text-sm text-muted-foreground mt-1">
                Share any specific ideas, concerns, or questions you'd like to discuss
              </p>
            </label>
            
            <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
              <Icon name="Info" size={16} className="text-brand-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="text-foreground font-medium mb-1">Consultation Preparation</p>
                <p className="text-muted-foreground">
                  We'll send you a preparation guide and relevant project examples before your consultation to make the most of our time together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <button
          onClick={onBack}
          className="btn-secondary px-6 py-3 rounded-lg font-cta font-medium"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Back to Scheduling
        </button>
        
        <button
          onClick={handleSubmit}
          className="btn-primary px-8 py-3 rounded-lg font-cta font-medium bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground"
        >
          Review & Confirm
          <Icon name="ArrowRight" size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProjectDetailsForm;