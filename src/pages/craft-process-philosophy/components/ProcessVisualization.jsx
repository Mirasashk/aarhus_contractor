import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProcessVisualization = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 0,
      title: "Cultural Consultation",
      subtitle: "Understanding Lifestyle Needs",
      description: `We begin every project by deeply understanding how you live, work, and find comfort in your space. This isn't just about measurements and materials—it's about discovering your personal interpretation of hygge and how your home can better support your daily rituals and long-term dreams.`,
      icon: "Users",
      color: "brand-primary",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Lifestyle assessment and daily routine analysis",
        "Family dynamics and space usage patterns",
        "Personal style preferences and comfort priorities",
        "Long-term vision and adaptability planning"
      ],
      duration: "1-2 weeks",
      deliverable: "Comprehensive lifestyle blueprint"
    },
    {
      id: 1,
      title: "Heritage Assessment",
      subtitle: "Respecting Architectural History",
      description: `Every Danish home carries stories in its bones. We carefully evaluate your property's architectural heritage, understanding its original design intent while identifying opportunities to honor the past while embracing contemporary functionality. This phase ensures our renovations feel authentic and timeless.`,
      icon: "Building",
      color: "accent",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Structural integrity and historical significance review",
        "Original design elements worth preserving",
        "Period-appropriate material identification",
        "Integration possibilities with modern systems"
      ],
      duration: "1 week",
      deliverable: "Heritage preservation plan"
    },
    {
      id: 2,
      title: "Design Integration",
      subtitle: "Blending Old and New",
      description: `This is where Danish design philosophy truly shines—creating seamless harmony between historical character and contemporary living. We develop solutions that feel inevitable, as if the original architect had envisioned modern life. Every detail serves both beauty and function.`,
      icon: "Palette",
      color: "brand-secondary",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Conceptual design development and 3D visualization",
        "Material palette selection with local sourcing",
        "Lighting design for Danish seasonal variations",
        "Spatial flow optimization for daily comfort"
      ],
      duration: "2-3 weeks",
      deliverable: "Complete design documentation"
    },
    {
      id: 3,
      title: "Artisan Execution",
      subtitle: "Showcasing Craftsmanship",
      description: `Our skilled craftsmen bring decades of Danish building tradition to every project. We believe in doing things right the first time, using time-tested techniques alongside modern innovations. Every joint, every finish, every detail reflects our commitment to excellence that will endure for generations.`,
      icon: "Hammer",
      color: "conversion-accent",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Master craftsman-led construction teams",
        "Traditional joinery and finishing techniques",
        "Quality control at every construction phase",
        "Real-time progress documentation and communication"
      ],
      duration: "4-12 weeks",
      deliverable: "Completed construction with quality certification"
    },
    {
      id: 4,
      title: "Lifestyle Transition",
      subtitle: "Ensuring Seamless Experience",
      description: `The completion of construction is just the beginning of your new relationship with your space. We guide you through the transition, ensuring every system works perfectly and you understand how to maintain the quality we've built together. Your satisfaction is our lasting legacy.`,
      icon: "Home",
      color: "success",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Comprehensive walkthrough and system orientation",
        "Maintenance guidance and care instructions",
        "Warranty activation and ongoing support setup",
        "Follow-up consultations and relationship building"
      ],
      duration: "1 week",
      deliverable: "Complete project handover with lifetime support"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-brand-primary rounded-full"></div>
            <span className="font-headlines font-medium text-brand-primary uppercase tracking-wider text-sm">
              Our Process
            </span>
            <div className="w-12 h-1 bg-brand-primary rounded-full"></div>
          </div>
          
          <h2 className="headline-secondary text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Five Phases of Danish Excellence
          </h2>
          
          <p className="body-primary text-xl text-muted-foreground max-w-3xl mx-auto">
            Our methodology transforms construction from a disruptive process into a collaborative journey toward your ideal living space.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
            {phases?.map((phase, index) => (
              <div key={phase?.id} className="flex items-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4">
                <button
                  onClick={() => setActivePhase(index)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activePhase === index
                      ? `bg-${phase?.color} text-white shadow-lg scale-110`
                      : 'bg-muted text-muted-foreground hover:bg-card hover:scale-105'
                  }`}
                >
                  <Icon name={phase?.icon} size={24} />
                </button>
                
                <div className="text-center lg:max-w-32">
                  <p className={`font-headlines font-semibold text-sm transition-colors duration-300 ${
                    activePhase === index ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {phase?.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {phase?.duration}
                  </p>
                </div>
                
                {index < phases?.length - 1 && (
                  <div className="hidden lg:block w-full h-0.5 bg-border mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Phase Details */}
        <div className="bg-card rounded-2xl shadow-card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-${phases?.[activePhase]?.color}/10 rounded-full flex items-center justify-center`}>
                      <Icon name={phases?.[activePhase]?.icon} size={20} className={`text-${phases?.[activePhase]?.color}`} />
                    </div>
                    <div>
                      <h3 className="font-headlines font-bold text-2xl text-foreground">
                        {phases?.[activePhase]?.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {phases?.[activePhase]?.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="body-primary text-muted-foreground leading-relaxed">
                    {phases?.[activePhase]?.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-headlines font-semibold text-foreground">Key Activities:</h4>
                  <ul className="space-y-3">
                    {phases?.[activePhase]?.features?.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <p className="font-headlines font-semibold text-foreground">Duration</p>
                    <p className="text-muted-foreground">{phases?.[activePhase]?.duration}</p>
                  </div>
                  <div>
                    <p className="font-headlines font-semibold text-foreground">Deliverable</p>
                    <p className="text-muted-foreground">{phases?.[activePhase]?.deliverable}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src={phases?.[activePhase]?.image}
                alt={`${phases?.[activePhase]?.title} process visualization`}
                className="w-full h-full min-h-96 lg:min-h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
            disabled={activePhase === 0}
            className="flex items-center space-x-2 px-6 py-3 bg-muted text-muted-foreground rounded-lg hover:bg-card transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon name="ChevronLeft" size={16} />
            <span className="font-headlines font-medium">Previous</span>
          </button>
          
          <button
            onClick={() => setActivePhase(Math.min(phases?.length - 1, activePhase + 1))}
            disabled={activePhase === phases?.length - 1}
            className="flex items-center space-x-2 px-6 py-3 bg-brand-primary text-primary-foreground rounded-lg hover:bg-brand-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="font-headlines font-medium">Next</span>
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessVisualization;