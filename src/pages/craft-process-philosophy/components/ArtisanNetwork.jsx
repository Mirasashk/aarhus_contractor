import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ArtisanNetwork = () => {
  const [activeCategory, setActiveCategory] = useState('craftsmen');

  const categories = [
    { id: 'craftsmen', name: 'Master Craftsmen', icon: 'Hammer' },
    { id: 'suppliers', name: 'Material Suppliers', icon: 'Package' },
    { id: 'specialists', name: 'Design Specialists', icon: 'Palette' }
  ];

  const partners = {
    craftsmen: [
      {
        name: "Erik Møller",
        specialty: "Traditional Joinery",
        experience: "30+ years",
        description: "Master of traditional Danish woodworking techniques, specializing in custom cabinetry and architectural millwork that honors centuries-old craftsmanship traditions.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        certifications: ["Danish Carpenter Guild", "Heritage Restoration Certified"],
        signature: "Hand-cut dovetail joints and traditional mortise-and-tenon construction"
      },
      {
        name: "Astrid Hansen",
        specialty: "Stone & Tile Mastery",
        experience: "25+ years",
        description: "Expert in natural stone installation and traditional Danish tile work, bringing Old World techniques to contemporary bathroom and kitchen renovations.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        certifications: ["Natural Stone Institute", "Danish Masonry Association"],
        signature: "Seamless natural stone integration with precision-cut joints"
      },
      {
        name: "Niels Christensen",
        specialty: "Electrical & Smart Systems",
        experience: "20+ years",
        description: "Specialist in integrating modern electrical systems with historic Danish homes while maintaining architectural integrity and period authenticity.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        certifications: ["Danish Electrical Association", "Smart Home Integration"],
        signature: "Invisible modern systems that respect historical architecture"
      }
    ],
    suppliers: [
      {
        name: "Aarhus Timber Co.",
        specialty: "Sustainable Hardwoods",
        experience: "50+ years",
        description: "Family-owned supplier of locally sourced Danish oak, beech, and pine, committed to sustainable forestry practices and traditional wood preparation methods.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        certifications: ["FSC Certified", "PEFC Chain of Custody"],
        signature: "Air-dried hardwoods with natural character and grain patterns"
      },
      {
        name: "Nordic Stone Quarries",
        specialty: "Danish Natural Stone",
        experience: "40+ years",
        description: "Exclusive supplier of Bornholm granite and Faxe limestone, providing authentic Danish stone materials for both restoration and contemporary projects.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        certifications: ["Natural Stone Council", "Quarry Sustainability Certified"],
        signature: "Hand-selected stones with unique Danish geological characteristics"
      },
      {
        name: "Hygge Home Textiles",
        specialty: "Natural Fiber Materials",
        experience: "35+ years",
        description: "Curated collection of Danish wool, linen, and hemp textiles, working with local artisans to create custom window treatments and soft furnishings.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        certifications: ["GOTS Organic Certified", "Danish Design Council"],
        signature: "Hand-woven textiles in traditional Danish patterns and colors"
      }
    ],
    specialists: [
      {
        name: "Mette Larsen",
        specialty: "Color & Light Design",
        experience: "15+ years",
        description: "Expert in Danish color theory and seasonal lighting design, creating palettes that maximize natural light and complement Denmark's unique seasonal variations.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        certifications: ["Danish Design Institute", "Lighting Design Certified"],
        signature: "Color schemes that celebrate Danish light throughout the seasons"
      },
      {
        name: "Thomas Andersen",
        specialty: "Sustainable Systems",
        experience: "18+ years",
        description: "Specialist in eco-friendly building systems, renewable energy integration, and sustainable material selection for environmentally conscious renovations.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        certifications: ["LEED Accredited", "Passive House Certified"],
        signature: "Net-zero energy solutions integrated seamlessly with Danish design"
      },
      {
        name: "Sofie Nielsen",
        specialty: "Heritage Preservation",
        experience: "22+ years",
        description: "Architectural historian and preservation specialist, ensuring renovations respect and enhance the historical significance of Danish properties.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        certifications: ["Heritage Denmark", "Architectural History PhD"],
        signature: "Authentic restoration that honors original craftsmanship intent"
      }
    ]
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-brand-secondary rounded-full"></div>
            <span className="font-headlines font-medium text-brand-secondary uppercase tracking-wider text-sm">
              Our Network
            </span>
            <div className="w-12 h-1 bg-brand-secondary rounded-full"></div>
          </div>
          
          <h2 className="headline-secondary text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Artisan Partners & Suppliers
          </h2>
          
          <p className="body-primary text-xl text-muted-foreground max-w-3xl mx-auto">
            Excellence requires collaboration. We've cultivated relationships with Denmark's finest craftsmen, suppliers, and specialists who share our commitment to quality and authenticity.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-2xl p-2 shadow-card">
            <div className="flex space-x-2">
              {categories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setActiveCategory(category?.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeCategory === category?.id
                      ? 'bg-brand-primary text-primary-foreground shadow-subtle'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={category?.icon} size={20} />
                  <span className="font-headlines font-medium">{category?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners?.[activeCategory]?.map((partner, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-elevated transition-all duration-500 gentle-hover">
                {/* Partner Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={partner?.image}
                    alt={partner?.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-headlines font-semibold text-foreground">
                        {partner?.experience}
                      </span>
                    </div>
                  </div>
                  
                  {/* Name & Specialty */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-headlines font-bold text-xl text-white mb-1">
                      {partner?.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {partner?.specialty}
                    </p>
                  </div>
                </div>

                {/* Partner Details */}
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {partner?.description}
                  </p>

                  {/* Certifications */}
                  <div className="space-y-2">
                    <h4 className="font-headlines font-semibold text-sm text-foreground">
                      Certifications:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {partner?.certifications?.map((cert, certIndex) => (
                        <span
                          key={certIndex}
                          className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Signature Work */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-start space-x-3">
                      <Icon name="Star" size={16} className="text-conversion-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-headlines font-semibold text-sm text-foreground mb-1">
                          Signature Work:
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {partner?.signature}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Philosophy */}
        <div className="mt-20 bg-gradient-to-r from-brand-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Handshake" size={32} className="text-brand-primary" />
            </div>
            
            <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Partnership Philosophy
            </h3>
            
            <p className="body-primary text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              We believe that exceptional results come from exceptional relationships. Every partner in our network shares our values of quality, authenticity, and respect for Danish craftsmanship traditions. Together, we create spaces that honor the past while embracing the future.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={20} className="text-brand-primary" />
                </div>
                <h4 className="font-headlines font-semibold text-foreground mb-2">Quality First</h4>
                <p className="text-sm text-muted-foreground">Every partner meets our rigorous standards for craftsmanship and reliability.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Leaf" size={20} className="text-accent" />
                </div>
                <h4 className="font-headlines font-semibold text-foreground mb-2">Sustainability</h4>
                <p className="text-sm text-muted-foreground">Committed to environmentally responsible practices and local sourcing.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-conversion-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={20} className="text-conversion-accent" />
                </div>
                <h4 className="font-headlines font-semibold text-foreground mb-2">Passion</h4>
                <p className="text-sm text-muted-foreground">Genuine love for their craft and dedication to preserving Danish traditions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanNetwork;