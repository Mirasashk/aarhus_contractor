import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Lars Andersen",
      role: "Master Craftsman & Founder",
      specialty: "Heritage Restoration & Danish Design",
      experience: "37 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      story: "Started as apprentice in traditional Aarhus workshop. Passionate about preserving Danish craftsmanship while embracing modern innovation.",
      certifications: ["Danish Master Craftsman", "Heritage Restoration Specialist", "Sustainable Building Practices"],
      philosophy: "Every project should honor both tradition and the future."
    },
    {
      id: 2,
      name: "Mette Sørensen",
      role: "Design Director",
      specialty: "Interior Architecture & Hygge Principles",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      story: "Trained at Danish Design School, specializes in creating spaces that embody true hygge through thoughtful material selection and spatial flow.",
      certifications: ["Interior Architecture Degree", "Danish Design Institute", "Sustainable Materials Specialist"],
      philosophy: "A home should breathe with its inhabitants."
    },
    {
      id: 3,
      name: "Erik Nielsen",
      role: "Master Carpenter",
      specialty: "Custom Millwork & Cabinetry",
      experience: "22 years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      story: "Third-generation carpenter who combines traditional joinery techniques with precision modern tools. Creates bespoke furniture and built-ins.",
      certifications: ["Master Carpenter Certification", "Traditional Joinery Specialist", "Custom Furniture Design"],
      philosophy: "Wood has memory—we help it remember its purpose."
    },
    {
      id: 4,
      name: "Anna Kristensen",
      role: "Project Coordinator",
      specialty: "Client Relations & Quality Assurance",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      story: "Ensures every project reflects our commitment to Danish quality standards while maintaining clear communication throughout the renovation journey.",
      certifications: ["Project Management Professional", "Quality Assurance Specialist", "Client Relations Excellence"],
      philosophy: "Trust is built through transparency and consistency."
    },
    {
      id: 5,
      name: "Thomas Larsen",
      role: "Sustainability Specialist",
      specialty: "Eco-Friendly Materials & Energy Efficiency",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      story: "Environmental engineer turned craftsman, dedicated to proving that sustainable practices enhance rather than compromise Danish quality standards.",
      certifications: ["Environmental Engineering", "Green Building Certification", "Energy Efficiency Specialist"],
      philosophy: "Sustainability and beauty are not opposites—they\'re partners."
    },
    {
      id: 6,
      name: "Sofie Andersen",
      role: "Apprentice Craftsperson",
      specialty: "Traditional Techniques & Modern Applications",
      experience: "3 years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      story: "Represents the next generation of Danish craftspeople, learning traditional methods while bringing fresh perspectives on contemporary design integration.",
      certifications: ["Carpentry Apprenticeship", "Danish Design Fundamentals", "Modern Tool Certification"],
      philosophy: "Tradition teaches us, innovation inspires us."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="headline-secondary text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Meet Our Craftspeople
          </h2>
          <p className="body-primary text-lg text-muted-foreground max-w-3xl mx-auto">
            Each member of our team brings unique expertise and passion for Danish craftsmanship. 
            Together, we create spaces that honor tradition while embracing innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers?.map((member) => (
            <div key={member?.id} className="group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-medium gentle-hover">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={member?.image}
                    alt={`${member?.name} - ${member?.role} at Aarhus Contractor`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-medium"
                  />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-brand-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {member?.experience}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{member?.name}</h3>
                    <p className="text-brand-primary font-medium mb-2">{member?.role}</p>
                    <p className="text-sm text-muted-foreground">{member?.specialty}</p>
                  </div>

                  <p className="text-sm text-foreground leading-relaxed">{member?.story}</p>

                  {/* Philosophy Quote */}
                  <div className="bg-muted p-4 rounded-lg border-l-3 border-brand-primary">
                    <p className="accent-text text-sm text-brand-primary italic">
                      "{member?.philosophy}"
                    </p>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide">Certifications</p>
                    <div className="flex flex-wrap gap-2">
                      {member?.certifications?.map((cert, index) => (
                        <span
                          key={index}
                          className="text-xs bg-brand-secondary/20 text-brand-primary px-2 py-1 rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Values */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
          <div className="text-center mb-12">
            <h3 className="headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Our Shared Values
            </h3>
            <p className="body-primary text-muted-foreground">
              What unites us as craftspeople and guides every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Heart",
                title: "Passion for Craft",
                description: "Every project is an opportunity to create something meaningful and lasting"
              },
              {
                icon: "Users",
                title: "Client Partnership",
                description: "We build relationships, not just renovations, through trust and transparency"
              },
              {
                icon: "Leaf",
                title: "Sustainable Future",
                description: "Responsible practices that honor both environment and Danish quality standards"
              },
              {
                icon: "Award",
                title: "Excellence Always",
                description: "Continuous learning and improvement in both traditional and modern techniques"
              }
            ]?.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name={value?.icon} size={28} className="text-brand-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">{value?.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;