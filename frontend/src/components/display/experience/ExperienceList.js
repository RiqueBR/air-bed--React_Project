import React from 'react';
import ExperienceTile from './ExperienceTile';

const ExperienceTileBox = ({ data }) => {
  if (!data) return null;

  const experiences = data.map((experience, index) => {
    return (
      <ExperienceTile key={index} data={experience} />
    )
  })

  return (
    <div className="property-list">
      {experiences}
    </div>
  )
}

export default ExperienceTileBox;
