import React from 'react';
import './slider.css';

const tools = [
  { name: 'React', logo: '/logos/react.svg' },
  { name: '.NET',  logo: '/logos/net.svg' },
  { name: 'AI',    logo: '/logos/aiii.svg' },
  { name: 'Node',  logo: '/logos/node.svg' },
  { name: 'Next',  logo: '/logos/nexttt.svg' },
];

// dupliceren zodat na het scrollen de tweede set direct volgt
const duplicated = [...tools, ...tools, ...tools, ...tools, ...tools];

export default function ToolSlider() {
  return (
    <div className="slider">
      <div className="slider-track">
        {duplicated.map((tool, i) => (
          <div className="slide" key={i}>
            <img src={tool.logo} alt={tool.name} className="logo" />
            <span className="name">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}



