import React from 'react';
import './_App.scss';
import Nav from '../Nav/Nav';
import HomePage from '../HomePage/HomePage';
import Gallery from '../Gallery/Gallery';
import Checkout from '../Checkout/Checkout';


const  App = () => {
  return (
    <div className="App">
      <Nav />
      <HomePage />
      <Gallery />
      <Checkout />
    </div>
  );
}

export default App;
