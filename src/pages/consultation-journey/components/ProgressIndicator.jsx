import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, totalSteps }) => {
  const steps = [
    { id: 1, name: 'Visualization', icon: 'Eye' },
    { id: 2, name: 'Scheduling', icon: 'Calendar' },
    { id: 3, name: 'Details', icon: 'FileText' },
    { id: 4, name: 'Confirmation', icon: 'Check' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex items-center justify-between">
        {steps?.map((step, index) => (
          <React.Fragment key={step?.id}>
            <div className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-fast ${
                  step?.id < currentStep
                    ? 'bg-success text-white'
                    : step?.id === currentStep
                    ? 'bg-brand-primary text-white' :'bg-muted text-muted-foreground'
                }`}
              >
                {step?.id < currentStep ? (
                  <Icon name="Check" size={20} />
                ) : (
                  <Icon name={step?.icon} size={20} />
                )}
              </div>
              <span
                className={`mt-2 text-sm font-headlines font-medium ${
                  step?.id <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {step?.name}
              </span>
            </div>
            
            {index < steps?.length - 1 && (
              <div className="flex-1 mx-4">
                <div
                  className={`h-0.5 transition-all duration-fast ${
                    step?.id < currentStep ? 'bg-success' : 'bg-border'
                  }`}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </p>
      </div>
    </div>
  );
};

export default ProgressIndicator;