import React from 'react';
import './experience.css';
import ExperienceList from './ExperienceList';

const ExperienceBox = ({data}) => {
  return(
    <div className="property-box">
      <h1 className="property-list-title">Experiences in {data[0].location}</h1>
      <ExperienceList data={data}/>
    </div>
  )
}

export default ExperienceBox;
