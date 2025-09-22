import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MaterialShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('wood');

  const materialCategories = {
    wood: {
      title: 'Danish Wood Heritage',
      description: 'Sustainably sourced Nordic woods that bring warmth and character to every space.',
      materials: [
        {
          name: 'Danish Oak',
          description: 'Classic choice for flooring and cabinetry with beautiful grain patterns',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          properties: ['Durable', 'Timeless', 'Natural finish'],
          applications: ['Flooring', 'Cabinetry', 'Furniture']
        },
        {
          name: 'Scandinavian Pine',
          description: 'Light, versatile wood perfect for creating bright, airy spaces',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          properties: ['Light tone', 'Cost-effective', 'Easy to work'],
          applications: ['Paneling', 'Trim', 'Structural elements']
        },
        {
          name: 'Beech Hardwood',
          description: 'Strong, smooth wood ideal for high-traffic areas and detailed work',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          properties: ['High durability', 'Smooth finish', 'Stain-friendly'],
          applications: ['Countertops', 'Stairs', 'Built-ins']
        }
      ]
    },
    stone: {
      title: 'Natural Stone Selection',
      description: 'Premium stones that add elegance and durability to kitchens and bathrooms.',
      materials: [
        {
          name: 'Carrara Marble',
          description: 'Timeless elegance with distinctive veining for luxury applications',
          image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          properties: ['Elegant veining', 'Heat resistant', 'Unique patterns'],
          applications: ['Countertops', 'Backsplashes', 'Bathroom vanities']
        },
        {
          name: 'Danish Granite',
          description: 'Local granite with exceptional durability and natural beauty',
          image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          properties: ['Extremely durable', 'Low maintenance', 'Local sourcing'],
          applications: ['Kitchen islands', 'Flooring', 'Exterior elements']
        },
        {
          name: 'Limestone Tiles',
          description: 'Soft, natural texture perfect for creating serene bathroom environments',
          image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          properties: ['Natural texture', 'Non-slip surface', 'Thermal mass'],
          applications: ['Bathroom floors', 'Shower walls', 'Feature walls']
        }
      ]
    },
    sustainable: {
      title: 'Sustainable Solutions',
      description: 'Eco-friendly materials that support both environmental responsibility and design excellence.',
      materials: [
        {
          name: 'Recycled Glass Surfaces',
          description: 'Beautiful, durable surfaces made from recycled materials',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          properties: ['100% recycled', 'Non-porous', 'Unique patterns'],
          applications: ['Countertops', 'Backsplashes', 'Decorative panels']
        },
        {
          name: 'Cork Flooring',
          description: 'Renewable, comfortable flooring with natural antimicrobial properties',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          properties: ['Renewable resource', 'Comfortable underfoot', 'Natural antimicrobial'],
          applications: ['Flooring', 'Wall panels', 'Insulation']
        },
        {
          name: 'Bamboo Composites',
          description: 'Fast-growing bamboo processed into durable building materials',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          properties: ['Rapid growth', 'High strength', 'Carbon negative'],
          applications: ['Cabinetry', 'Flooring', 'Structural elements']
        }
      ]
    }
  };

  const categories = [
    { id: 'wood', name: 'Wood Heritage', icon: 'TreePine' },
    { id: 'stone', name: 'Natural Stone', icon: 'Mountain' },
    { id: 'sustainable', name: 'Sustainable', icon: 'Leaf' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="headline-secondary text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Materials, Thoughtful Selection
          </h2>
          <p className="body-primary text-xl text-muted-foreground">
            Every material we use is carefully selected for its quality, sustainability, and ability to enhance the Danish design aesthetic. From traditional woods to innovative sustainable solutions.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-medium ${
                activeCategory === category?.id
                  ? 'bg-brand-primary text-primary-foreground shadow-card'
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span className="font-headlines font-medium">{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="space-y-8">
          {/* Category Header */}
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="headline-secondary text-2xl font-bold text-foreground mb-4">
              {materialCategories?.[activeCategory]?.title}
            </h3>
            <p className="body-primary text-muted-foreground">
              {materialCategories?.[activeCategory]?.description}
            </p>
          </div>

          {/* Materials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materialCategories?.[activeCategory]?.materials?.map((material, index) => (
              <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-medium group">
                {/* Material Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={material?.image}
                    alt={`${material?.name} material sample showcasing texture and quality`}
                    className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-medium" />
                </div>

                {/* Material Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="headline-secondary text-xl font-bold text-foreground mb-2">
                      {material?.name}
                    </h4>
                    <p className="body-secondary text-muted-foreground">
                      {material?.description}
                    </p>
                  </div>

                  {/* Properties */}
                  <div>
                    <h5 className="font-headlines font-semibold text-foreground mb-2">
                      Key Properties:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {material?.properties?.map((property, propIndex) => (
                        <span
                          key={propIndex}
                          className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium"
                        >
                          {property}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h5 className="font-headlines font-semibold text-foreground mb-2">
                      Best Applications:
                    </h5>
                    <div className="space-y-1">
                      {material?.applications?.map((application, appIndex) => (
                        <div key={appIndex} className="flex items-center space-x-2">
                          <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                          <span className="body-secondary text-sm text-foreground">
                            {application}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Material Sourcing Info */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-card">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="MapPin" size={24} className="text-brand-primary" />
              </div>
              <h4 className="font-headlines font-bold text-lg text-foreground">Local Sourcing</h4>
              <p className="body-secondary text-muted-foreground">
                Priority given to Danish and Nordic suppliers to support local economy and reduce environmental impact.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Leaf" size={24} className="text-success" />
              </div>
              <h4 className="font-headlines font-bold text-lg text-foreground">Sustainability</h4>
              <p className="body-secondary text-muted-foreground">
                All materials meet strict environmental standards with certifications for responsible sourcing.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-conversion-accent/10 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Award" size={24} className="text-conversion-accent" />
              </div>
              <h4 className="font-headlines font-bold text-lg text-foreground">Quality Assured</h4>
              <p className="body-secondary text-muted-foreground">
                Every material comes with quality guarantees and proper documentation for long-term value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialShowcase;