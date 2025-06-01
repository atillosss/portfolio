import React from 'react';
import ContactForm from './Components/ContactForm.js';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Slider from './Components/slider.js';
import ArcSection from './Components/ArcSection.js';
import Testimonial from './Components/Testimonial.js'
import AboutSection from './Components/AboutSection.js';
import ServiceSection from './Components/ServiceSection.js';
import TagCloud from './Components/TagCloud.js';
import Footer from './Components/Footer.js';
import './App.css';


const images = [
  '/projecten/img1.png',
  '/projecten/img2.png',
  '/projecten/img3.png',
  '/projecten/img4.png',
  '/projecten/img5.png',
  '/projecten/img6.png',
  '/projecten/img7.png',
];

function App() {
  return (
    <div>
       <Navbar />

      <section id="home">
        <Home />
      </section>

      <section>
      <Slider />
      </section>

      <section id='about'>
        <AboutSection />
      </section>

    <section id='projects'>
      <div>
      <ArcSection
        images={images}
        title="Let’s Create Something Exceptional"
        subtitle="Let’s collaborate to create a bold brand or seamless digital experience. Get in touch!"
        buttonText="Contact me"
        onButtonClick={() => alert('Contact clicked!')}
      />
      {/* … meer content … */}
    </div>
    </section>

    <section id='services'>
        <ServiceSection />
        <TagCloud />
      </section>

      <section id="reviews">
        <Testimonial />
      </section>

      <section id="contact">
        <h2>Contact</h2>
        {<ContactForm />}
      </section>

      <section>
        < Footer/>
      </section>
    </div>
  );
}

export default App;


