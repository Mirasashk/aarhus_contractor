import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ConsultationConfirmation = ({ onBack, formData, onComplete }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const consultationTypes = {
    'in-home': {
      name: 'In-Home Assessment',
      duration: '90 minutes',
      icon: 'Home',
      description: 'Comprehensive on-site evaluation'
    },
    'showroom': {
      name: 'Showroom Meeting',
      duration: '60 minutes',
      icon: 'Building',
      description: 'Visit our design center'
    },
    'virtual': {
      name: 'Virtual Consultation',
      duration: '45 minutes',
      icon: 'Video',
      description: 'Online discussion'
    }
  };

  const spaceTypes = {
    'kitchen': 'Kitchen',
    'bathroom': 'Bathroom',
    'living': 'Living Room',
    'bedroom': 'Bedroom',
    'whole-home': 'Whole Home'
  };

  const styleTypes = {
    'traditional': 'Traditional Danish',
    'modern': 'Modern Minimalist',
    'hygge': 'Hygge Comfort',
    'industrial': 'Industrial Chic'
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('da-DK', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleConfirmBooking = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsConfirmed(true);
    
    // Call completion handler after a brief delay
    setTimeout(() => {
      onComplete();
    }, 3000);
  };

  if (isConfirmed) {
    return (
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto">
          <Icon name="Check" size={40} color="white" />
        </div>
        
        <div>
          <h2 className="headline-secondary text-foreground mb-4">
            Consultation Confirmed!
          </h2>
          <p className="body-primary text-muted-foreground">
            Thank you for choosing Aarhus Contractor. We're excited to help bring your vision to life.
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="font-headlines font-semibold text-lg text-foreground mb-4">
            What happens next?
          </h3>
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Confirmation Email</p>
                <p className="text-sm text-muted-foreground">You'll receive detailed consultation information within 15 minutes</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Preparation Materials</p>
                <p className="text-sm text-muted-foreground">We'll send relevant project examples and a preparation guide</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Consultant Introduction</p>
                <p className="text-sm text-muted-foreground">Meet your assigned project consultant before the meeting</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => window.location.href = '/homepage'}
            className="btn-primary px-8 py-3 rounded-lg font-cta font-medium bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="headline-secondary text-foreground mb-4">
          Confirm Your Consultation
        </h2>
        <p className="body-secondary text-muted-foreground max-w-2xl mx-auto">
          Please review your consultation details before confirming. We'll send you preparation materials and next steps.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Consultation Summary */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="font-headlines font-semibold text-lg text-foreground mb-4 flex items-center">
              <Icon name="Calendar" size={20} className="mr-2 text-brand-primary" />
              Consultation Details
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name={consultationTypes?.[formData?.consultationType]?.icon} size={16} className="text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">{consultationTypes?.[formData?.consultationType]?.name}</p>
                  <p className="text-sm text-muted-foreground">{consultationTypes?.[formData?.consultationType]?.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Calendar" size={16} className="text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">{formatDate(formData?.consultationDate)}</p>
                  <p className="text-sm text-muted-foreground">at {formData?.consultationTime}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">
                    {formData?.consultationType === 'in-home' ? 'Your Location' : 
                     formData?.consultationType === 'showroom' ? 'Our Showroom' : 'Online Meeting'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formData?.consultationType === 'in-home' ? formData?.address :
                     formData?.consultationType === 'showroom' ? 'Aarhus Design Center, Søndergade 12' : 'Video link will be provided'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="font-headlines font-semibold text-lg text-foreground mb-4 flex items-center">
              <Icon name="User" size={20} className="mr-2 text-brand-primary" />
              Contact Information
            </h3>
            
            <div className="space-y-3">
              <div>
                <p className="font-medium text-foreground">{formData?.fullName}</p>
                <p className="text-sm text-muted-foreground">{formData?.email}</p>
                <p className="text-sm text-muted-foreground">{formData?.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Summary */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="font-headlines font-semibold text-lg text-foreground mb-4 flex items-center">
              <Icon name="Home" size={20} className="mr-2 text-brand-primary" />
              Project Overview
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Space Type</p>
                <p className="font-medium text-foreground">{spaceTypes?.[formData?.spaceType]}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Current Style</p>
                <p className="font-medium text-foreground">{styleTypes?.[formData?.currentStyle]}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Timeline</p>
                <p className="font-medium text-foreground">
                  {formData?.timeline?.replace('-', ' - ')?.replace('k', '.000 DKK')}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Investment Range</p>
                <p className="font-medium text-foreground">
                  {formData?.budget?.replace('-', ' - ')?.replace('k', '.000 DKK')}
                </p>
              </div>
              
              {formData?.transformationGoals && formData?.transformationGoals?.length > 0 && (
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Transformation Goals</p>
                  <div className="flex flex-wrap gap-2">
                    {formData?.transformationGoals?.map((goal, index) => (
                      <span key={index} className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full">
                        {goal?.replace('-', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {formData?.description && (
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-headlines font-semibold text-lg text-foreground mb-4 flex items-center">
                <Icon name="MessageSquare" size={20} className="mr-2 text-brand-primary" />
                Additional Notes
              </h3>
              <p className="text-muted-foreground">{formData?.description}</p>
            </div>
          )}

          {/* Consultant Preview */}
          <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 p-6 rounded-lg border border-brand-primary/20">
            <h3 className="font-headlines font-semibold text-lg text-foreground mb-4">
              Your Consultant
            </h3>
            <div className="flex items-center space-x-4">
              <Image
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Lars Nielsen - Senior Design Consultant"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-foreground">Lars Nielsen</p>
                <p className="text-sm text-muted-foreground">Senior Design Consultant</p>
                <p className="text-sm text-brand-primary">15+ years Danish craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Confirmation Actions */}
      <div className="bg-muted/30 p-6 rounded-lg border border-border">
        <div className="flex items-start space-x-3 mb-4">
          <Icon name="Info" size={16} className="text-brand-primary mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="text-foreground font-medium mb-1">Before your consultation</p>
            <p className="text-muted-foreground">
              We'll send you preparation materials including relevant project examples, material samples information, and a consultation guide to help you make the most of our time together.
            </p>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <button
          onClick={onBack}
          className="btn-secondary px-6 py-3 rounded-lg font-cta font-medium"
          disabled={isSubmitting}
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Back to Details
        </button>
        
        <button
          onClick={handleConfirmBooking}
          disabled={isSubmitting}
          className="btn-primary px-8 py-3 rounded-lg font-cta font-medium bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
              Confirming...
            </>
          ) : (
            <>
              Confirm Consultation
              <Icon name="Check" size={16} className="ml-2" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ConsultationConfirmation;