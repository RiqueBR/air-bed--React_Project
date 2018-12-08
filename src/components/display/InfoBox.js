import React from 'react';
import './display.css';
import PropertyBox from './property/PropertyBox';
import ExperienceBox from './experience/ExperienceBox'


const InfoBox = (props) => {
  return(
    <div className="info-box">
      <PropertyBox />
      <ExperienceBox />
    </div>
  )
}

export default InfoBox;
