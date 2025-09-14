import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InvestmentGuide = () => {
  const [selectedService, setSelectedService] = useState('kitchen');

  const investmentLevels = {
    kitchen: {
      title: 'Kitchen Mastery Investment Levels',
      description: 'Transform your kitchen into a Danish design masterpiece that enhances daily life and adds lasting value to your home.',
      levels: [
        {
          name: 'Essential Refresh',
          range: '150,000 - 250,000 DKK',
          duration: '6-8 weeks',
          description: 'Quality updates that bring Danish design principles to your existing layout.',
          includes: [
            'Cabinet refacing with Danish oak',
            'Premium countertop installation',
            'Modern appliance integration',
            'Lighting design enhancement',
            'Hardware and fixture upgrades'
          ],
          ideal: 'Perfect for functional kitchens needing aesthetic enhancement'
        },
        {
          name: 'Complete Transformation',
          range: '250,000 - 400,000 DKK',
          duration: '8-12 weeks',
          description: 'Full renovation incorporating layout optimization and premium materials.',
          includes: [
            'Complete layout redesign',
            'Custom Danish cabinetry',
            'Premium appliance package',
            'Natural stone surfaces',
            'Integrated smart home features',
            'Professional lighting design'
          ],
          ideal: 'Ideal for creating your dream culinary sanctuary',
          popular: true
        },
        {
          name: 'Luxury Craftsmanship',
          range: '400,000+ DKK',
          duration: '12-16 weeks',
          description: 'Bespoke kitchen design with the finest materials and custom craftsmanship.',
          includes: [
            'Fully custom design and layout',
            'Artisan-crafted cabinetry',
            'Luxury appliance integration',
            'Rare natural stone selection',
            'Advanced smart home systems',
            'Architectural lighting design',
            'Custom storage solutions'
          ],
          ideal: 'For those seeking the ultimate in Danish kitchen design'
        }
      ]
    },
    bathroom: {
      title: 'Bathroom Sanctuary Investment Levels',
      description: 'Create a personal wellness retreat with spa-like atmosphere and premium Danish design elements.',
      levels: [
        {
          name: 'Wellness Refresh',
          range: '80,000 - 150,000 DKK',
          duration: '4-6 weeks',
          description: 'Essential updates that transform your bathroom into a relaxing sanctuary.',
          includes: [
            'Premium fixture installation',
            'Natural tile selection',
            'Improved lighting design',
            'Ventilation system upgrade',
            'Storage optimization'
          ],
          ideal: 'Great for updating functional bathrooms with style'
        },
        {
          name: 'Spa Transformation',
          range: '150,000 - 250,000 DKK',
          duration: '6-8 weeks',
          description: 'Complete renovation creating a luxurious spa-like experience.',
          includes: [
            'Complete layout optimization',
            'Heated flooring installation',
            'Premium natural materials',
            'Luxury fixture package',
            'Advanced ventilation systems',
            'Custom storage solutions'
          ],
          ideal: 'Perfect for creating your personal wellness retreat',
          popular: true
        },
        {
          name: 'Luxury Sanctuary',
          range: '250,000+ DKK',
          duration: '8-12 weeks',
          description: 'Ultimate bathroom luxury with bespoke design and premium materials.',
          includes: [
            'Custom design and layout',
            'Rare natural stone selection',
            'Luxury spa features',
            'Smart home integration',
            'Architectural lighting',
            'Bespoke storage systems',
            'Premium wellness features'
          ],
          ideal: 'For the ultimate in bathroom luxury and wellness'
        }
      ]
    },
    living: {
      title: 'Living Space Investment Levels',
      description: 'Optimize your living spaces to balance architectural heritage with contemporary lifestyle needs.',
      levels: [
        {
          name: 'Space Enhancement',
          range: '200,000 - 350,000 DKK',
          duration: '8-12 weeks',
          description: 'Thoughtful improvements that enhance flow and functionality.',
          includes: [
            'Minor layout adjustments',
            'Flooring restoration/upgrade',
            'Lighting design improvement',
            'Built-in storage solutions',
            'Modern system integration'
          ],
          ideal: 'Perfect for enhancing existing space functionality'
        },
        {
          name: 'Complete Optimization',
          range: '350,000 - 600,000 DKK',
          duration: '12-16 weeks',
          description: 'Comprehensive renovation balancing heritage preservation with modern living.',
          includes: [
            'Open-plan conversion',
            'Heritage detail restoration',
            'Modern system installation',
            'Custom built-in solutions',
            'Architectural lighting design',
            'Premium material selection'
          ],
          ideal: 'Ideal for major space transformation projects',
          popular: true
        },
        {
          name: 'Architectural Mastery',
          range: '600,000+ DKK',
          duration: '16-24 weeks',
          description: 'Comprehensive renovation with architectural modifications and luxury finishes.',
          includes: [
            'Structural modifications',
            'Architectural design integration',
            'Luxury material selection',
            'Smart home automation',
            'Custom millwork and built-ins',
            'Professional interior design',
            'Heritage preservation expertise'
          ],
          ideal: 'For comprehensive home transformation projects'
        }
      ]
    }
  };

  const services = [
    { id: 'kitchen', name: 'Kitchen Mastery', icon: 'ChefHat' },
    { id: 'bathroom', name: 'Bathroom Sanctuaries', icon: 'Droplets' },
    { id: 'living', name: 'Living Spaces', icon: 'Home' }
  ];

  const currentService = investmentLevels?.[selectedService];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="headline-secondary text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Investment in Lasting Value
          </h2>
          <p className="body-primary text-xl text-muted-foreground">
            Our transparent investment levels help you understand the value and scope of each renovation approach. Every investment is designed to enhance your lifestyle and add lasting value to your home.
          </p>
        </div>

        {/* Service Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services?.map((service) => (
            <button
              key={service?.id}
              onClick={() => setSelectedService(service?.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-medium ${
                selectedService === service?.id
                  ? 'bg-brand-primary text-primary-foreground shadow-card'
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={service?.icon} size={20} />
              <span className="font-headlines font-medium">{service?.name}</span>
            </button>
          ))}
        </div>

        {/* Service Investment Levels */}
        <div className="space-y-8">
          {/* Service Header */}
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="headline-secondary text-2xl font-bold text-foreground mb-4">
              {currentService?.title}
            </h3>
            <p className="body-primary text-muted-foreground">
              {currentService?.description}
            </p>
          </div>

          {/* Investment Levels */}
          <div className="grid lg:grid-cols-3 gap-8">
            {currentService?.levels?.map((level, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-medium ${
                  level?.popular ? 'ring-2 ring-brand-primary' : ''
                }`}
              >
                {/* Popular Badge */}
                {level?.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Level Header */}
                <div className="text-center mb-6">
                  <h4 className="headline-secondary text-xl font-bold text-foreground mb-2">
                    {level?.name}
                  </h4>
                  <div className="space-y-2">
                    <div className="font-headlines font-bold text-2xl text-brand-primary">
                      {level?.range}
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{level?.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="body-secondary text-muted-foreground text-center mb-6">
                  {level?.description}
                </p>

                {/* Includes */}
                <div className="space-y-4 mb-6">
                  <h5 className="font-headlines font-semibold text-foreground">
                    What's Included:
                  </h5>
                  <div className="space-y-2">
                    {level?.includes?.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-success flex-shrink-0 mt-0.5" />
                        <span className="body-secondary text-sm text-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div className="bg-background rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <Icon name="Lightbulb" size={16} className="text-conversion-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-headlines font-medium text-sm text-foreground block mb-1">
                        Ideal For:
                      </span>
                      <span className="body-secondary text-sm text-muted-foreground">
                        {level?.ideal}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  variant={level?.popular ? "default" : "outline"}
                  fullWidth
                  className={level?.popular 
                    ? "bg-brand-primary hover:bg-conversion-accent text-primary-foreground" 
                    : "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground"
                  }
                  onClick={() => window.location.href = '/consultation-journey'}
                >
                  Discuss This Level
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Information */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-card">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <h3 className="headline-secondary text-2xl font-bold text-foreground">
                Understanding Your Investment
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="TrendingUp" size={20} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-headlines font-semibold text-foreground mb-1">
                      Lasting Value Creation
                    </h4>
                    <p className="body-secondary text-muted-foreground">
                      Quality Danish craftsmanship and materials ensure your investment appreciates over time while enhancing daily life.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Shield" size={20} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-headlines font-semibold text-foreground mb-1">
                      Comprehensive Warranty
                    </h4>
                    <p className="body-secondary text-muted-foreground">
                      All work comes with extensive warranties covering craftsmanship, materials, and systems integration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Calendar" size={20} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-headlines font-semibold text-foreground mb-1">
                      Flexible Scheduling
                    </h4>
                    <p className="body-secondary text-muted-foreground">
                      We work with your schedule and lifestyle needs to minimize disruption during renovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h3 className="headline-secondary text-2xl font-bold text-foreground">
                Financing & Payment Options
              </h3>
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-headlines font-semibold text-foreground mb-2">
                    Flexible Payment Plans
                  </h4>
                  <p className="body-secondary text-muted-foreground text-sm">
                    Structured payment schedules aligned with project milestones. No payment required until work begins.
                  </p>
                </div>
                
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-headlines font-semibold text-foreground mb-2">
                    Renovation Financing
                  </h4>
                  <p className="body-secondary text-muted-foreground text-sm">
                    We partner with Danish financial institutions to offer competitive renovation financing options.
                  </p>
                </div>
                
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-headlines font-semibold text-foreground mb-2">
                    Transparent Pricing
                  </h4>
                  <p className="body-secondary text-muted-foreground text-sm">
                    Detailed quotes with no hidden costs. All materials, labor, and permits clearly itemized.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <h4 className="headline-secondary text-xl font-bold text-foreground mb-4">
              Ready to Discuss Your Project?
            </h4>
            <p className="body-primary text-muted-foreground mb-6">
              Schedule a consultation to receive a detailed proposal tailored to your specific needs and preferences.
            </p>
            <Button
              variant="default"
              className="bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground px-8 py-4 text-lg"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => window.location.href = '/consultation-journey'}
            >
              Get Your Custom Proposal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentGuide;