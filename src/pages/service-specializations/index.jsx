import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceOverview from './components/ServiceOverview';
import ProcessMethodology from './components/ProcessMethodology';
import MaterialShowcase from './components/MaterialShowcase';
import CaseStudyShowcase from './components/CaseStudyShowcase';
import InvestmentGuide from './components/InvestmentGuide';
import ConsultationCTA from './components/ConsultationCTA';

const ServiceSpecializations = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Service Specializations - Aarhus Contractor | Danish Craftsmanship';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Specialized Danish renovation services including Kitchen Mastery, Bathroom Sanctuaries, and Living Space Optimization. Premium craftsmanship with transparent investment levels.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <ServiceHero />
        
        {/* Service Overview */}
        <ServiceOverview />
        
        {/* Process Methodology */}
        <ProcessMethodology />
        
        {/* Material Showcase */}
        <MaterialShowcase />
        
        {/* Case Study Showcase */}
        <CaseStudyShowcase />
        
        {/* Investment Guide */}
        <InvestmentGuide />
        
        {/* Consultation CTA */}
        <ConsultationCTA />
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-background"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="36"
                      height="36"
                      rx="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M12 16L20 12L28 16V28C28 29.1046 27.1046 30 26 30H14C12.8954 30 12 29.1046 12 28V16Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M12 16L20 12L28 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V28C12 29.1046 12.8954 30 14 30H26C27.1046 30 28 29.1046 28 28V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 22H24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-headlines font-semibold text-lg">Aarhus Contractor</div>
                  <div className="font-body text-sm opacity-80">Danish Craftsmanship</div>
                </div>
              </div>
              <p className="body-secondary text-sm opacity-80">
                Transforming homes through Danish design principles and exceptional craftsmanship since 2008.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-headlines font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2 body-secondary text-sm">
                <li><a href="/service-specializations" className="opacity-80 hover:opacity-100 transition-opacity">Kitchen Mastery</a></li>
                <li><a href="/service-specializations" className="opacity-80 hover:opacity-100 transition-opacity">Bathroom Sanctuaries</a></li>
                <li><a href="/service-specializations" className="opacity-80 hover:opacity-100 transition-opacity">Living Space Optimization</a></li>
                <li><a href="/consultation-journey" className="opacity-80 hover:opacity-100 transition-opacity">Design Consultation</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-headlines font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2 body-secondary text-sm">
                <li><a href="/about-our-craft" className="opacity-80 hover:opacity-100 transition-opacity">About Our Craft</a></li>
                <li><a href="/craft-process-philosophy" className="opacity-80 hover:opacity-100 transition-opacity">Our Process</a></li>
                <li><a href="/project-transformations-gallery" className="opacity-80 hover:opacity-100 transition-opacity">Portfolio</a></li>
                <li><a href="/consultation-journey" className="opacity-80 hover:opacity-100 transition-opacity">Careers</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-headlines font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-3 body-secondary text-sm">
                <div className="opacity-80">
                  <div>Åboulevarden 23</div>
                  <div>8000 Aarhus C, Denmark</div>
                </div>
                <div className="opacity-80">
                  <div>+45 87 32 10 50</div>
                  <div>hello@aarhuscontractor.dk</div>
                </div>
                <div className="opacity-80">
                  <div>Mon-Fri: 8:00-17:00</div>
                  <div>Sat: 9:00-15:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="body-secondary text-sm opacity-80">
              © {new Date()?.getFullYear()} Aarhus Contractor. All rights reserved.
            </div>
            <div className="flex space-x-6 body-secondary text-sm">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServiceSpecializations;