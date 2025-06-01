import React from 'react';
import './ArcSection.css';

const ArcSection = ({ images, title, subtitle, buttonText, onButtonClick }) => (
  <div className="arc-container">
    <div className="arc-images">
      {images.map((src, i) => {
        // verdeel de boog van -60° tot +60°
        const angle = -60 + (i * (120 / (images.length - 1)));
        return (
          <div
            className="arc-card"
            key={i}
            style={{ '--angle': `${angle}deg` }}
          >
            <img src={src} alt={`Slide ${i + 1}`} />
          </div>
        );
      })}
    </div>             {/* ← Zorg dat deze tag staat! */}

    <div className="arc-content">
      <h2 className="arc-title">{title}</h2>
      <p className="arc-subtitle">{subtitle}</p>
      <button className="arc-btn" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  </div>
);

export default ArcSection;

