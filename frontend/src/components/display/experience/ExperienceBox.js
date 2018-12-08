import React from 'react';
import './experience.css';
import ExperienceList from './ExperienceList';

const ExperienceBox = (props) => {
  return(
    <div className="experience-box">
      <h1>Experiences in New York</h1>
      <ExperienceList />
    </div>
  )
}

export default ExperienceBox;
