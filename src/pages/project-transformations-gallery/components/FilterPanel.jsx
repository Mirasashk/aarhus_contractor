import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const FilterPanel = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onToggle,
  projectCount 
}) => {
  const spaceTypeOptions = [
    { value: 'all', label: 'All Spaces' },
    { value: 'kitchen', label: 'Kitchen' },
    { value: 'bathroom', label: 'Bathroom' },
    { value: 'living', label: 'Living Areas' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'exterior', label: 'Exterior' },
    { value: 'whole-home', label: 'Whole Home' }
  ];

  const styleOptions = [
    { value: 'all', label: 'All Styles' },
    { value: 'modern-danish', label: 'Modern Danish' },
    { value: 'heritage-restoration', label: 'Heritage Restoration' },
    { value: 'contemporary-hygge', label: 'Contemporary Hygge' },
    { value: 'minimalist', label: 'Minimalist' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'traditional', label: 'Traditional' }
  ];

  const scopeOptions = [
    { value: 'all', label: 'All Scopes' },
    { value: 'complete-renovation', label: 'Complete Renovation' },
    { value: 'targeted-updates', label: 'Targeted Updates' },
    { value: 'space-optimization', label: 'Space Optimization' },
    { value: 'restoration', label: 'Restoration' }
  ];

  const investmentOptions = [
    { value: 'all', label: 'All Budgets' },
    { value: '0-100000', label: 'Under 100,000 DKK' },
    { value: '100000-300000', label: '100,000 - 300,000 DKK' },
    { value: '300000-500000', label: '300,000 - 500,000 DKK' },
    { value: '500000-1000000', label: '500,000 - 1,000,000 DKK' },
    { value: '1000000+', label: 'Over 1,000,000 DKK' }
  ];

  const timelineOptions = [
    { value: 'all', label: 'All Timelines' },
    { value: '1-4', label: '1-4 weeks' },
    { value: '1-3', label: '1-3 months' },
    { value: '3-6', label: '3-6 months' },
    { value: '6+', label: '6+ months' }
  ];

  return (
    <div className="bg-card rounded-lg shadow-card">
      {/* Filter Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} className="text-brand-primary" />
          <h3 className="headline-secondary text-lg font-semibold text-foreground">
            Filter Projects
          </h3>
          <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs font-medium">
            {projectCount} projects
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="RotateCcw"
            iconPosition="left"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear All
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName={isOpen ? "ChevronUp" : "ChevronDown"}
            onClick={onToggle}
            className="lg:hidden"
          >
            {isOpen ? 'Hide' : 'Show'} Filters
          </Button>
        </div>
      </div>
      {/* Filter Content */}
      <div className={`transition-all duration-medium ${isOpen ? 'block' : 'hidden lg:block'}`}>
        <div className="p-6 space-y-6">
          {/* Space Type Filter */}
          <div>
            <Select
              label="Space Type"
              options={spaceTypeOptions}
              value={filters?.spaceType}
              onChange={(value) => onFilterChange('spaceType', value)}
              className="w-full"
            />
          </div>

          {/* Style Filter */}
          <div>
            <Select
              label="Design Style"
              options={styleOptions}
              value={filters?.style}
              onChange={(value) => onFilterChange('style', value)}
              className="w-full"
            />
          </div>

          {/* Scope Filter */}
          <div>
            <Select
              label="Project Scope"
              options={scopeOptions}
              value={filters?.scope}
              onChange={(value) => onFilterChange('scope', value)}
              className="w-full"
            />
          </div>

          {/* Investment Filter */}
          <div>
            <Select
              label="Investment Range"
              options={investmentOptions}
              value={filters?.investment}
              onChange={(value) => onFilterChange('investment', value)}
              className="w-full"
            />
          </div>

          {/* Timeline Filter */}
          <div>
            <Select
              label="Timeline"
              options={timelineOptions}
              value={filters?.timeline}
              onChange={(value) => onFilterChange('timeline', value)}
              className="w-full"
            />
          </div>

          {/* Special Features */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-3">Special Features</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters?.sustainable}
                  onChange={(e) => onFilterChange('sustainable', e?.target?.checked)}
                  className="rounded border-border text-brand-primary focus:ring-brand-primary"
                />
                <span className="text-sm text-foreground">Sustainable Materials</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters?.heritage}
                  onChange={(e) => onFilterChange('heritage', e?.target?.checked)}
                  className="rounded border-border text-brand-primary focus:ring-brand-primary"
                />
                <span className="text-sm text-foreground">Heritage Building</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters?.award}
                  onChange={(e) => onFilterChange('award', e?.target?.checked)}
                  className="rounded border-border text-brand-primary focus:ring-brand-primary"
                />
                <span className="text-sm text-foreground">Award Winning</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;