import React from 'react';
import Contact from './Contact';
import Products from './Products';
import Services from './Services';

const Home = () => {
  return (
    <section className="bg-primary pt-3" id="home">
        <Services />
        <Products />
        <Contact />
    </section>
  );
};

export default Home;