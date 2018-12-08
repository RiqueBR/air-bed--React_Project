import React from 'react';
import ExperienceTile from './ExperienceTile'

const ExperienceTileBox = (props) => {
  return(
    <div className="card-list">
    <h1>Experience List</h1>
    <ExperienceTile />
    <ExperienceTile />
    <ExperienceTile />
    <ExperienceTile />
    </div>
  )
}

export default ExperienceTileBox;
