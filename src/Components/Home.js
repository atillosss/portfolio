import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="hero">
      <div className="hero-left">
      <button class="available-btn">
  <span class="dot"></span>
  Available for Work
</button>

        <h1 className="hero-title">
          Not just another developer. I’m the future of your team.
        </h1>
      </div>

      <div className="hero-right">
        <h2 className="hero-subtitle">
        Skilled in React, .NET and AI – combining deep technical expertise with creative problem-solving to architect scalable solutions and deliver measurable business value from day one.        </h2>
        <a class="cta-btn" href="#projects">
        <span class="icon-wrapper">➜</span>
         See my work
        </a>
      </div>

      <div className="center-name">
        <h1>atillosss</h1>
      </div>
    </div>
  );
}

export default Home;



