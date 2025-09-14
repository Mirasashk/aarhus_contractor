import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FounderStory from './components/FounderStory';
import TeamSection from './components/TeamSection';
import CraftPhilosophy from './components/CraftPhilosophy';
import CredentialsSection from './components/CredentialsSection';
import WhyAarhusSection from './components/WhyAarhusSection';
import CallToAction from './components/CallToAction';

const AboutOurCraft = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About Our Craft - Aarhus Contractor | Danish Heritage & Modern Expertise';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Discover the story behind Aarhus Contractor - from traditional Danish carpentry apprenticeship to contemporary renovation mastery. Meet our team of craftspeople who blend cultural heritage with modern expertise.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section - Personal brand story introduction */}
        <HeroSection />
        
        {/* Founder Story - Journey from apprenticeship to mastery */}
        <FounderStory />
        
        {/* Team Section - Individual craftsmen and their specialties */}
        <TeamSection />
        
        {/* Craft Philosophy - Daily practices and values */}
        <CraftPhilosophy />
        
        {/* Credentials Section - Certifications and commitments */}
        <CredentialsSection />
        
        {/* Why Aarhus Section - Local knowledge and community connection */}
        <WhyAarhusSection />
        
        {/* Call to Action - Begin consultation journey */}
        <CallToAction />
      </main>
    </div>
  );
};

export default AboutOurCraft;