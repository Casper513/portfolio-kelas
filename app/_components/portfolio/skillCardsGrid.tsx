import React from 'react';
import SkillCard, { SkillCardProps } from './SkillCard';

interface SkillCardsGridProps {
  data: SkillCardProps[];
}

const SkillCardsGrid: React.FC<SkillCardsGridProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((item, index) => (
        <SkillCard key={index} data={item} />
      ))}
    </div>
  );
};

export default SkillCardsGrid;
