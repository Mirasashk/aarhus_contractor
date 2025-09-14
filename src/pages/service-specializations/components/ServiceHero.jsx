import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Wrench" size={24} className="text-brand-primary" />
                </div>
                <span className="font-headlines font-medium text-brand-primary text-lg">
                  Service Specializations
                </span>
              </div>
              
              <h1 className="headline-primary text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Crafted Spaces for
                <span className="text-brand-primary block">Danish Living</span>
              </h1>
              
              <p className="body-primary text-xl text-muted-foreground max-w-2xl">
                Each space in your home deserves specialized attention. Our Danish craftsmanship approach transforms kitchens into culinary sanctuaries, bathrooms into wellness retreats, and living spaces into harmonious environments that embody hygge principles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default"
                className="bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground px-8 py-4 text-lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => window.location.href = '/consultation-journey'}
              >
                Schedule Consultation
              </Button>
              
              <Button 
                variant="outline"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground px-8 py-4 text-lg"
                iconName="Image"
                iconPosition="left"
                onClick={() => window.location.href = '/project-transformations-gallery'}
              >
                View Portfolio
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-border">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} className="text-brand-primary" />
                <span className="font-headlines font-medium text-sm text-foreground">
                  Danish Certified
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-brand-primary" />
                <span className="font-headlines font-medium text-sm text-foreground">
                  Fully Insured
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} className="text-brand-primary" />
                <span className="font-headlines font-medium text-sm text-foreground">
                  15+ Years
                </span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Danish kitchen renovation showcasing clean lines and natural materials"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-background/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-card">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="font-headlines font-medium text-sm text-foreground">
                    Active Projects: 12
                  </span>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-card">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-headlines font-bold text-lg text-brand-primary">150+</div>
                      <div className="font-body text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div>
                      <div className="font-headlines font-bold text-lg text-brand-primary">98%</div>
                      <div className="font-body text-sm text-muted-foreground">Satisfaction</div>
                    </div>
                    <div>
                      <div className="font-headlines font-bold text-lg text-brand-primary">4.9</div>
                      <div className="font-body text-sm text-muted-foreground">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-secondary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-conversion-accent/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;