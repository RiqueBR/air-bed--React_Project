import React from 'react';
import './display.css';
import PropertyBox from './property/PropertyBox';
import ExperienceBox from './experience/ExperienceBox'


const InfoBox = ({data}) => {
  if(!data) return null;
  console.log(data);
  return(
    <div className="info-box">
      <PropertyBox data={data._embedded.properties}/>
      <ExperienceBox />
    </div>
  )
}

export default InfoBox;
