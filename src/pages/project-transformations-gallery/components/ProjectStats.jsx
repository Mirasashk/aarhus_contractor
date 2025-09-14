import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects, filteredProjects }) => {
  const calculateStats = () => {
    const totalProjects = filteredProjects?.length;
    const totalInvestment = filteredProjects?.reduce((sum, project) => 
      sum + ((project?.investment?.min + project?.investment?.max) / 2), 0
    );
    const avgInvestment = totalProjects > 0 ? totalInvestment / totalProjects : 0;
    
    const avgRating = filteredProjects?.reduce((sum, project) => 
      sum + project?.rating, 0
    ) / totalProjects || 0;

    const completedThisYear = filteredProjects?.filter(project => 
      project?.completedYear === new Date()?.getFullYear()
    )?.length;

    const sustainableProjects = filteredProjects?.filter(project => 
      project?.sustainable
    )?.length;

    return {
      totalProjects,
      avgInvestment,
      avgRating,
      completedThisYear,
      sustainableProjects,
      sustainablePercentage: totalProjects > 0 ? (sustainableProjects / totalProjects) * 100 : 0
    };
  };

  const stats = calculateStats();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'DKK',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const statItems = [
    {
      icon: 'Home',
      label: 'Total Projects',
      value: stats?.totalProjects?.toString(),
      color: 'text-brand-primary'
    },
    {
      icon: 'DollarSign',
      label: 'Avg Investment',
      value: formatCurrency(stats?.avgInvestment),
      color: 'text-conversion-accent'
    },
    {
      icon: 'Star',
      label: 'Avg Rating',
      value: stats?.avgRating?.toFixed(1),
      color: 'text-success'
    },
    {
      icon: 'Calendar',
      label: `Completed ${new Date()?.getFullYear()}`,
      value: stats?.completedThisYear?.toString(),
      color: 'text-brand-secondary'
    },
    {
      icon: 'Leaf',
      label: 'Sustainable',
      value: `${Math.round(stats?.sustainablePercentage)}%`,
      color: 'text-success'
    }
  ];

  return (
    <div className="bg-card rounded-lg shadow-card p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="BarChart3" size={20} className="text-brand-primary" />
        <h3 className="headline-secondary text-lg font-semibold text-foreground">
          Portfolio Overview
        </h3>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {statItems?.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-2">
              <div className={`p-3 rounded-full bg-muted ${stat?.color}`}>
                <Icon name={stat?.icon} size={20} />
              </div>
            </div>
            <div className={`text-2xl font-bold ${stat?.color} mb-1`}>
              {stat?.value}
            </div>
            <div className="text-xs text-muted-foreground">
              {stat?.label}
            </div>
          </div>
        ))}
      </div>
      {/* Additional Insights */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Most Popular Style</div>
            <div className="font-medium text-foreground">Modern Danish</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Avg Timeline</div>
            <div className="font-medium text-foreground">3-4 months</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Client Satisfaction</div>
            <div className="font-medium text-success">98%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;