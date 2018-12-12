import React from 'react';

const PropertyHighlights = (props) => {
  return(
    <div className="property-highlights-container">
      <h4 className="highlights-title">HOME HIGHLIGHTS</h4>
      <p className="highlights-paragraph"><b>This Host is a Superhost</b> · Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
      <div className="helpful-container">
              <h5 className="helpful-text">Helpful</h5>
              <img className="helpful-icon" src="/images/helpful-icon.png" alt="Logo"/>
              <h5 className="not-helpful-text">Not helpful</h5>
      </div>
      <p className="highlights-paragraph"><b>Great location</b> · 94% of recent guests gave this home’s location a 5-star rating.</p>
      <div className="helpful-container">
              <h5 className="helpful-text">Helpful</h5>
              <img className="helpful-icon" src="/images/helpful-icon.png" alt="Logo"/>
              <h5 className="not-helpful-text">Not helpful</h5>
      </div>
      <p className="highlights-paragraph"><b>Free cancellation</b> · Cancel within 48 hours of booking to get a full refund</p>
      <div className="helpful-container">
              <h5 className="helpful-text">Helpful</h5>
              <img className="helpful-icon" src="/images/helpful-icon.png" alt="Logo"/>
              <h5 className="not-helpful-text">Not helpful</h5>
      </div>
    </div>
  )
}

export default PropertyHighlights;
