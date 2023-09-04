import React from 'react'

import Blog from '../Components/Blog'
import Hero from '../Components/Hero';
import About from '../Components/About';
import Categories from '../Components/Categories';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Header2 from '../Components/Header2';

const Home = () => {
    return (
        <>
          <Header2 />
          <Hero />
          <About />
          <Blog />
          <Categories />
          <Contact />
          <Footer />
        </>
      );
}

export default Home