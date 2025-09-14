import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HyggeSection = () => {
  const hyggeElements = [
    {
      icon: "Sun",
      title: "Natural Light Mastery",
      description: "Maximizing Denmark's precious daylight through strategic window placement, light wells, and reflective surfaces that bring warmth to every corner.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: "Flame",
      title: "Warmth & Texture",
      description: "Incorporating natural materials like oak, wool, and stone that invite touch and create visual warmth even in the coldest months.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: "Heart",
      title: "Intimate Spaces",
      description: "Creating cozy nooks and gathering areas that encourage connection, conversation, and the simple pleasure of being together.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: "Leaf",
      title: "Seasonal Harmony",
      description: "Designing spaces that celebrate each season's unique beauty while providing comfort and functionality year-round.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const principles = [
    {
      number: "01",
      title: "Simplicity Over Complexity",
      description: "Every element serves a purpose. We eliminate the unnecessary to highlight what truly matters in your daily life."
    },
    {
      number: "02", 
      title: "Quality Over Quantity",
      description: "Fewer, better things. We choose materials and fixtures that will age beautifully and serve you for decades."
    },
    {
      number: "03",
      title: "Comfort Over Perfection",
      description: "Spaces should feel lived-in and welcoming, not like museum displays. We design for real life, not just photographs."
    },
    {
      number: "04",
      title: "Connection Over Isolation",
      description: "Homes should bring people together. We create natural gathering points and sight lines that encourage interaction."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-card/50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="font-headlines font-medium text-accent uppercase tracking-wider text-sm">
              Hygge Philosophy
            </span>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          
          <h2 className="headline-secondary text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Hygge Through Construction
          </h2>
          
          <p className="body-primary text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just a design trend, hygge is a way of life that influences every construction decision we make. It's about creating spaces that nurture well-being and celebrate the art of comfortable living.
          </p>
        </div>

        {/* Hygge Elements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {hyggeElements?.map((element, index) => (
            <div key={index} className="group">
              <div className="bg-background rounded-2xl shadow-card overflow-hidden hover:shadow-elevated transition-all duration-500 gentle-hover">
                <div className="relative overflow-hidden">
                  <Image
                    src={element?.image}
                    alt={element?.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name={element?.icon} size={20} className="text-accent" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-headlines font-bold text-lg text-foreground mb-3">
                    {element?.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {element?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Design Principles */}
        <div className="bg-background rounded-3xl shadow-card p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Our Design Principles
            </h3>
            <p className="body-primary text-muted-foreground max-w-2xl mx-auto">
              These four principles guide every decision we make, ensuring your space embodies authentic Danish comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles?.map((principle, index) => (
              <div key={index} className="flex space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="font-headlines font-bold text-2xl text-accent">
                      {principle?.number}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-headlines font-bold text-xl text-foreground">
                    {principle?.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <blockquote className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-accent/20 font-serif">"</div>
              <p className="accent-text text-2xl lg:text-3xl text-foreground leading-relaxed mb-6">
                Hygge isn't about perfection—it's about creating spaces where life's simple pleasures can unfold naturally, where every corner invites you to pause, breathe, and feel truly at home.
              </p>
              <div className="absolute -bottom-4 -right-4 text-6xl text-accent/20 font-serif">"</div>
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4 mt-8">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                <Icon name="User" size={20} className="text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="font-headlines font-semibold text-foreground">Lars Andersen</p>
                <p className="text-sm text-muted-foreground">Master Craftsman & Design Philosophy Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HyggeSection;