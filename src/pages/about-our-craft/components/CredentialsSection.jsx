import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CredentialsSection = () => {
  const certifications = [
    {
      title: "Danish Master Craftsman Certification",
      issuer: "Danish Craftsmen\'s Association",
      year: "1995",
      description: "Highest level of craftsmanship recognition in Denmark, requiring extensive training and demonstration of traditional techniques.",
      icon: "Award",
      color: "bg-brand-primary"
    },
    {
      title: "Heritage Building Restoration Specialist",
      issuer: "Danish National Museum",
      year: "2001",
      description: "Specialized certification for working on historically significant buildings and maintaining architectural integrity.",
      icon: "Building",
      color: "bg-brand-secondary"
    },
    {
      title: "Sustainable Building Practices Certification",
      issuer: "Green Building Council Denmark",
      year: "2018",
      description: "Advanced training in eco-friendly construction methods and sustainable material selection.",
      icon: "Leaf",
      color: "bg-success"
    },
    {
      title: "Quality Management System ISO 9001",
      issuer: "International Organization for Standardization",
      year: "2020",
      description: "International standard ensuring consistent quality management and customer satisfaction.",
      icon: "CheckCircle",
      color: "bg-conversion-accent"
    }
  ];

  const insuranceDetails = [
    {
      type: "Professional Liability Insurance",
      coverage: "5,000,000 DKK",
      provider: "Tryg Insurance",
      description: "Comprehensive coverage for professional services and workmanship quality",
      icon: "Shield"
    },
    {
      type: "General Liability Insurance",
      coverage: "10,000,000 DKK",
      provider: "Alm. Brand Insurance",
      description: "Protection against property damage and third-party injury claims",
      icon: "Home"
    },
    {
      type: "Workers\' Compensation",
      coverage: "Full Coverage",
      provider: "Danish Workers\' Insurance",
      description: "Complete protection for all team members during project work",
      icon: "Users"
    },
    {
      type: "Equipment & Tools Insurance",
      coverage: "2,000,000 DKK",
      provider: "Codan Insurance",
      description: "Coverage for specialized tools and equipment used in craftsmanship",
      icon: "Wrench"
    }
  ];

  const memberships = [
    {
      organization: "Danish Craftsmen\'s Association",
      role: "Master Member",
      since: "1995",
      benefits: "Access to traditional technique workshops and quality standards updates"
    },
    {
      organization: "Aarhus Chamber of Commerce",
      role: "Active Member",
      since: "2003",
      benefits: "Local business network and community development participation"
    },
    {
      organization: "Green Building Council Denmark",
      role: "Certified Professional",
      since: "2018",
      benefits: "Latest sustainable building practices and material innovations"
    },
    {
      organization: "Danish Design Society",
      role: "Contributing Member",
      since: "2010",
      benefits: "Design trend insights and cultural heritage preservation initiatives"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="headline-secondary text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Credentials & Commitments
          </h2>
          <p className="body-primary text-lg text-muted-foreground max-w-3xl mx-auto">
            Our certifications represent more than qualifications—they're commitments to Danish 
            construction standards, sustainable practices, and unwavering quality in every project.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {certifications?.map((cert, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-medium">
              <div className="flex items-start space-x-6">
                <div className={`flex-shrink-0 w-16 h-16 ${cert?.color} rounded-full flex items-center justify-center`}>
                  <Icon name={cert?.icon} size={28} className="text-white" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{cert?.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{cert?.issuer}</span>
                      <span>•</span>
                      <span>{cert?.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{cert?.description}</p>
                  
                  <div className="flex items-center space-x-2 text-sm text-brand-primary">
                    <Icon name="ExternalLink" size={16} />
                    <span>Verification Available</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Insurance Coverage */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card mb-16">
          <div className="text-center mb-12">
            <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Comprehensive Insurance Coverage
            </h3>
            <p className="body-primary text-muted-foreground">
              Your peace of mind is our priority. We maintain extensive insurance coverage 
              to protect both your property and our team throughout every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {insuranceDetails?.map((insurance, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={insurance?.icon} size={24} className="text-brand-primary" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <h4 className="font-semibold text-foreground">{insurance?.type}</h4>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-brand-primary font-medium">{insurance?.coverage}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{insurance?.provider}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{insurance?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-brand-primary/5 rounded-xl border border-brand-primary/20">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name="Info" size={20} className="text-brand-primary" />
              <h4 className="font-semibold text-foreground">Insurance Verification</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              All insurance certificates are available for review upon request. We provide 
              certificate of insurance for every project, ensuring you have complete documentation 
              for your records and additional protection.
            </p>
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Professional Memberships
            </h3>
            
            <div className="space-y-6">
              {memberships?.map((membership, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-subtle">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{membership?.organization}</h4>
                    <span className="text-sm text-brand-primary font-medium">{membership?.since}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">{membership?.role}</p>
                  <p className="text-sm text-foreground leading-relaxed">{membership?.benefits}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=500&fit=crop"
                alt="Danish craftsmanship certificates and awards displayed in workshop"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Quality Guarantee Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-primary text-primary-foreground p-6 rounded-xl shadow-elevated">
              <div className="text-center">
                <Icon name="Award" size={32} className="mx-auto mb-2" />
                <p className="font-bold text-sm">Quality Guarantee</p>
                <p className="text-xs opacity-90">Danish Standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-20 text-center">
          <div className="bg-muted p-8 lg:p-12 rounded-2xl max-w-4xl mx-auto">
            <Icon name="Heart" size={48} className="text-brand-primary mx-auto mb-6" />
            <h3 className="headline-secondary text-2xl font-bold text-foreground mb-4">
              Our Promise to You
            </h3>
            <p className="body-primary text-lg text-muted-foreground leading-relaxed">
              These credentials represent our commitment to excellence, but our true measure 
              is the trust our clients place in us. Every certification, every insurance policy, 
              every membership is maintained not just for compliance, but as a promise that 
              your project will receive the highest standard of Danish craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;