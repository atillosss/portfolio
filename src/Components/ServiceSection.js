// ServicesSection.jsx
import React from 'react';
import './ServiceSection.css';

const services = [
  { icon: '/services/website.svg', title: 'Full-Stack Web Apps', description: 'Deliver end-to-end solutions—from database modeling (Entity Framework/SQL) to responsive front-end.', link: '/services/ui-ux' },
  { icon: '/services/ai.svg', title: 'AI & Machine Learning', description: 'Integrate intelligent features (recommendations, chatbots, image/text processing) using Python or C# ML libraries.', link: '/services/app-design' },
  { icon: '/services/ui-ux.svg', title: 'UI/UX Design & Prototyping', description: 'Create wireframes, user flows, high-fidelity mockups, and clickable prototypes in Figma or Adobe XD.', link: '/services/website-design' },
  { icon: '/services/backend.svg', title: 'Back-end Development ', description: 'Design and implement scalable APIs, microservices, and server-side business logic.', link: '/services/ui-design' },
  { icon: '/services/frontend.svg', title: 'Front-end Development ', description: 'Build fast, interactive user interfaces using component-based architecture.', link: '/services/design-system' },
  { icon: '/services/ci-cd.svg', title: 'CI/CD & DevOps Pipelines', description: 'Set up automated build, test, and deployment pipelines using GitHub Actions or Azure DevOps.', link: '/services/wireframing' },
  { icon: '/services/wordpress.svg', title: 'WordPress Development', description: 'Build and maintain custom WordPress sites – from theme and plugin development to performance tuning and security hardening.', link: '/services/brand-identity' },
  { icon: '/services/code.svg', title: 'Consultancy & Code Reviews', description: 'Advise on best practices, architecture, and security; perform peer code reviews to raise code quality.', link: '/services/illustration' },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-header">
        <p className="subtitle">My Specialization</p>
        <h2>Services <span>I Provide</span></h2>
      </div>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="accent-bar" />
            <div className="card-content">
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="learn-more">
                Learn more <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}