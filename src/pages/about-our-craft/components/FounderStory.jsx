import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FounderStory = () => {
  const milestones = [
    {
      year: "1987",
      title: "The Beginning",
      description: "Started as an apprentice carpenter in traditional Danish workshop in Aarhus old town",
      icon: "Hammer"
    },
    {
      year: "1995",
      title: "Master Certification",
      description: "Achieved Danish Master Craftsman certification, specializing in heritage restoration",
      icon: "Award"
    },
    {
      year: "2003",
      title: "Aarhus Contractor Founded",
      description: "Established company with vision to blend traditional craftsmanship with modern design",
      icon: "Home"
    },
    {
      year: "2015",
      title: "Sustainable Innovation",
      description: "Pioneered eco-friendly renovation practices while maintaining Danish quality standards",
      icon: "Leaf"
    },
    {
      year: "2024",
      title: "Cultural Ambassador",
      description: "Recognized as leading advocate for Danish design principles in modern construction",
      icon: "Star"
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="headline-secondary text-3xl lg:text-4xl font-bold text-foreground mb-6">
              A Journey Rooted in Danish Tradition
            </h2>
            <p className="body-primary text-lg text-muted-foreground max-w-2xl mx-auto">
              Every craftsman has a story. Mine began in the cobblestone workshops of old Aarhus, 
              where I learned that true quality comes from understanding both material and culture.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="body-primary text-foreground leading-relaxed">
                  My grandfather was a furniture maker in the heart of Aarhus. As a child, I spent countless hours 
                  in his workshop, watching him transform raw Danish oak into pieces that would last generations. 
                  He taught me that craftsmanship isn't just about technique—it's about respect.
                </p>
                
                <p className="body-primary text-foreground leading-relaxed">
                  Respect for the material, respect for the tradition, and most importantly, respect for the people 
                  who will live with your work every day. This philosophy became the foundation of everything I do.
                </p>
                
                <p className="body-primary text-foreground leading-relaxed">
                  When I started Aarhus Contractor, I wanted to bring this same reverence to home renovation. 
                  Not just building, but creating spaces that embody the Danish concept of hygge—comfort, 
                  coziness, and contentment that comes from being truly at home.
                </p>
              </div>

              <div className="bg-muted p-6 rounded-xl border-l-4 border-brand-primary">
                <p className="accent-text text-brand-primary mb-2">
                  "True craftsmanship honors both tradition and innovation."
                </p>
                <p className="text-sm text-muted-foreground">
                  — Lars Andersen, Master Craftsman
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=600&fit=crop"
                  alt="Traditional Danish carpentry workshop with hand tools and oak wood"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-xl shadow-elevated">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-brand-primary" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Aarhus, Denmark</p>
                    <p className="text-xs text-muted-foreground">Where it all began</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="headline-secondary text-2xl font-bold text-center text-foreground mb-12">
              Journey Milestones
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />
              
              <div className="space-y-8">
                {milestones?.map((milestone, index) => (
                  <div key={milestone?.year} className="relative flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center shadow-card">
                      <Icon name={milestone?.icon} size={24} className="text-primary-foreground" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-background p-6 rounded-xl shadow-subtle">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-2xl font-bold text-brand-primary">{milestone?.year}</span>
                        <h4 className="text-xl font-semibold text-foreground">{milestone?.title}</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{milestone?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;