import React from 'react';
 // Create this CSS file for styling

const PriceCard = ({ plan, price,Line, features }) => {
  return (
    //<div className="Container">
    <div className="price-card">
      <div className="plan">{plan}</div>
      <div className="price">${price}</div>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="buy-button">Button</button>
    </div>
   // </div>
   
  );
};

export default PriceCard;
