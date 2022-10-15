import React from 'react'
import './HeroStyles.css'
import video from '../../Assets/assets/fall.mp4'
import {AiOutlineSearch} from 'react-icons/ai'

function Hero() {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={video} type='video/mp4'/>
        </video>
        <div className='overlay'></div>
        <div className='content'>
          <h1>First Class Travel</h1>
          <h2>Top 1% Locations worldwide</h2>
          <form className='form'>
            <div>
              <input type='text' placeholder ="Search Destination"/>
            </div>
            <div>
              <button><AiOutlineSearch className='icon'/></button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Hero