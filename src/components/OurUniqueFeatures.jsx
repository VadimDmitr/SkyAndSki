import React from 'react';
import '../scss/_ourUniqueFeatures.scss';

export const OurUniqueFeatures = () => {
  return (
    <div className="our-unique-features">
      <div className="our-unique-features__item">
        <img src="./10.svg" alt="Free shoping Icon" />   
        <p className="our-unique-features__title">Free Shoping</p>
        <p className="our-unique-features__description">No charge for each delivery</p>
      </div>
      <div className="our-unique-features__item">
        <img src="../images/icons/quick_payment.png" alt="Quick payment Icon" /> 
        <p className="our-unique-features__title">Quick Payment</p>
        <p className="our-unique-features__description">100% secure payment</p>
      </div>
      <div className="our-unique-features__item">
        <img src="../images/icons/24_support.svg" alt="24-7 Support Icon" />
        <p className="our-unique-features__title">24/7 Support</p>
        <p className="our-unique-features__description">Quick support</p>
      </div>
    </div>
  );
};
