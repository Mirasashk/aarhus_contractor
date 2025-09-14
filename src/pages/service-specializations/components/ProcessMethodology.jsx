import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessMethodology = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 'discovery',
      title: 'Discovery & Vision',
      duration: '1-2 weeks',
      description: `Deep understanding of your lifestyle, preferences, and space requirements. We explore how Danish design principles can enhance your daily routines and create lasting value.`,
      activities: [
        'Lifestyle assessment consultation',
        'Space functionality analysis',
        'Material preference exploration',
        'Budget and timeline alignment',
        'Danish design principle integration'
      ],
      icon: 'Search',
      color: 'text-brand-primary',
      bgColor: 'bg-brand-primary/10'
    },
    {
      id: 'design',
      title: 'Design Development',
      duration: '2-3 weeks',
      description: `Collaborative design process where your vision meets our Danish craftsmanship expertise. Every detail is considered to ensure both beauty and functionality.`,
      activities: [
        '3D visualization and planning',
        'Material selection and sourcing',
        'Technical specification development',
        'Permit and approval coordination',
        'Final design approval process'
      ],
      icon: 'PenTool',
      color: 'text-brand-secondary',
      bgColor: 'bg-brand-secondary/10'
    },
    {
      id: 'preparation',
      title: 'Preparation & Planning',
      duration: '1 week',
      description: `Meticulous preparation ensures smooth execution. We coordinate all aspects from material delivery to workspace preparation, minimizing disruption to your daily life.`,
      activities: [
        'Material procurement and delivery',
        'Workspace preparation and protection',
        'Team coordination and scheduling',
        'Quality control checkpoints setup',
        'Communication protocol establishment'
      ],
      icon: 'ClipboardList',
      color: 'text-conversion-accent',
      bgColor: 'bg-conversion-accent/10'
    },
    {
      id: 'execution',
      title: 'Crafted Execution',
      duration: 'Project specific',
      description: `Danish craftsmanship in action. Our skilled artisans bring your vision to life with attention to detail that reflects generations of building tradition.`,
      activities: [
        'Daily progress updates and photos',
        'Quality milestone inspections',
        'Real-time problem solving',
        'Cleanliness and respect maintenance',
        'Continuous communication'
      ],
      icon: 'Hammer',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      id: 'completion',
      title: 'Completion & Care',
      duration: '1 week',
      description: `Final inspections, care instructions, and ongoing support. Your satisfaction and long-term enjoyment of the space are our ultimate measures of success.`,
      activities: [
        'Final quality inspection walkthrough',
        'Care and maintenance guidance',
        'Warranty documentation provision',
        'Follow-up satisfaction check',
        'Ongoing support relationship'
      ],
      icon: 'CheckCircle',
      color: 'text-brand-primary',
      bgColor: 'bg-brand-primary/10'
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="headline-secondary text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Danish Methodology Applied
          </h2>
          <p className="body-primary text-xl text-muted-foreground">
            Our time-tested process ensures every project reflects the precision, quality, and thoughtfulness that defines Danish craftsmanship. Each phase builds upon the last to create exceptional results.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border" />

          {/* Phases */}
          <div className="space-y-12">
            {phases?.map((phase, index) => (
              <div
                key={phase?.id}
                className={`relative grid lg:grid-cols-2 gap-8 items-center cursor-pointer transition-all duration-medium ${
                  activePhase === index ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                }`}
                onClick={() => setActivePhase(index)}
              >
                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full border-4 border-background flex items-center justify-center transition-all duration-medium ${
                    activePhase === index ? phase?.bgColor : 'bg-muted'
                  }`}>
                    <Icon 
                      name={phase?.icon} 
                      size={24} 
                      className={activePhase === index ? phase?.color : 'text-muted-foreground'} 
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                  <div className={`bg-background rounded-2xl p-8 shadow-card transition-all duration-medium ${
                    activePhase === index ? 'shadow-elevated transform scale-105' : ''
                  }`}>
                    {/* Phase Header */}
                    <div className="flex items-center space-x-4 mb-4 lg:hidden">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        activePhase === index ? phase?.bgColor : 'bg-muted'
                      }`}>
                        <Icon 
                          name={phase?.icon} 
                          size={20} 
                          className={activePhase === index ? phase?.color : 'text-muted-foreground'} 
                        />
                      </div>
                      <div>
                        <h3 className="headline-secondary text-xl font-bold text-foreground">
                          {phase?.title}
                        </h3>
                        <p className="body-secondary text-sm text-brand-primary font-medium">
                          {phase?.duration}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Header */}
                    <div className="hidden lg:block mb-4">
                      <h3 className="headline-secondary text-2xl font-bold text-foreground mb-2">
                        {phase?.title}
                      </h3>
                      <p className="body-secondary text-sm text-brand-primary font-medium">
                        Duration: {phase?.duration}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="body-primary text-muted-foreground mb-6">
                      {phase?.description}
                    </p>

                    {/* Activities */}
                    <div className="space-y-3">
                      <h4 className="font-headlines font-semibold text-foreground">
                        Key Activities:
                      </h4>
                      <div className="space-y-2">
                        {phase?.activities?.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-start space-x-2">
                            <Icon name="ArrowRight" size={16} className={`mt-0.5 flex-shrink-0 ${phase?.color}`} />
                            <span className="body-secondary text-sm text-foreground">
                              {activity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase Number */}
                <div className={`${index % 2 === 0 ? 'lg:col-start-2 lg:pl-12' : 'lg:pr-12'} flex justify-center lg:justify-start`}>
                  <div className={`w-24 h-24 rounded-full border-2 flex items-center justify-center transition-all duration-medium ${
                    activePhase === index 
                      ? `border-brand-primary ${phase?.bgColor}` 
                      : 'border-border bg-muted'
                  }`}>
                    <span className={`font-headlines font-bold text-2xl transition-colors duration-medium ${
                      activePhase === index ? phase?.color : 'text-muted-foreground'
                    }`}>
                      {String(index + 1)?.padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Summary */}
        <div className="mt-16 bg-background rounded-2xl p-8 shadow-card">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="headline-secondary text-2xl font-bold text-foreground mb-4">
              Transparent Process, Exceptional Results
            </h3>
            <p className="body-primary text-muted-foreground mb-6">
              Every project follows this proven methodology, adapted to your specific needs and space requirements. Clear communication and quality checkpoints ensure your vision becomes reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-success" />
                <span className="font-headlines font-medium text-foreground">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} className="text-success" />
                <span className="font-headlines font-medium text-foreground">On-Time Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MessageCircle" size={20} className="text-success" />
                <span className="font-headlines font-medium text-foreground">Clear Communication</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessMethodology;