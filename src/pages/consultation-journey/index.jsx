import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProgressIndicator from './components/ProgressIndicator';
import ProjectVisualization from './components/ProjectVisualization';
import ConsultationScheduler from './components/ConsultationScheduler';
import ProjectDetailsForm from './components/ProjectDetailsForm';
import ConsultationConfirmation from './components/ConsultationConfirmation';
import Icon from '../../components/AppIcon';

const ConsultationJourney = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    spaceType: '',
    currentStyle: '',
    transformationGoals: [],
    consultationType: '',
    consultationDate: '',
    consultationTime: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    timeline: '',
    budget: '',
    priority: '',
    description: ''
  });

  const totalSteps = 4;

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Reset form and redirect to homepage
    setFormData({
      spaceType: '',
      currentStyle: '',
      transformationGoals: [],
      consultationType: '',
      consultationDate: '',
      consultationTime: '',
      fullName: '',
      email: '',
      phone: '',
      address: '',
      timeline: '',
      budget: '',
      priority: '',
      description: ''
    });
    setCurrentStep(1);
    window.location.href = '/homepage';
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ProjectVisualization
            onNext={handleNext}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <ConsultationScheduler
            onNext={handleNext}
            onBack={handleBack}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <ProjectDetailsForm
            onNext={handleNext}
            onBack={handleBack}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 4:
        return (
          <ConsultationConfirmation
            onBack={handleBack}
            formData={formData}
            onComplete={handleComplete}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Consultation Journey - Aarhus Contractor | Danish Design Consultation</title>
        <meta 
          name="description" 
          content="Begin your transformation journey with Aarhus Contractor. Schedule a personalized consultation to discuss your Danish design renovation project with our expert craftsmen." 
        />
        <meta name="keywords" content="consultation, Danish design, renovation planning, Aarhus contractor, design consultation" />
        <meta property="og:title" content="Consultation Journey - Aarhus Contractor" />
        <meta property="og:description" content="Schedule your personalized Danish design consultation and begin your transformation journey." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aarhuscontractor.dk/consultation-journey" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="headline-primary text-foreground mb-6">
                Begin Your Transformation Journey
              </h1>
              <p className="body-primary text-muted-foreground mb-8">
                Experience our Danish approach to consultation - thoughtful, thorough, and tailored to your vision. 
                Let's explore how we can bring your dream space to life.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={20} className="text-success" />
                  <span className="text-sm text-muted-foreground">Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={20} className="text-success" />
                  <span className="text-sm text-muted-foreground">Certified Craftsmen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={20} className="text-success" />
                  <span className="text-sm text-muted-foreground">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={20} className="text-success" />
                  <span className="text-sm text-muted-foreground">5-Star Rated</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Indicator */}
        <section className="py-8 bg-card/50">
          <div className="container mx-auto px-6 lg:px-8">
            <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {renderCurrentStep()}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-lg border border-border shadow-card">
                <div className="text-center mb-6">
                  <Icon name="HelpCircle" size={32} className="text-brand-primary mx-auto mb-4" />
                  <h3 className="text-xl font-headlines font-semibold text-foreground mb-2">
                    Need Help with Your Consultation?
                  </h3>
                  <p className="text-muted-foreground">
                    Our team is here to assist you every step of the way
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="Phone" size={20} className="text-brand-primary" />
                    </div>
                    <h4 className="font-headlines font-medium text-foreground mb-1">Call Us</h4>
                    <p className="text-sm text-muted-foreground mb-2">Speak directly with our team</p>
                    <a href="tel:+4512345678" className="text-brand-primary hover:underline text-sm font-medium">
                      +45 12 34 56 78
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="Mail" size={20} className="text-brand-primary" />
                    </div>
                    <h4 className="font-headlines font-medium text-foreground mb-1">Email Us</h4>
                    <p className="text-sm text-muted-foreground mb-2">Get detailed information</p>
                    <a href="mailto:consultation@aarhuscontractor.dk" className="text-brand-primary hover:underline text-sm font-medium">
                      consultation@aarhuscontractor.dk
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="MessageCircle" size={20} className="text-brand-primary" />
                    </div>
                    <h4 className="font-headlines font-medium text-foreground mb-1">Live Chat</h4>
                    <p className="text-sm text-muted-foreground mb-2">Instant support available</p>
                    <button className="text-brand-primary hover:underline text-sm font-medium">
                      Start Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-background py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="relative">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-background"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="36"
                      height="36"
                      rx="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M12 16L20 12L28 16V28C28 29.1046 27.1046 30 26 30H14C12.8954 30 12 29.1046 12 28V16Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M12 16L20 12L28 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V28C12 29.1046 12.8954 30 14 30H26C27.1046 30 28 29.1046 28 28V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 22H24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="font-headlines font-semibold text-lg">
                  Aarhus Contractor
                </span>
              </div>
              <p className="text-background/80 text-sm">
                Danish Craftsmanship • Thoughtful Renovation • Timeless Design
              </p>
              <p className="text-background/60 text-xs mt-4">
                © {new Date()?.getFullYear()} Aarhus Contractor. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ConsultationJourney;