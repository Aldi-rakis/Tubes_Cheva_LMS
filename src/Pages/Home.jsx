import React from 'react'

import Blog from '../Components/Blog'
import Hero from '../Components/Hero';
import About from '../Components/About';
import Categories from '../Components/Categories';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Home = () => {
    return (
        <>
          <Header />
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