import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ConsultationScheduler = ({ onNext, onBack, formData, setFormData }) => {
  const [selectedType, setSelectedType] = useState(formData?.consultationType || '');
  const [selectedDate, setSelectedDate] = useState(formData?.consultationDate || '');
  const [selectedTime, setSelectedTime] = useState(formData?.consultationTime || '');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const consultationTypes = [
    {
      id: 'in-home',
      name: 'In-Home Assessment',
      duration: '90 minutes',
      price: 'Free with project commitment',
      icon: 'Home',
      description: 'Comprehensive on-site evaluation with measurements and material recommendations',
      benefits: ['Detailed space assessment', 'Material samples', 'Preliminary sketches', 'Accurate project scope']
    },
    {
      id: 'showroom',
      name: 'Showroom Meeting',
      duration: '60 minutes',
      price: 'Complimentary',
      icon: 'Building',
      description: 'Visit our design center to explore materials and see completed examples',
      benefits: ['Material library access', 'Completed project displays', 'Design consultation', 'Portfolio review']
    },
    {
      id: 'virtual',
      name: 'Virtual Consultation',
      duration: '45 minutes',
      price: 'Free initial session',
      icon: 'Video',
      description: 'Online discussion to understand your vision and provide initial guidance',
      benefits: ['Convenient scheduling', 'Initial project assessment', 'Budget discussion', 'Next steps planning']
    }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  // Generate available dates (next 30 days, excluding weekends)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date?.setDate(today?.getDate() + i);
      
      // Skip weekends
      if (date?.getDay() !== 0 && date?.getDay() !== 6) {
        dates?.push(date);
      }
    }
    
    return dates;
  };

  const availableDates = generateAvailableDates();

  const formatDate = (date) => {
    return date?.toLocaleDateString('da-DK', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  const formatDateValue = (date) => {
    return date?.toISOString()?.split('T')?.[0];
  };

  const handleTypeSelect = (typeId) => {
    setSelectedType(typeId);
    setFormData(prev => ({ ...prev, consultationType: typeId }));
  };

  const handleDateSelect = (date) => {
    const dateValue = formatDateValue(date);
    setSelectedDate(dateValue);
    setFormData(prev => ({ ...prev, consultationDate: dateValue }));
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setFormData(prev => ({ ...prev, consultationTime: time }));
  };

  const canProceed = selectedType && selectedDate && selectedTime;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="headline-secondary text-foreground mb-4">
          Schedule Your Consultation
        </h2>
        <p className="body-secondary text-muted-foreground max-w-2xl mx-auto">
          Choose the consultation format that works best for you. Each option is designed to provide valuable insights for your project.
        </p>
      </div>
      {/* Consultation Type Selection */}
      <div className="space-y-6">
        <h3 className="text-xl font-headlines font-semibold text-foreground">
          Select consultation type
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {consultationTypes?.map((type) => (
            <div
              key={type?.id}
              onClick={() => handleTypeSelect(type?.id)}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-fast gentle-hover ${
                selectedType === type?.id
                  ? 'border-brand-primary bg-brand-primary/5' :'border-border bg-card hover:border-muted-foreground hover:shadow-card'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  selectedType === type?.id ? 'bg-brand-primary text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={type?.icon} size={24} />
                </div>
                {selectedType === type?.id && (
                  <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} color="white" />
                  </div>
                )}
              </div>
              
              <h4 className="font-headlines font-semibold text-lg text-foreground mb-2">
                {type?.name}
              </h4>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">{type?.duration}</span>
                <span className="text-sm font-medium text-brand-primary">{type?.price}</span>
              </div>
              
              <p className="body-secondary text-muted-foreground mb-4">
                {type?.description}
              </p>
              
              <div className="space-y-2">
                {type?.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Date Selection */}
      {selectedType && (
        <div className="space-y-6">
          <h3 className="text-xl font-headlines font-semibold text-foreground">
            Choose your preferred date
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {availableDates?.slice(0, 12)?.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(date)}
                className={`p-3 rounded-lg border text-center transition-all duration-fast ${
                  selectedDate === formatDateValue(date)
                    ? 'border-brand-primary bg-brand-primary text-white' :'border-border bg-card hover:border-muted-foreground hover:bg-muted'
                }`}
              >
                <div className="text-sm font-medium">
                  {formatDate(date)}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Time Selection */}
      {selectedDate && (
        <div className="space-y-6">
          <h3 className="text-xl font-headlines font-semibold text-foreground">
            Select your preferred time
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {timeSlots?.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`p-3 rounded-lg border text-center transition-all duration-fast ${
                  selectedTime === time
                    ? 'border-brand-primary bg-brand-primary text-white' :'border-border bg-card hover:border-muted-foreground hover:bg-muted'
                }`}
              >
                <div className="font-medium">{time}</div>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <button
          onClick={onBack}
          className="btn-secondary px-6 py-3 rounded-lg font-cta font-medium"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Back to Visualization
        </button>
        
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`btn-primary px-8 py-3 rounded-lg font-cta font-medium transition-all duration-fast ${
            canProceed
              ? 'bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground'
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
        >
          Continue to Details
          <Icon name="ArrowRight" size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ConsultationScheduler;