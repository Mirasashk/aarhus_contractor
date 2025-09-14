import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceOverview = () => {
  const services = [
    {
      id: 'kitchen',
      title: 'Kitchen Mastery',
      subtitle: 'Culinary Sanctuaries',
      description: `Transform your kitchen into the heart of Danish living. Our approach combines functional design with hygge principles, creating spaces that inspire both everyday cooking and memorable gatherings.`,
      features: [
        'Danish design principles integration',
        'Natural material selection',
        'Appliance harmony & efficiency',
        'Storage optimization',
        'Lighting design for ambiance'
      ],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: 'ChefHat',
      color: 'bg-brand-primary',
      investmentRange: '150,000 - 450,000 DKK',
      timeline: '6-12 weeks',
      projects: 45
    },
    {
      id: 'bathroom',
      title: 'Bathroom Sanctuaries',
      subtitle: 'Wellness Retreats',
      description: `Create personal spa experiences with Nordic design elements. Every bathroom becomes a sanctuary for relaxation and rejuvenation, incorporating natural materials and thoughtful lighting.`,
      features: [
        'Spa-like atmosphere creation',
        'Natural lighting solutions',
        'Premium material selection',
        'Water efficiency systems',
        'Heated floor integration'
      ],
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: 'Droplets',
      color: 'bg-brand-secondary',
      investmentRange: '80,000 - 250,000 DKK',
      timeline: '4-8 weeks',
      projects: 38
    },
    {
      id: 'living',
      title: 'Living Space Optimization',
      subtitle: 'Harmonious Environments',
      description: `Balance architectural heritage with contemporary living needs. Open-plan conversions and space optimization that respects your home's character while enhancing daily life.`,
      features: [
        'Open-plan conversions','Heritage home modernization','Natural light maximization','Flexible space solutions','Architectural respect'
      ],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',icon: 'Home',color: 'bg-conversion-accent',investmentRange: '200,000 - 600,000 DKK',timeline: '8-16 weeks',
      projects: 32
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="headline-secondary text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Specialized Craftsmanship for Every Space
          </h2>
          <p className="body-primary text-xl text-muted-foreground">
            Each area of your home requires unique expertise and attention. Our specialized services ensure every space reflects Danish design principles while meeting your specific lifestyle needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services?.map((service, index) => (
            <div key={service?.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
                  <Image
                    src={service?.image}
                    alt={`${service?.title} renovation example showcasing Danish design principles`}
                    className="w-full h-[500px] object-cover transition-transform duration-slow group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-medium" />
                  
                  {/* Stats Badge */}
                  <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-card">
                    <div className="text-center">
                      <div className="font-headlines font-bold text-lg text-brand-primary">{service?.projects}</div>
                      <div className="font-body text-xs text-muted-foreground">Completed</div>
                    </div>
                  </div>

                  {/* Service Icon */}
                  <div className={`absolute bottom-6 left-6 w-16 h-16 ${service?.color} rounded-xl flex items-center justify-center shadow-card`}>
                    <Icon name={service?.icon} size={28} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${service?.color} rounded-lg flex items-center justify-center`}>
                      <Icon name={service?.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="headline-secondary text-2xl font-bold text-foreground">
                        {service?.title}
                      </h3>
                      <p className="accent-text text-brand-primary">
                        {service?.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="body-primary text-lg text-muted-foreground">
                    {service?.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-headlines font-semibold text-lg text-foreground">
                    What We Include:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                        <span className="body-secondary text-sm text-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Investment Info */}
                <div className="bg-card rounded-xl p-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Banknote" size={16} className="text-brand-primary" />
                        <span className="font-headlines font-medium text-sm text-foreground">
                          Investment Range
                        </span>
                      </div>
                      <p className="font-headlines font-bold text-lg text-brand-primary">
                        {service?.investmentRange}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Clock" size={16} className="text-brand-primary" />
                        <span className="font-headlines font-medium text-sm text-foreground">
                          Timeline
                        </span>
                      </div>
                      <p className="font-headlines font-bold text-lg text-brand-primary">
                        {service?.timeline}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="body-secondary text-sm text-muted-foreground">
                      *Investment ranges reflect lifestyle enhancement levels. Final pricing determined during consultation based on materials, scope, and customization preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;