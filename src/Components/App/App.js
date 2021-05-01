import React from 'react';
import './_App.scss';
import Nav from '../Nav/Nav';
import HomePage from '../HomePage/HomePage';
import Gallery from '../Gallery/Gallery';



const  App = () => {
  return (
    <div className="App">
      <Nav />
      <HomePage />
      {/* <Gallery /> */}
    </div>
  );
}

export default App;
