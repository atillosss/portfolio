import React from 'react';
import './AboutSection.css';




export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-top">
        <div className="about-text">
          <div className="pill">About me</div>
          <p>Hi!<br/> My name is Atilla Agirman.<br/> I’m a Software Engineering student in the Netherlands, passionate about building scalable web apps and intelligent systems. Through hands‐on projects and internships, I’ve sharpened my skills with React on the front end, .NET and C# on the back end, and have begun exploring AI/ML workflows.</p> <p> <strong>My objective:</strong> To push boundaries by developing robust, user-focused solutions. I thrive on learning new technologies, collaborating on real-world problems, and contributing code that not only works but delights users. I’m eager to join a team where I can combine my technical foundation with creativity to drive impactful results.</p>

    {/* CONTACT-ROW: 2 links, 1 rechts */}
<div className="contact-row">
  <div className="contact-left">
    <a href="mailto:atillosss25@gmail.com" className="contact-link">
      <img src="/icons/maill.svg" alt="Mail" className="contact-icon" />
      <span>atillosss25@gmail.com</span>
    </a>
    <a href="tel:0640543611" className="contact-link">
      <img src="/icons/phonee.svg" alt="Phone" className="contact-icon" />
      <span>06 40 54 36 11</span>
    </a>
  </div>
  <div className="contact-right">
    <a href="https://linkedin.com/in/atilla-agirman" target="_blank" rel="noopener" className="contact-link">
      <img src="/icons/linkedinn.svg" alt="LinkedIn" className="contact-icon" />
      <span>Atilla Agirman</span>
    </a>
  </div>
</div>



        </div>
        <div className="about-photo">
          <img src="/profile.png" alt="Nguyen Duc Thang" />
        </div>
      </div>

      <div className="about-bottom">
  <div className="about-cols">
    <div className="col left-col">
      <div className="info-column">
        <h3>Education</h3>
        <span className="tag">2023 – Now</span>
        <p>The Hague University of Aplied Science – Software Engineering
        </p>
      </div>
      <div className="info-column">
        <h3>Technical skill</h3>
        <div className="skill-icons">
        <img src="/logos/python.svg" alt="Pyhton" className="skill-icon" />
    <img src="/logos/aiii.svg"    alt="Premiere Pro" className="skill-icon" />
    <img src="/logos/net.svg"    alt="After Effects" className="skill-icon" />
    <img src="/logos/nexttt.svg"    alt="Illustrator" className="skill-icon" />
    <img src="/logos/node.svg"    alt="InDesign" className="skill-icon" />
    <img src="/logos/react.svg"    alt="Photoshop" className="skill-icon" />
        </div>
      </div>
      <div className="info-column">
        <h3>Interest</h3>
        <p className="interest-list">
        <span>Sports</span>
        <span> | </span>
        <span>Technology</span>
        </p>
     </div>
    </div>

    <div className="col right-col">
    <div className="info-column">
  <h3>Soft skill</h3>
  <ul className="soft-skill-list">
    <li>Teamwork</li>
    <li>Communicatie</li>
    <li>Adaptiviteit</li>
    <li>Tijdsbeheer</li>
    <li>Kritisch denken</li>
    <li>Creativiteit</li>
  </ul>
      </div>
      <div className="info-column">
  <h3>Skill set</h3>
  <ul className='soft-skill-list'>
    <li>Component-based development</li>
    <li>RESTful & GraphQL API-design</li>
    <li>Database modeling & SQL</li>
    <li>State management</li>
    <li>Test-driven development</li>
    <li>CI/CD & DevOps pipelines</li>
  </ul>
</div>
    </div>
  </div>
</div>

    </section>
);
}
