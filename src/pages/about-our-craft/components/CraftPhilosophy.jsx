import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CraftPhilosophy = () => {
  const principles = [
    {
      icon: "Home",
      title: "Hygge Through Design",
      description: "Creating spaces that naturally invite comfort, warmth, and contentment through thoughtful material choices and spatial flow.",
      details: [
        "Natural light optimization",
        "Warm material palettes",
        "Comfortable spatial proportions",
        "Connection to nature"
      ]
    },
    {
      icon: "Hammer",
      title: "Traditional Craftsmanship",
      description: "Honoring time-tested Danish building techniques while integrating modern tools and materials for enhanced durability.",
      details: [
        "Hand-selected materials",
        "Traditional joinery methods",
        "Attention to detail",
        "Quality over speed"
      ]
    },
    {
      icon: "Leaf",
      title: "Sustainable Practices",
      description: "Environmental responsibility integrated into every decision, from material sourcing to waste reduction and energy efficiency.",
      details: [
        "Local material sourcing",
        "Waste minimization",
        "Energy-efficient solutions",
        "Long-term durability focus"
      ]
    },
    {
      icon: "Users",
      title: "Client Partnership",
      description: "Building lasting relationships through transparent communication, cultural understanding, and shared vision for your space.",
      details: [
        "Clear communication",
        "Cultural sensitivity",
        "Collaborative design process",
        "Long-term support"
      ]
    }
  ];

  const dailyPractices = [
    {
      time: "7:00 AM",
      activity: "Morning Material Inspection",
      description: "Each day begins with careful examination of materials, ensuring quality meets our Danish standards.",
      icon: "Eye"
    },
    {
      time: "8:30 AM",
      activity: "Team Craft Discussion",
      description: "Daily gathering to discuss techniques, share knowledge, and plan the day's work with precision.",
      icon: "MessageCircle"
    },
    {
      time: "10:00 AM",
      activity: "Client Communication",
      description: "Regular updates and consultations to ensure project alignment with client vision and expectations.",
      icon: "Phone"
    },
    {
      time: "2:00 PM",
      activity: "Quality Control Review",
      description: "Midday assessment of work progress, ensuring every detail meets our exacting standards.",
      icon: "CheckCircle"
    },
    {
      time: "4:30 PM",
      activity: "Workspace Organization",
      description: "Maintaining clean, organized work environment reflects respect for craft and client property.",
      icon: "Grid"
    },
    {
      time: "6:00 PM",
      activity: "Tomorrow\'s Preparation",
      description: "Thoughtful preparation for next day's work, including material staging and tool maintenance.",
      icon: "Calendar"
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="headline-secondary text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Our Craft Philosophy
          </h2>
          <p className="body-primary text-lg text-muted-foreground max-w-3xl mx-auto">
            Danish craftsmanship is more than technique—it's a way of approaching work and life 
            that values quality, sustainability, and human connection above all else.
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {principles?.map((principle, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 shadow-card">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={principle?.icon} size={28} className="text-brand-primary" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">{principle?.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{principle?.description}</p>
                  
                  <ul className="space-y-2">
                    {principle?.details?.map((detail, detailIndex) => (
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

        {/* Daily Practices */}
        <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-card mb-16">
          <div className="text-center mb-12">
            <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-4">
              A Day in Our Workshop
            </h3>
            <p className="body-primary text-muted-foreground">
              Our daily rituals reflect our commitment to excellence and respect for the craft
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyPractices?.map((practice, index) => (
              <div key={index} className="relative">
                <div className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-shadow duration-medium">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={practice?.icon} size={20} className="text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-primary">{practice?.time}</p>
                      <h4 className="font-semibold text-foreground">{practice?.activity}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{practice?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy in Action */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground">
              Philosophy in Action
            </h3>
            
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-xl shadow-subtle">
                <h4 className="font-semibold text-foreground mb-3">Material Selection Ritual</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Every morning, we begin by examining our materials—feeling the grain of wood, 
                  checking the consistency of finishes, ensuring each component meets our standards. 
                  This isn't just quality control; it's a meditation on craftsmanship.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-xl shadow-subtle">
                <h4 className="font-semibold text-foreground mb-3">Client Relationship Philosophy</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in building relationships, not just renovations. Every client becomes 
                  part of our extended family, and we approach each project as if we were creating 
                  a space for our own loved ones.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-xl shadow-subtle">
                <h4 className="font-semibold text-foreground mb-3">Sustainable Commitment</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Sustainability isn't a trend for us—it's a responsibility. We source locally when 
                  possible, minimize waste through careful planning, and choose materials that will 
                  age beautifully over decades.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-elevated">
              <Image
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=700&fit=crop"
                alt="Danish craftsman carefully selecting wood materials in workshop"
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Floating Quote */}
            <div className="absolute -bottom-8 -left-8 bg-brand-primary text-primary-foreground p-6 rounded-xl shadow-elevated max-w-sm">
              <p className="accent-text text-sm mb-2">
                "We don't just build spaces—we craft experiences that honor both tradition and the future."
              </p>
              <p className="text-xs opacity-80">— Our Daily Commitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftPhilosophy;