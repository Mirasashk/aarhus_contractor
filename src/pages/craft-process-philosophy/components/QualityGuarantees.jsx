import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const QualityGuarantees = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const guarantees = [
    {
      id: 1,
      icon: "Shield",
      title: "Lifetime Craftsmanship Warranty",
      subtitle: "Our work, guaranteed for life",
      description: "We stand behind every joint, every finish, and every detail with a comprehensive lifetime warranty on all structural work and custom millwork.",
      details: [
        "Structural integrity guaranteed for the life of your home",
        "Custom cabinetry and millwork covered against defects",
        "Annual inspection and maintenance program included",
        "Priority response for any warranty-related issues",
        "Transferable warranty that adds value to your property"
      ],
      coverage: "All structural modifications, custom woodwork, and built-in elements",
      duration: "Lifetime of the structure",
      color: "brand-primary"
    },
    {
      id: 2,
      icon: "Award",
      title: "Danish Quality Certification",
      subtitle: "Meeting national construction standards",
      description: "Every project meets or exceeds Danish building codes and quality standards, certified by independent inspectors and backed by comprehensive documentation.",
      details: [
        "Independent third-party quality inspections at each phase",
        "Compliance with Danish Building Regulations (BR18)",
        "Energy efficiency certification and documentation",
        "Material quality certificates from all suppliers",
        "Photographic documentation of all work phases"
      ],
      coverage: "All construction work, materials, and installation methods",
      duration: "Permanent certification record",
      color: "accent"
    },
    {
      id: 3,
      icon: "Clock",
      title: "Timeline Commitment",
      subtitle: "On-time delivery, guaranteed",
      description: "We commit to realistic timelines and deliver on our promises. If we're late due to our scheduling, we compensate you for the inconvenience.",
      details: [
        "Detailed project timeline with milestone dates",
        "Weekly progress updates and communication",
        "Weather and permit delay protections included",
        "Compensation for contractor-caused delays",
        "Flexible scheduling to minimize disruption"
      ],
      coverage: "All project phases from start to final walkthrough",
      duration: "Throughout entire project timeline",
      color: "conversion-accent"
    },
    {
      id: 4,
      icon: "Umbrella",
      title: "Comprehensive Insurance",
      subtitle: "Full protection for your property",
      description: "Complete insurance coverage protects your property, our workers, and your investment throughout the entire construction process.",
      details: [
        "General liability insurance up to 5 million DKK",
        "Professional indemnity coverage for design work",
        "Workers\' compensation for all team members",
        "Property damage protection during construction",
        "Tool and material theft coverage"
      ],
      coverage: "Your property, our team, and all project materials",
      duration: "Active throughout project and warranty period",
      color: "success"
    }
  ];

  const certifications = [
    {
      name: "Danish Building Authority",
      description: "Licensed contractor with full building permits",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Danish Carpenter Guild",
      description: "Master craftsman certification and membership",
      logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Insurance Denmark",
      description: "Comprehensive liability and professional coverage",
      logo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Green Building Council",
      description: "Sustainable construction practices certification",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-card/30 to-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-success rounded-full"></div>
            <span className="font-headlines font-medium text-success uppercase tracking-wider text-sm">
              Quality Assurance
            </span>
            <div className="w-12 h-1 bg-success rounded-full"></div>
          </div>
          
          <h2 className="headline-secondary text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Our Quality Guarantees
          </h2>
          
          <p className="body-primary text-xl text-muted-foreground max-w-3xl mx-auto">
            Your investment deserves protection. We back every project with comprehensive guarantees, certifications, and insurance coverage that gives you complete peace of mind.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {guarantees?.map((guarantee) => (
            <div key={guarantee?.id} className="group">
              <div className="bg-background rounded-2xl shadow-card overflow-hidden hover:shadow-elevated transition-all duration-500">
                {/* Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-${guarantee?.color}/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon name={guarantee?.icon} size={24} className={`text-${guarantee?.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-headlines font-bold text-xl text-foreground mb-1">
                        {guarantee?.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {guarantee?.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {guarantee?.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                <div className={`transition-all duration-500 ${
                  expandedCard === guarantee?.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="p-6 space-y-6">
                    {/* Details List */}
                    <div>
                      <h4 className="font-headlines font-semibold text-foreground mb-3">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {guarantee?.details?.map((detail, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Coverage & Duration */}
                    <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div>
                        <h5 className="font-headlines font-semibold text-foreground text-sm mb-2">
                          Coverage:
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          {guarantee?.coverage}
                        </p>
                      </div>
                      <div>
                        <h5 className="font-headlines font-semibold text-foreground text-sm mb-2">
                          Duration:
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          {guarantee?.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Toggle Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => toggleCard(guarantee?.id)}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-muted hover:bg-card text-muted-foreground hover:text-foreground rounded-lg transition-all duration-300"
                  >
                    <span className="font-headlines font-medium text-sm">
                      {expandedCard === guarantee?.id ? 'Show Less' : 'Learn More'}
                    </span>
                    <Icon 
                      name={expandedCard === guarantee?.id ? 'ChevronUp' : 'ChevronDown'} 
                      size={16} 
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-background rounded-3xl shadow-card p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Professional Certifications
            </h3>
            <p className="body-primary text-muted-foreground max-w-2xl mx-auto">
              Our credentials demonstrate our commitment to professional excellence and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications?.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="bg-muted/50 rounded-2xl p-6 hover:bg-card hover:shadow-subtle transition-all duration-300">
                  <div className="w-16 h-16 bg-background rounded-full overflow-hidden mx-auto mb-4 shadow-subtle">
                    <Image
                      src={cert?.logo}
                      alt={cert?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h4 className="font-headlines font-bold text-foreground mb-2">
                    {cert?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {cert?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
              <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={32} className="text-brand-primary" />
              </div>
              
              <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Your Trust is Our Foundation
              </h3>
              
              <p className="body-primary text-lg text-muted-foreground leading-relaxed mb-8">
                These guarantees aren't just policies—they're promises. When you choose Aarhus Contractor, you're not just hiring builders; you're partnering with craftsmen who take personal pride in every project and stand behind their work for life.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-brand-primary" />
                  <span className="font-headlines font-medium text-foreground">+45 8612 3456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-brand-primary" />
                  <span className="font-headlines font-medium text-foreground">quality@aarhuscontractor.dk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityGuarantees;