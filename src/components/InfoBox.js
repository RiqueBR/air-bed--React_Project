import React from 'react';
import './display.css';
import PropertyBox from './property/PropertyBox';
import ExperienceBox from './experience/ExperienceBox'

const InfoBox = (props) => {
  if (!props) return null;

  return (
      <div className="info-box">
          <PropertyBox data={ props.data._embedded.properties } />
          <ExperienceBox data={ props.experience._embedded.experiences } />
      </div>
  )
}

export default InfoBox;
