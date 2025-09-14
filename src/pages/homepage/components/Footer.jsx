import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Kitchen Renovations", href: "/service-specializations" },
        { name: "Bathroom Transformations", href: "/service-specializations" },
        { name: "Living Space Design", href: "/service-specializations" },
        { name: "Whole Home Renovations", href: "/service-specializations" },
        { name: "Design Consultations", href: "/consultation-journey" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Our Craft", href: "/about-our-craft" },
        { name: "Our Philosophy", href: "/craft-process-philosophy" },
        { name: "Project Gallery", href: "/project-transformations-gallery" },
        { name: "Client Stories", href: "/project-transformations-gallery" },
        { name: "Consultation Process", href: "/consultation-journey" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Design Inspiration", href: "/project-transformations-gallery" },
        { name: "Danish Design Guide", href: "/craft-process-philosophy" },
        { name: "Renovation Timeline", href: "/craft-process-philosophy" },
        { name: "Investment Planning", href: "/consultation-journey" },
        { name: "Maintenance Tips", href: "/about-our-craft" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" },
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "Pinterest", icon: "Image", href: "#" }
  ];

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand-primary"
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
      <div className="flex flex-col">
        <span className="font-headlines font-semibold text-lg text-foreground leading-tight">
          Aarhus Contractor
        </span>
        <span className="font-body text-xs text-muted-foreground leading-tight">
          Danish Craftsmanship
        </span>
      </div>
    </div>
  );

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo />
            
            <p className="body-secondary text-muted-foreground max-w-md">
              Transforming Aarhus homes through thoughtful renovation and authentic 
              Danish design principles. Where craftsmanship meets hygge.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-brand-primary" />
                <span className="text-sm text-muted-foreground">
                  Risskov, 8240 Aarhus, Denmark
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-brand-primary" />
                <span className="text-sm text-muted-foreground">
                  +45 XX XX XX XX
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-brand-primary" />
                <span className="text-sm text-muted-foreground">
                  hello@aarhuscontractor.dk
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-brand-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section) => (
            <div key={section?.title} className="space-y-4">
              <h3 className="font-headlines font-semibold text-foreground">
                {section?.title}
              </h3>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    <a
                      href={link?.href}
                      className="text-sm text-muted-foreground hover:text-brand-primary transition-colors duration-200"
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="headline-secondary text-xl font-bold text-foreground">
                Danish Design Inspiration
              </h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to receive seasonal design tips, project showcases, and 
                exclusive insights into Danish renovation philosophy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200"
                />
              </div>
              <Button
                variant="default"
                className="bg-brand-primary hover:bg-conversion-accent text-primary-foreground font-cta font-medium px-6 py-3"
                iconName="Send"
                iconPosition="right"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Aarhus Contractor. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-xs text-muted-foreground hover:text-brand-primary transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-xs text-muted-foreground hover:text-brand-primary transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-xs text-muted-foreground hover:text-brand-primary transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="text-xs text-muted-foreground">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-conversion-accent" />
                <span className="text-xs text-muted-foreground">Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;