import React from 'react';
import './Offer.css';
import exclucive_img from '../Assets/exclusive_image.png';
const Offer = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODCUTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src= {exclucive_img} alt="" />
        </div>
        
    </div>
  )
}

export default Offer