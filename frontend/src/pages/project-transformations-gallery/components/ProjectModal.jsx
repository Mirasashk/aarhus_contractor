import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !project) return null;

  const allImages = [
    project?.images?.main,
    ...(project?.images?.gallery || [])
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages?.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages?.length) % allImages?.length);
  };

  const formatInvestment = (range) => {
    return `${range?.min?.toLocaleString('da-DK')} - ${range?.max?.toLocaleString('da-DK')} DKK`;
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Home' },
    { id: 'process', label: 'Process', icon: 'Settings' },
    { id: 'materials', label: 'Materials', icon: 'Package' },
    { id: 'testimonial', label: 'Client Story', icon: 'MessageCircle' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="bg-background rounded-lg shadow-elevated max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="headline-secondary text-xl font-semibold text-foreground">
              {project?.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {project?.type} • {project?.style} • {project?.area}m²
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          />
        </div>

        <div className="flex flex-col lg:flex-row h-full max-h-[calc(90vh-80px)]">
          {/* Image Gallery Section */}
          <div className="lg:w-1/2 relative bg-muted">
            <div className="relative h-64 lg:h-full">
              <Image
                src={allImages?.[currentImageIndex]}
                alt={`${project?.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {allImages?.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground p-2 rounded-full shadow-card transition-all duration-fast"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground p-2 rounded-full shadow-card transition-all duration-fast"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {allImages?.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {allImages?.length > 1 && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {allImages?.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-fast ${
                        index === currentImageIndex
                          ? 'border-white' :'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 flex flex-col">
            {/* Tab Navigation */}
            <div className="flex border-b border-border">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors duration-fast ${
                    activeTab === tab?.id
                      ? 'text-brand-primary border-b-2 border-brand-primary' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span className="hidden sm:inline">{tab?.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
                    <p className="body-primary text-foreground leading-relaxed">
                      {project?.fullDescription || project?.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Calendar" size={16} className="text-brand-primary" />
                        <span className="text-sm font-medium text-foreground">Timeline</span>
                      </div>
                      <p className="text-lg font-semibold text-brand-primary">{project?.timeline}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="DollarSign" size={16} className="text-brand-primary" />
                        <span className="text-sm font-medium text-foreground">Investment</span>
                      </div>
                      <p className="text-sm font-semibold text-brand-primary">
                        {formatInvestment(project?.investment)}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project?.features?.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-success" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'process' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">Construction Process</h3>
                  <div className="space-y-4">
                    {project?.processSteps?.map((step, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-brand-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{step?.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{step?.description}</p>
                          <p className="text-xs text-brand-primary mt-1">{step?.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'materials' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">Materials & Finishes</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project?.materials?.map((material, index) => (
                      <div key={index} className="bg-muted rounded-lg p-4">
                        <h4 className="font-medium text-foreground mb-2">{material?.category}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{material?.description}</p>
                        <div className="flex items-center space-x-2">
                          <Icon name="Award" size={14} className="text-brand-primary" />
                          <span className="text-xs text-brand-primary">{material?.quality}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'testimonial' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">Client Experience</h3>
                  <div className="bg-muted rounded-lg p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)]?.map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className={`${i < project?.rating ? 'text-conversion-accent fill-current' : 'text-muted-foreground'}`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-foreground italic mb-4 text-lg leading-relaxed">
                      "{project?.fullTestimonial || project?.clientQuote}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-medium">
                          {project?.clientName?.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{project?.clientName}</p>
                        <p className="text-sm text-muted-foreground">{project?.clientLocation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Footer */}
            <div className="border-t border-border p-6">
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => {
                    onClose();
                    // Add contact logic here
                  }}
                >
                  Ask Questions
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-conversion-accent hover:bg-brand-primary"
                  onClick={() => {
                    onClose();
                    window.location.href = '/consultation-journey';
                  }}
                >
                  Discuss Similar Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;