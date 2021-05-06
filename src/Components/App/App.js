import React from 'react';
import './_App.scss';
import Nav from '../Nav/Nav';
import HomePage from '../HomePage/HomePage';
import Gallery from '../Gallery/Gallery';
import Checkout from '../Checkout/Checkout';
import SlideShow from '../Slideshow/SlideShow';
import LowerHomepage from '../LowerHomepage/LowerHomepage';
import Footer from '../Footer/Footer';


const  App = () => {
  return (
    <div className="App">
      <Nav />
      <SlideShow/>
      <HomePage />
      <LowerHomepage/>
      <Footer />
      {/* <Gallery />
      <Checkout /> */}
    </div>
  );
}

export default App;
