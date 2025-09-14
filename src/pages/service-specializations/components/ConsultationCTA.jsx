import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    message: ''
  });

  const serviceOptions = [
    { value: 'kitchen', label: 'Kitchen Mastery' },
    { value: 'bathroom', label: 'Bathroom Sanctuaries' },
    { value: 'living', label: 'Living Space Optimization' },
    { value: 'multiple', label: 'Multiple Spaces' },
    { value: 'consultation', label: 'General Consultation' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Ready to Start (1-2 months)' },
    { value: 'planning', label: 'Planning Phase (3-6 months)' },
    { value: 'future', label: 'Future Project (6+ months)' },
    { value: 'exploring', label: 'Just Exploring Options' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours to schedule your consultation.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      timeline: '',
      message: ''
    });
  };

  const consultationBenefits = [
    {
      icon: 'Home',
      title: 'In-Home Assessment',
      description: 'Comprehensive evaluation of your space and lifestyle needs'
    },
    {
      icon: 'PenTool',
      title: 'Design Concepts',
      description: 'Initial design ideas and Danish design principle integration'
    },
    {
      icon: 'Calculator',
      title: 'Investment Planning',
      description: 'Detailed cost breakdown and timeline discussion'
    },
    {
      icon: 'Users',
      title: 'Expert Guidance',
      description: 'Professional advice from certified Danish craftsmen'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary/5 via-background to-brand-secondary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Calendar" size={24} className="text-brand-primary" />
                </div>
                <span className="font-headlines font-medium text-brand-primary text-lg">
                  Free Consultation
                </span>
              </div>
              
              <h2 className="headline-primary text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Begin Your
                <span className="text-brand-primary block">Transformation Journey</span>
              </h2>
              
              <p className="body-primary text-xl text-muted-foreground">
                Every exceptional renovation begins with understanding your vision, lifestyle, and space. Our complimentary consultation explores how Danish craftsmanship can enhance your daily life and create lasting value.
              </p>
            </div>

            {/* Consultation Benefits */}
            <div className="space-y-4">
              <h3 className="headline-secondary text-xl font-bold text-foreground">
                What to Expect in Your Consultation:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {consultationBenefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit?.icon} size={16} className="text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-headlines font-semibold text-foreground text-sm">
                        {benefit?.title}
                      </h4>
                      <p className="body-secondary text-xs text-muted-foreground">
                        {benefit?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-6 border-t border-border">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-success" />
                <span className="font-headlines font-medium text-sm text-foreground">
                  60-90 Minutes
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-success" />
                <span className="font-headlines font-medium text-sm text-foreground">
                  In Your Home
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Gift" size={16} className="text-success" />
                <span className="font-headlines font-medium text-sm text-foreground">
                  Completely Free
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-background rounded-2xl shadow-elevated p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="headline-secondary text-2xl font-bold text-foreground mb-2">
                  Schedule Your Consultation
                </h3>
                <p className="body-secondary text-muted-foreground">
                  Fill out the form below and we'll contact you within 24 hours to arrange your visit.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData?.name}
                    onChange={(e) => handleInputChange('name', e?.target?.value)}
                    required
                  />
                  
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your@email.com"
                    value={formData?.email}
                    onChange={(e) => handleInputChange('email', e?.target?.value)}
                    required
                  />
                </div>

                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+45 XX XX XX XX"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                  required
                />

                <Select
                  label="Service Interest"
                  placeholder="Select service type"
                  options={serviceOptions}
                  value={formData?.service}
                  onChange={(value) => handleInputChange('service', value)}
                  required
                />

                <Select
                  label="Project Timeline"
                  placeholder="When are you planning to start?"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) => handleInputChange('timeline', value)}
                  required
                />

                <div>
                  <label className="block font-headlines font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <textarea
                    placeholder="Tell us about your vision, current challenges, or specific requirements..."
                    value={formData?.message}
                    onChange={(e) => handleInputChange('message', e?.target?.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none body-secondary"
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  fullWidth
                  className="bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground py-4 text-lg"
                  iconName="Send"
                  iconPosition="left"
                >
                  Request Free Consultation
                </Button>
              </form>

              {/* Additional Info */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-start space-x-3">
                  <Icon name="Shield" size={16} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="body-secondary text-sm text-muted-foreground">
                      <strong className="text-foreground">Privacy Guaranteed:</strong> Your information is secure and will only be used to schedule your consultation. No spam, no sharing with third parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="font-headlines font-bold text-3xl text-brand-primary">150+</div>
            <div className="body-secondary text-sm text-muted-foreground">Consultations This Year</div>
          </div>
          <div className="space-y-2">
            <div className="font-headlines font-bold text-3xl text-brand-primary">24hrs</div>
            <div className="body-secondary text-sm text-muted-foreground">Average Response Time</div>
          </div>
          <div className="space-y-2">
            <div className="font-headlines font-bold text-3xl text-brand-primary">98%</div>
            <div className="body-secondary text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="font-headlines font-bold text-3xl text-brand-primary">15+</div>
            <div className="body-secondary text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;