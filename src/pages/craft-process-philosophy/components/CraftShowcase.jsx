import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CraftShowcase = () => {
  const [activeDetail, setActiveDetail] = useState(0);

  const craftDetails = [
    {
      title: "Hand-Selected Materials",
      description: "Every piece of wood, every stone, every fixture is personally chosen for its character, quality, and contribution to your space's story.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "Locally sourced Danish oak with natural grain patterns",
        "Bornholm granite selected for unique geological character",
        "Hand-forged hardware from traditional Danish smiths",
        "Natural fiber textiles from heritage Danish mills"
      ]
    },
    {
      title: "Precision Joinery",
      description: "Traditional Danish woodworking techniques create connections that strengthen over time, using methods passed down through generations of craftsmen.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "Hand-cut dovetail joints for maximum strength and beauty",
        "Mortise and tenon construction for structural integrity",
        "Traditional wood finishing with natural oils and waxes",
        "Custom millwork shaped by hand tools and experience"
      ]
    },
    {
      title: "Finishing Excellence",
      description: "The final touches reveal the soul of Danish craftsmanship—surfaces that invite touch, details that reward close inspection, quality that improves with age.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "Multiple coats of hand-rubbed natural finishes",
        "Edge details shaped and smoothed by hand",
        "Hardware installation with precision alignment",
        "Final quality inspection of every surface and joint"
      ]
    }
  ];

  const techniques = [
    {
      icon: "Hammer",
      name: "Traditional Joinery",
      description: "Hand-cut joints that strengthen over time"
    },
    {
      icon: "Ruler",
      name: "Precision Measurement",
      description: "Millimeter accuracy in every cut and fit"
    },
    {
      icon: "Eye",
      name: "Quality Inspection",
      description: "Multiple checkpoints ensure perfection"
    },
    {
      icon: "Clock",
      name: "Patient Process",
      description: "Time-honored methods never rushed"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-conversion-accent rounded-full"></div>
            <span className="font-headlines font-medium text-conversion-accent uppercase tracking-wider text-sm">
              Craftsmanship Details
            </span>
            <div className="w-12 h-1 bg-conversion-accent rounded-full"></div>
          </div>
          
          <h2 className="headline-secondary text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Where Details Define Excellence
          </h2>
          
          <p className="body-primary text-xl text-muted-foreground max-w-3xl mx-auto">
            True craftsmanship lives in the details others might overlook. Every surface, every joint, every finish reflects our commitment to creating work that honors Danish building traditions.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <Image
                src={craftDetails?.[activeDetail]?.image}
                alt={craftDetails?.[activeDetail]?.title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Image Navigation */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex space-x-2">
                  {craftDetails?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveDetail(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeDetail === index
                          ? 'bg-white scale-125' :'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-3 gap-4">
              {craftDetails?.map((detail, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDetail(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    activeDetail === index
                      ? 'ring-2 ring-conversion-accent scale-105' :'hover:scale-102'
                  }`}
                >
                  <Image
                    src={detail?.image}
                    alt={detail?.title}
                    className="w-full h-20 object-cover"
                  />
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    activeDetail === index
                      ? 'bg-conversion-accent/20' :'bg-black/20 hover:bg-black/10'
                  }`}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {craftDetails?.[activeDetail]?.title}
              </h3>
              <p className="body-primary text-lg text-muted-foreground leading-relaxed mb-6">
                {craftDetails?.[activeDetail]?.description}
              </p>
            </div>

            {/* Detail List */}
            <div className="space-y-4">
              <h4 className="font-headlines font-semibold text-foreground">
                Craftsmanship Focus:
              </h4>
              <ul className="space-y-3">
                {craftDetails?.[activeDetail]?.details?.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name="Check" size={16} className="text-conversion-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex space-x-4 pt-6">
              <button
                onClick={() => setActiveDetail(Math.max(0, activeDetail - 1))}
                disabled={activeDetail === 0}
                className="flex items-center space-x-2 px-6 py-3 bg-muted text-muted-foreground rounded-lg hover:bg-card transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon name="ChevronLeft" size={16} />
                <span className="font-headlines font-medium">Previous</span>
              </button>
              
              <button
                onClick={() => setActiveDetail(Math.min(craftDetails?.length - 1, activeDetail + 1))}
                disabled={activeDetail === craftDetails?.length - 1}
                className="flex items-center space-x-2 px-6 py-3 bg-conversion-accent text-foreground rounded-lg hover:bg-conversion-accent/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="font-headlines font-medium">Next</span>
                <Icon name="ChevronRight" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Techniques Grid */}
        <div className="bg-card rounded-3xl shadow-card p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Traditional Techniques, Modern Standards
            </h3>
            <p className="body-primary text-muted-foreground max-w-2xl mx-auto">
              We combine time-tested Danish building methods with contemporary quality standards to create work that honors the past while serving the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techniques?.map((technique, index) => (
              <div key={index} className="text-center group">
                <div className="bg-background rounded-2xl p-6 hover:shadow-subtle transition-all duration-300 gentle-hover">
                  <div className="w-16 h-16 bg-conversion-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={technique?.icon} size={24} className="text-conversion-accent" />
                  </div>
                  
                  <h4 className="font-headlines font-bold text-foreground mb-3">
                    {technique?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {technique?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Behind the Scenes */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-muted/30 to-card/50 rounded-3xl p-8 lg:p-12">
            <div className="w-20 h-20 bg-conversion-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Camera" size={32} className="text-conversion-accent" />
            </div>
            
            <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Behind the Scenes Documentation
            </h3>
            
            <p className="body-primary text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              We document every phase of our work, not just for quality control, but to share the artistry and attention to detail that goes into every project. Your renovation becomes a story of transformation, captured in detail.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="FileText" size={20} className="text-brand-primary" />
                </div>
                <h4 className="font-headlines font-semibold text-foreground">Process Documentation</h4>
                <p className="text-sm text-muted-foreground">Detailed photos and notes at every construction phase</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Video" size={20} className="text-accent" />
                </div>
                <h4 className="font-headlines font-semibold text-foreground">Time-lapse Videos</h4>
                <p className="text-sm text-muted-foreground">Watch your space transform from start to finish</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-conversion-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Book" size={20} className="text-conversion-accent" />
                </div>
                <h4 className="font-headlines font-semibold text-foreground">Project Portfolio</h4>
                <p className="text-sm text-muted-foreground">Complete record of materials, techniques, and finishes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftShowcase;