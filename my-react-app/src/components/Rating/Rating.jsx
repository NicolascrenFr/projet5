import React from 'react';
import './Rating.css';

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <span 
          key={i} 
          className={i < rating ? 'star filled' : 'star'}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;