import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudyShowcase = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 'kitchen-aarhus',
      title: 'Modern Danish Kitchen Transformation',
      location: 'Aarhus C, Denmark',
      service: 'Kitchen Mastery',
      timeline: '8 weeks',
      investment: '285,000 DKK',
      challenge: `A 1970s kitchen that felt disconnected from the home's character and modern family needs. Limited natural light and inefficient layout made cooking and gathering difficult.`,
      solution: `Complete redesign incorporating Danish design principles with natural oak cabinetry, integrated appliances, and a central island that became the heart of family life. Strategic lighting design enhanced both function and ambiance.`,
      results: [
        '40% increase in natural light through strategic window placement','Doubled storage capacity with custom Danish oak solutions','Created seamless flow between kitchen and dining areas','Integrated smart home technology for modern convenience'
      ],
      beforeImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      clientQuote: `"The transformation exceeded our expectations. Our kitchen is now the heart of our home, where family and friends naturally gather. The Danish design elements feel both timeless and perfectly suited to our lifestyle."`,
      clientName: 'Lars & Mette Hansen',
      features: ['Custom oak cabinetry', 'Integrated appliances', 'Smart lighting system', 'Natural stone countertops']
    },
    {
      id: 'bathroom-viby',title: 'Spa-Inspired Bathroom Sanctuary',location: 'Viby J, Denmark',service: 'Bathroom Sanctuaries',timeline: '6 weeks',investment: '165,000 DKK',
      challenge: `Small, outdated bathroom with poor ventilation and limited storage. The space felt cramped and lacked the relaxing atmosphere the homeowners desired for their daily routines.`,
      solution: `Complete renovation focusing on creating a spa-like atmosphere with natural materials, improved lighting, and clever storage solutions. Heated floors and premium fixtures enhanced the wellness experience.`,
      results: [
        'Maximized space efficiency with wall-mounted fixtures','Improved ventilation and moisture control systems','Created luxurious spa atmosphere with natural materials','Added heated flooring for year-round comfort'
      ],
      beforeImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',afterImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      clientQuote: `"Every morning feels like visiting a luxury spa. The attention to detail and quality of materials has transformed our daily routine into a moment of relaxation and self-care."`,
      clientName: 'Anna Kristensen',
      features: ['Natural stone tiles', 'Heated flooring', 'Premium fixtures', 'Smart ventilation']
    },
    {
      id: 'living-risskov',title: 'Heritage Home Living Space Optimization',location: 'Risskov, Denmark',service: 'Living Space Optimization',timeline: '12 weeks',investment: '425,000 DKK',
      challenge: `Beautiful 1920s home with compartmentalized rooms that didn't suit modern family life. Original character needed preservation while creating open, functional spaces for contemporary living.`,
      solution: `Careful removal of non-structural walls to create open-plan living while preserving original architectural details. Modern amenities integrated seamlessly with period features.`,
      results: [
        'Created open-plan living while preserving character',
        'Restored original hardwood floors and moldings',
        'Integrated modern heating and electrical systems',
        'Improved natural light flow throughout spaces'
      ],
      beforeImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      afterImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      clientQuote: `"They perfectly balanced our desire for modern living with respect for our home's heritage. The space now flows beautifully while maintaining the character we fell in love with."`,
      clientName: 'Thomas & Inge Møller',
      features: ['Heritage preservation', 'Open-plan conversion', 'Modern systems integration', 'Original detail restoration']
    }
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies?.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies?.length) % caseStudies?.length);
  };

  const currentCase = caseStudies?.[activeCase];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="headline-secondary text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Transformation Stories
          </h2>
          <p className="body-primary text-xl text-muted-foreground">
            Real projects, real results. See how our Danish craftsmanship approach transforms spaces and enhances daily life for families throughout Aarhus.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-background rounded-xl p-2 shadow-card">
            {caseStudies?.map((study, index) => (
              <button
                key={study?.id}
                onClick={() => setActiveCase(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-medium ${
                  activeCase === index
                    ? 'bg-brand-primary text-primary-foreground shadow-subtle'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {study?.service}
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Study */}
        <div className="bg-background rounded-2xl shadow-elevated overflow-hidden">
          {/* Case Header */}
          <div className="p-8 border-b border-border">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Home" size={24} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="headline-secondary text-2xl font-bold text-foreground">
                      {currentCase?.title}
                    </h3>
                    <p className="body-secondary text-brand-primary font-medium">
                      {currentCase?.location}
                    </p>
                  </div>
                </div>
                
                <p className="body-primary text-muted-foreground">
                  {currentCase?.challenge}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-4 text-center">
                  <Icon name="Clock" size={20} className="text-brand-primary mx-auto mb-2" />
                  <div className="font-headlines font-bold text-lg text-foreground">{currentCase?.timeline}</div>
                  <div className="body-secondary text-xs text-muted-foreground">Timeline</div>
                </div>
                <div className="bg-card rounded-lg p-4 text-center">
                  <Icon name="Banknote" size={20} className="text-brand-primary mx-auto mb-2" />
                  <div className="font-headlines font-bold text-lg text-foreground">{currentCase?.investment}</div>
                  <div className="body-secondary text-xs text-muted-foreground">Investment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Images */}
          <div className="grid md:grid-cols-2">
            {/* Before */}
            <div className="relative">
              <Image
                src={currentCase?.beforeImage}
                alt={`Before renovation of ${currentCase?.title}`}
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                Before
              </div>
            </div>

            {/* After */}
            <div className="relative">
              <Image
                src={currentCase?.afterImage}
                alt={`After renovation of ${currentCase?.title}`}
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                After
              </div>
            </div>
          </div>

          {/* Case Content */}
          <div className="p-8 space-y-8">
            {/* Solution */}
            <div>
              <h4 className="headline-secondary text-xl font-bold text-foreground mb-4">
                Our Solution
              </h4>
              <p className="body-primary text-muted-foreground">
                {currentCase?.solution}
              </p>
            </div>

            {/* Results & Features */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Results */}
              <div>
                <h4 className="headline-secondary text-xl font-bold text-foreground mb-4">
                  Measurable Results
                </h4>
                <div className="space-y-3">
                  {currentCase?.results?.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="TrendingUp" size={16} className="text-success mt-1 flex-shrink-0" />
                      <span className="body-secondary text-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="headline-secondary text-xl font-bold text-foreground mb-4">
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentCase?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                      <span className="body-secondary text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-card rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <Icon name="Quote" size={24} className="text-brand-primary flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <p className="accent-text text-lg text-foreground italic">
                    {currentCase?.clientQuote}
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} className="text-brand-primary" />
                    </div>
                    <div>
                      <div className="font-headlines font-semibold text-foreground">
                        {currentCase?.clientName}
                      </div>
                      <div className="body-secondary text-sm text-muted-foreground">
                        Verified Client
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <Button
            variant="outline"
            onClick={prevCase}
            iconName="ChevronLeft"
            iconPosition="left"
            className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground"
          >
            Previous
          </Button>
          
          <div className="flex space-x-2">
            {caseStudies?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`w-3 h-3 rounded-full transition-all duration-medium ${
                  activeCase === index ? 'bg-brand-primary' : 'bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            onClick={nextCase}
            iconName="ChevronRight"
            iconPosition="right"
            className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground"
          >
            Next
          </Button>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="headline-secondary text-2xl font-bold text-foreground">
              Ready to Transform Your Space?
            </h3>
            <p className="body-primary text-muted-foreground">
              Every project begins with understanding your vision and lifestyle needs. Schedule a consultation to explore how Danish craftsmanship can enhance your home.
            </p>
            <Button
              variant="default"
              className="bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground px-8 py-4 text-lg"
              iconName="Calendar"
              iconPosition="left"
              onClick={() => window.location.href = '/consultation-journey'}
            >
              Schedule Your Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;