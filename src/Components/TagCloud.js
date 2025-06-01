// TagMarquee.jsx
import React from 'react';
import './TagCloud.css';

const tags = [
  'webdevelopment',
  'app development',
  'dashboard',
  'wireframe',
  'UX/UI',
  'brand identity',
  'frontend',
  'Landing Page',
  'wordpress'
];

export default function TagCloud() {
  return (
    <marquee className="tag-marquee" scrollamount="10" behavior="scroll" direction="left">
      {tags.map((tag, i) => (
        <React.Fragment key={i}>
          <span className="tag-item">{tag}</span>
          {i < tags.length - 1 && <span className="tag-sep">*</span>}
        </React.Fragment>
      ))}
    </marquee>
  );
}



