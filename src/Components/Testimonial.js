import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: 'Fatima Hoog',
    role: 'Founder & CEO A&S',
    avatar: '/persons/person.svg',
    rating: 5,
    text: 'Dominic transformed our brand identity with a fresh, modern look that truly resonates with our audience.',
  },
  {
    name: 'Jan van der Ven',
    role: 'Lead Software Engineer',
    avatar: '/persons/person.svg',
    rating: 5,
    text: 'From concept to execution, Atilla’s attention to detail and creativity exceeded our expectations.',
  },
  {
    name: 'Soner',
    role: 'Director of Sales',
    avatar: '/persons/person.svg',
    rating: 5,
    text: 'Our website is now sleek and intuitive, thanks to Atilla’s expertise in web-applications.',
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2>Trusted by Brands, <br /> Loved by Clients</h2>
        <p>
          Great design goes beyond aesthetics—it creates impact. Hear from clients who have experienced the power of thoughtful branding and design firsthand.
        </p>
      </div>
      <div className="testimonial-cards">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="top-row">
              <img src={t.avatar} alt={t.name} className="avatar" />
              <div className="rating">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx} className="star">★</span>
                ))}
              </div>
            </div>
            <p className="testimonial-text">“{t.text}”</p>
            <p className="testimonial-author">
              <strong>{t.name}</strong><br />
              <span>{t.role}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
