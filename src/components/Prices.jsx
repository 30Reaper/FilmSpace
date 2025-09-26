import React from "react";

const Prices = () => {
  return (
    <div className="pricing-section" id="price">
      <h2>Prices</h2>
      <div className="pricing-carousel">
        <div className="pricing-card basic">
          <h3>BASIC</h3>
          <p className="price">$5.99</p>
          <p>per month</p>
          <ul>
            <li>Access to basic movie library</li>
            <li>Standard definition (SD) quality</li>
            <li>1 device at a time</li>
            <li>Ads included</li>
          </ul>
          <button>Subscribe now</button>
        </div>
        <div className="pricing-card premium">
          <h3>PREMIUM</h3>
          <p className="price">$9.99</p>
          <p>per month</p>
          <ul>
            <li>Access to entire movie library</li>
            <li>HD quality</li>
            <li>2 devices at a time</li>
            <li>No ads</li>
          </ul>
          <button>Subscribe now</button>
        </div>
        <div className="pricing-card ultimate">
          <h3>ULTIMATE</h3>
          <p className="price">$14.99</p>
          <p>per month</p>
          <ul>
            <li>Access to entire movie and series library</li>
            <li>4K Ultra HD quality</li>
            <li>4 devices at a time</li>
            <li>No ads + Exclusive content</li>
          </ul>
          <button>Subscribe now</button>
        </div>
      </div>
    </div>
  );
};

export default Prices;
