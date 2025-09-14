import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectVisualization = ({ onNext, formData, setFormData }) => {
  const [selectedSpace, setSelectedSpace] = useState(formData?.spaceType || '');
  const [selectedStyle, setSelectedStyle] = useState(formData?.currentStyle || '');
  const [selectedGoals, setSelectedGoals] = useState(formData?.transformationGoals || []);

  const spaceTypes = [
    {
      id: 'kitchen',
      name: 'Kitchen',
      icon: 'ChefHat',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Heart of the home transformation'
    },
    {
      id: 'bathroom',
      name: 'Bathroom',
      icon: 'Bath',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Personal sanctuary renovation'
    },
    {
      id: 'living',
      name: 'Living Room',
      icon: 'Sofa',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Social space enhancement'
    },
    {
      id: 'bedroom',
      name: 'Bedroom',
      icon: 'Bed',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Restful retreat design'
    },
    {
      id: 'whole-home',
      name: 'Whole Home',
      icon: 'Home',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete transformation'
    }
  ];

  const styleOptions = [
    {
      id: 'traditional',
      name: 'Traditional Danish',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Classic Nordic heritage'
    },
    {
      id: 'modern',
      name: 'Modern Minimalist',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Clean contemporary lines'
    },
    {
      id: 'hygge',
      name: 'Hygge Comfort',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Cozy warmth focus'
    },
    {
      id: 'industrial',
      name: 'Industrial Chic',
      image: 'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Urban loft aesthetic'
    }
  ];

  const transformationGoals = [
    { id: 'functionality', name: 'Improve Functionality', icon: 'Settings' },
    { id: 'aesthetics', name: 'Enhance Aesthetics', icon: 'Palette' },
    { id: 'space', name: 'Optimize Space', icon: 'Maximize' },
    { id: 'lighting', name: 'Better Lighting', icon: 'Lightbulb' },
    { id: 'storage', name: 'More Storage', icon: 'Archive' },
    { id: 'energy', name: 'Energy Efficiency', icon: 'Zap' }
  ];

  const handleSpaceSelect = (spaceId) => {
    setSelectedSpace(spaceId);
    setFormData(prev => ({ ...prev, spaceType: spaceId }));
  };

  const handleStyleSelect = (styleId) => {
    setSelectedStyle(styleId);
    setFormData(prev => ({ ...prev, currentStyle: styleId }));
  };

  const handleGoalToggle = (goalId) => {
    const updatedGoals = selectedGoals?.includes(goalId)
      ? selectedGoals?.filter(id => id !== goalId)
      : [...selectedGoals, goalId];
    
    setSelectedGoals(updatedGoals);
    setFormData(prev => ({ ...prev, transformationGoals: updatedGoals }));
  };

  const canProceed = selectedSpace && selectedStyle && selectedGoals?.length > 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="headline-secondary text-foreground mb-4">
          Visualize Your Transformation
        </h2>
        <p className="body-secondary text-muted-foreground max-w-2xl mx-auto">
          Help us understand your vision by selecting your space, current style, and transformation goals. This guides our consultation approach.
        </p>
      </div>
      {/* Space Type Selection */}
      <div className="space-y-6">
        <h3 className="text-xl font-headlines font-semibold text-foreground">
          Which space are you transforming?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <div className="aspect-[4/3] relative">
                <Image
                  src={space?.image}
                  alt={space?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name={space?.icon} size={20} />
                    <span className="font-headlines font-semibold">{space?.name}</span>
                  </div>
                  <p className="text-sm opacity-90">{space?.description}</p>
                </div>
                {selectedSpace === space?.id && (
                  <div className="absolute top-4 right-4">
                    <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center">
                      <Icon name="Check" size={16} color="white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Current Style Selection */}
      <div className="space-y-6">
        <h3 className="text-xl font-headlines font-semibold text-foreground">
          What's your current style preference?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <div className="aspect-square relative">
                <Image
                  src={style?.image}
                  alt={style?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <h4 className="font-headlines font-semibold text-sm mb-1">{style?.name}</h4>
                  <p className="text-xs opacity-90">{style?.description}</p>
                </div>
                {selectedStyle === style?.id && (
                  <div className="absolute top-3 right-3">
                    <div className="w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center">
                      <Icon name="Check" size={12} color="white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Transformation Goals */}
      <div className="space-y-6">
        <h3 className="text-xl font-headlines font-semibold text-foreground">
          What are your transformation goals?
          <span className="text-sm font-normal text-muted-foreground ml-2">(Select all that apply)</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {transformationGoals?.map((goal) => (
            <div
              key={goal?.id}
              onClick={() => handleGoalToggle(goal?.id)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-fast ${
                selectedGoals?.includes(goal?.id)
                  ? 'border-brand-primary bg-brand-primary/5 text-brand-primary' :'border-border bg-card hover:border-muted-foreground hover:bg-muted'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon 
                  name={goal?.icon} 
                  size={20} 
                  className={selectedGoals?.includes(goal?.id) ? 'text-brand-primary' : 'text-muted-foreground'}
                />
                <span className="font-headlines font-medium text-sm">{goal?.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Continue Button */}
      <div className="flex justify-center pt-6">
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
          <Icon name="ArrowRight" size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProjectVisualization;