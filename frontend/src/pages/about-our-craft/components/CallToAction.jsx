import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CallToAction = () => {
  const handleConsultationClick = () => {
    window.location.href = '/consultation-journey';
  };

  const handleGalleryClick = () => {
    window.location.href = '/project-transformations-gallery';
  };

  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us",
      detail: "+45 8612 3456",
      description: "Direct line to our workshop"
    },
    {
      icon: "Mail",
      title: "Email",
      detail: "hello@aarhuscontractor.dk",
      description: "We respond within 4 hours"
    },
    {
      icon: "MapPin",
      title: "Visit Our Workshop",
      detail: "Mejlgade 45, 8000 Aarhus C",
      description: "See our craftsmanship firsthand"
    },
    {
      icon: "Calendar",
      title: "Schedule Consultation",
      detail: "Book Online",
      description: "Free initial consultation"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }} />
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              <span>Ready to Begin Your Journey?</span>
            </div>
            
            <h2 className="headline-secondary text-3xl lg:text-5xl font-bold mb-6">
              Let's Craft Your Dream Space Together
            </h2>
            
            <p className="body-primary text-xl opacity-90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Experience the difference that Danish craftsmanship and cultural understanding 
              can make in your home. Your transformation journey begins with a conversation.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                variant="secondary"
                size="lg"
                onClick={handleConsultationClick}
                className="bg-white text-brand-primary hover:bg-white/90 font-semibold px-8 py-4 shadow-elevated"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Free Consultation
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleGalleryClick}
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4"
                iconName="Image"
                iconPosition="left"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods?.map((method, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors duration-medium">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={method?.icon} size={24} />
                </div>
                <h3 className="font-semibold mb-2">{method?.title}</h3>
                <p className="font-medium text-conversion-accent mb-1">{method?.detail}</p>
                <p className="text-sm opacity-80">{method?.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-white/20 pt-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">37+</div>
                <p className="text-sm opacity-80">Years of Danish Craftsmanship</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <p className="text-sm opacity-80">Successful Transformations</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <p className="text-sm opacity-80">Client Satisfaction Guarantee</p>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name="Heart" size={24} className="text-conversion-accent" />
              <h3 className="text-xl font-semibold">Our Promise</h3>
            </div>
            <p className="text-lg opacity-90 leading-relaxed">
              Every project begins with understanding your vision and ends with a space that 
              embodies the warmth, quality, and timeless beauty of Danish design. Let's create 
              something extraordinary together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;