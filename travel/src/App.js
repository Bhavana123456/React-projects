import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Components/Nabvar/Navbar';
import Hero from './Components/Hero/Hero'
import Destinations from './Components/Destinations/Destinations';
import Search from './Components/Search/Search';
import Select from './Components/Select/Select'
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Select/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
