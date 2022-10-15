import React from 'react'
import {FaFacebook,FaInstagram,FaTwitter,FaPinterest,FaYoutube} from 'react-icons/fa';
import './Footer.css';
function Footer() {
  return (
    <div className='footer'>
        <div className='top'>
            <h3>ONE MILE</h3>
            <div className='social'>
            <FaInstagram className='icon'/>
                <FaTwitter className='icon'/>
                <FaPinterest className='icon'/>
                <FaYoutube className='icon'/>
            </div>
        </div>
        <div className='bottom'>
            <div className='left'>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Partners</li>
                    <li>Advertising</li>
                </ul>
            </div>
            <div className='right'>
                <ul>
                    <li>Contact</li>
                    <li>Terms</li>
                    <li>Policies</li>
                    <li>Privacy</li>
                    <li>contact</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer