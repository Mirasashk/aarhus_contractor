import React from 'react';
import Header from '../../components/ui/Header';
import PhilosophyHero from './components/PhilosophyHero';
import ProcessVisualization from './components/ProcessVisualization';
import HyggeSection from './components/HyggeSection';
import CraftShowcase from './components/CraftShowcase';
import ArtisanNetwork from './components/ArtisanNetwork';
import QualityGuarantees from './components/QualityGuarantees';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const CraftProcessPhilosophy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <PhilosophyHero />
      {/* Process Visualization */}
      <ProcessVisualization />
      {/* Hygge Philosophy */}
      <HyggeSection />
      {/* Craft Showcase */}
      <CraftShowcase />
      {/* Artisan Network */}
      <ArtisanNetwork />
      {/* Quality Guarantees */}
      <QualityGuarantees />
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary/5 to-accent/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Icon name="MessageCircle" size={32} className="text-brand-primary" />
            </div>
            
            <h2 className="headline-secondary text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Experience Danish Craftsmanship?
            </h2>
            
            <p className="body-primary text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Let's discuss how our philosophy and process can transform your space into a true reflection of Danish comfort and quality. Every great project begins with a conversation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="default"
                className="bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground font-cta font-semibold px-8 py-4 shadow-subtle"
                onClick={() => window.location.href = '/consultation-journey'}
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Schedule Your Consultation
              </Button>
              
              <Button
                variant="outline"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground font-cta font-semibold px-8 py-4"
                onClick={() => window.location.href = '/project-transformations-gallery'}
              >
                <Icon name="Image" size={20} className="mr-2" />
                View Our Portfolio
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 mt-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span className="font-headlines text-sm">+45 8612 3456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span className="font-headlines text-sm">hello@aarhuscontractor.dk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span className="font-headlines text-sm">Aarhus, Denmark</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center">
                  <Icon name="Home" size={16} className="text-background" />
                </div>
                <span className="font-headlines font-bold text-lg">Aarhus Contractor</span>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                Danish craftsmanship meets contemporary living. Creating spaces that embody hygge through thoughtful construction and timeless design.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-headlines font-semibold text-background">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/homepage" className="text-background/80 hover:text-background text-sm transition-colors">Home</a></li>
                <li><a href="/project-transformations-gallery" className="text-background/80 hover:text-background text-sm transition-colors">Gallery</a></li>
                <li><a href="/service-specializations" className="text-background/80 hover:text-background text-sm transition-colors">Services</a></li>
                <li><a href="/about-our-craft" className="text-background/80 hover:text-background text-sm transition-colors">About</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-headlines font-semibold text-background">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-background/80 text-sm">Kitchen Renovations</span></li>
                <li><span className="text-background/80 text-sm">Bathroom Remodeling</span></li>
                <li><span className="text-background/80 text-sm">Living Space Design</span></li>
                <li><span className="text-background/80 text-sm">Heritage Restoration</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-headlines font-semibold text-background">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} className="text-background/60" />
                  <span className="text-background/80 text-sm">+45 8612 3456</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={14} className="text-background/60" />
                  <span className="text-background/80 text-sm">hello@aarhuscontractor.dk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={14} className="text-background/60" />
                  <span className="text-background/80 text-sm">Aarhus, Denmark</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60 text-sm">
              © {new Date()?.getFullYear()} Aarhus Contractor. All rights reserved. | Danish craftsmanship since 1999.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CraftProcessPhilosophy;