import React from 'react'
import './Offer.css'
import offer1 from '../../assets/offer/download.png'
const Offer = () => {
  return (
    <div className='reading'>
        <h3>خواندنی ترین رمان های دنیا</h3>
        <div className='reading-books'>
            <img src={offer1} alt="" />
        </div>
    </div>
  )
}

export default Offer