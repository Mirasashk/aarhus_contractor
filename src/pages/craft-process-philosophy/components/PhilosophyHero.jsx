import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PhilosophyHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-brand-primary rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-brand-secondary rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-1 bg-brand-primary rounded-full"></div>
                <span className="font-headlines font-medium text-brand-primary uppercase tracking-wider text-sm">
                  Our Philosophy
                </span>
              </div>
              
              <h1 className="headline-primary text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Danish Design
                <span className="block text-brand-primary">Meets Craftsmanship</span>
              </h1>
              
              <p className="body-primary text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Where traditional Danish building wisdom converges with contemporary living needs, creating spaces that embody hygge through thoughtful construction and timeless design principles.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={20} className="text-brand-primary" />
                </div>
                <div>
                  <p className="font-headlines font-semibold text-foreground">Heritage Respect</p>
                  <p className="text-sm text-muted-foreground">Honoring architectural history</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Leaf" size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-headlines font-semibold text-foreground">Sustainable Craft</p>
                  <p className="text-sm text-muted-foreground">Eco-conscious materials</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="ArrowDown" size={20} className="animate-bounce" />
                <span className="font-headlines text-sm">Discover our methodology</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Danish craftsman working on detailed woodwork"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/95 backdrop-blur-md rounded-xl p-4 shadow-card">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="font-headlines font-bold text-2xl text-brand-primary">25+</p>
                      <p className="text-xs text-muted-foreground">Years Experience</p>
                    </div>
                    <div>
                      <p className="font-headlines font-bold text-2xl text-accent">200+</p>
                      <p className="text-xs text-muted-foreground">Projects Completed</p>
                    </div>
                    <div>
                      <p className="font-headlines font-bold text-2xl text-conversion-accent">98%</p>
                      <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyHero;