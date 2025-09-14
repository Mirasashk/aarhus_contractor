import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WhyAarhusSection = () => {
  const localAdvantages = [
    {
      icon: "MapPin",
      title: "Deep Local Knowledge",
      description: "Born and raised in Aarhus, we understand the unique architectural character of different neighborhoods, from the historic Latin Quarter to modern Ørestad developments.",
      details: [
        "Historic building regulations expertise",
        "Neighborhood architectural styles",
        "Local permit processes",
        "Climate-specific solutions"
      ]
    },
    {
      icon: "Truck",
      title: "Trusted Supplier Network",
      description: "Decades of relationships with local suppliers ensure access to the finest Danish materials at competitive prices, with reliable delivery and quality guarantees.",
      details: [
        "Premium Danish wood suppliers",
        "Local stone and tile craftsmen",
        "Sustainable material sources",
        "Competitive pricing advantages"
      ]
    },
    {
      icon: "Users",
      title: "Community Integration",
      description: "As active members of the Aarhus community, we understand local customs, respect neighborhood dynamics, and maintain relationships that benefit every project.",
      details: [
        "Respectful work practices",
        "Community event participation",
        "Local business partnerships",
        "Neighborhood reputation"
      ]
    },
    {
      icon: "Clock",
      title: "Responsive Service",
      description: "Local presence means immediate response to your needs, whether for emergency repairs, project consultations, or ongoing maintenance support.",
      details: [
        "Same-day emergency response",
        "Flexible scheduling",
        "Ongoing maintenance support",
        "Personal availability"
      ]
    }
  ];

  const architecturalStyles = [
    {
      period: "Medieval Heritage",
      timeframe: "13th-16th Century",
      characteristics: "Half-timbered construction, steep roofs, small windows",
      ourExpertise: "Traditional timber restoration, heritage-compliant modernization",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
    },
    {
      period: "Danish Golden Age",
      timeframe: "1800-1850",
      characteristics: "Neoclassical elements, symmetrical facades, refined proportions",
      ourExpertise: "Period-appropriate renovations, classical detail restoration",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      period: "Functionalist Movement",
      timeframe: "1930-1960",
      characteristics: "Clean lines, flat roofs, large windows, minimal ornamentation",
      ourExpertise: "Modernist renovation, energy efficiency upgrades",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
    },
    {
      period: "Contemporary Danish",
      timeframe: "1990-Present",
      characteristics: "Sustainable materials, natural light focus, indoor-outdoor connection",
      ourExpertise: "Modern Danish design integration, sustainable upgrades",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
    }
  ];

  const supplierPartners = [
    {
      name: "Aarhus Timber Co.",
      specialty: "Premium Danish Oak & Pine",
      relationship: "25 years",
      advantage: "First selection rights on finest grain wood"
    },
    {
      name: "Nordic Stone Works",
      specialty: "Local Granite & Limestone",
      relationship: "18 years",
      advantage: "Custom cutting and finishing services"
    },
    {
      name: "Danish Design Materials",
      specialty: "Sustainable Building Products",
      relationship: "12 years",
      advantage: "Early access to innovative eco-materials"
    },
    {
      name: "Craftsman\'s Hardware",
      specialty: "Traditional & Modern Hardware",
      relationship: "20 years",
      advantage: "Specialized restoration hardware sourcing"
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="headline-secondary text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Why Aarhus is Our Foundation
          </h2>
          <p className="body-primary text-lg text-muted-foreground max-w-3xl mx-auto">
            Our deep roots in Aarhus provide unique advantages that benefit every project. 
            Local knowledge, trusted relationships, and community understanding create value 
            that extends far beyond craftsmanship alone.
          </p>
        </div>

        {/* Local Advantages */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {localAdvantages?.map((advantage, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 shadow-card">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={advantage?.icon} size={28} className="text-brand-primary" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">{advantage?.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage?.description}</p>
                  
                  <ul className="space-y-2">
                    {advantage?.details?.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Expertise */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Aarhus Architectural Heritage Expertise
            </h3>
            <p className="body-primary text-muted-foreground">
              Understanding the architectural evolution of Aarhus allows us to honor historical 
              integrity while meeting modern living needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturalStyles?.map((style, index) => (
              <div key={index} className="bg-background rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-medium">
                <div className="relative overflow-hidden">
                  <Image
                    src={style?.image}
                    alt={`${style?.period} architecture in Aarhus`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {style?.timeframe}
                  </div>
                </div>
                
                <div className="p-6 space-y-3">
                  <h4 className="font-bold text-foreground">{style?.period}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{style?.characteristics}</p>
                  
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs font-semibold text-brand-primary uppercase tracking-wide mb-1">Our Expertise</p>
                    <p className="text-sm text-foreground">{style?.ourExpertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supplier Network */}
        <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-card mb-16">
          <div className="text-center mb-12">
            <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Trusted Local Supplier Network
            </h3>
            <p className="body-primary text-muted-foreground">
              Decades of relationships with Aarhus suppliers ensure access to premium materials, 
              competitive pricing, and reliable service for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {supplierPartners?.map((supplier, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground">{supplier?.name}</h4>
                    <p className="text-sm text-brand-primary">{supplier?.specialty}</p>
                  </div>
                  <span className="text-xs bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full">
                    {supplier?.relationship}
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Star" size={16} className="text-conversion-accent mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{supplier?.advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Connection */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground">
              Rooted in Community
            </h3>
            
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-xl shadow-subtle">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Heart" size={20} className="text-brand-primary" />
                  <h4 className="font-semibold text-foreground">Local Pride</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Every project we complete adds to the beauty and value of our shared community. 
                  We take personal pride in contributing to Aarhus's architectural legacy.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-xl shadow-subtle">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Users" size={20} className="text-brand-primary" />
                  <h4 className="font-semibold text-foreground">Neighborhood Respect</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that renovation affects entire neighborhoods. Our work practices 
                  minimize disruption while maintaining open communication with neighbors.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-xl shadow-subtle">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Handshake" size={20} className="text-brand-primary" />
                  <h4 className="font-semibold text-foreground">Long-term Relationships</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Many of our clients become lifelong friends. Local presence means we're here 
                  for ongoing support, seasonal maintenance, and future projects.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-elevated">
              <Image
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop"
                alt="Beautiful Aarhus neighborhood with traditional Danish architecture"
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Location Badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-primary text-primary-foreground p-6 rounded-xl shadow-elevated">
              <div className="text-center">
                <Icon name="MapPin" size={32} className="mx-auto mb-2" />
                <p className="font-bold text-sm">Aarhus, Denmark</p>
                <p className="text-xs opacity-90">Our Home Since 1987</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAarhusSection;