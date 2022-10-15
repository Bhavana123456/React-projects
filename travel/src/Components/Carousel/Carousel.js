import React from 'react';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

import {useRef,useEffect,useState} from "react";
import Images from '../images.js';
import './Carousel.css'

function Carousel() {
  const[width,setWidth] = useState(0);
  const carousel = useRef();
  useEffect(()=>{
    console.log(carousel.current.scrollWidth,carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
  },[]);
  return (
    <div name='carousel1'>
        <motion.div ref={carousel} className='carousel'>
          <motion.div drag="x" dragConstraints={{right:0, left:-width}} className='inner-carousel'>
            {Images.map((images)=>{
              return(
                <motion.div className='item' key={images}>
                  <img src = {images} alt='/'/>
              </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
    </div>
  )
}

export default Carousel