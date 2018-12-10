import React from 'react';
import ExperienceTile from './ExperienceTile';

const ExperienceTileBox = (props) => {
  return ( 
  <div className = "experience-list">
    <ExperienceTile 
      title = "Maracana Tour Experience"
      description = "I will show you Maracanã stadium from a perspective no fans have ever imagined"
      price={52}
      url = {"https://unsplash.com/photos/PUtXlF8CU1A"}
    />
    <ExperienceTile />
    <ExperienceTile />
    <ExperienceTile />
    <ExperienceTile />
    <ExperienceTile />
    <ExperienceTile />
    <ExperienceTile />
    <ExperienceTile />
    <ExperienceTile />
    <ExperienceTile />
    <ExperienceTile />
    </div>

  )
}

export default ExperienceTileBox;


// 1. **Name: Maracanã Tour Experience (Title) 
// 2. Location: Maracanã
// 3. Category: Sporting event
// 4. **Description: I will show you Maracanã stadium from a perspective no fans have ever imagined.
// 5. **Price: £52
// 6. Duration: 6 h