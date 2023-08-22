import React from 'react'
import './Offer.css'
import offer1 from '../../assets/offer/1.webp'
const Offer = () => {
    return (
        <div className='reading'>
            <h3>خواندنی ترین رمان های دنیا</h3>
            <Product />
        </div>
    )
}

export default Offer


function Product() {
    return (
        <div className='reading-books'>
            <div>
                <span className='discount'>
                    -50
                </span>
                <img src={offer1} alt="" />
                <div className='reading-book__caption'>
                    <p className='reading-book__description'>کتاب هنر ظریف بی خیالی</p>
                    <span className='discount-mony'>
                        <p>25,00 تومان</p>
                        <del>تومان 50,000</del>
                    </span>
                    
                </div>
            </div>

            <div>
                <span className='discount'>
                    -10
                </span>
                <img src={offer1} alt="" />
                <div className='reading-book__caption'>
                    <p className='reading-book__description'>کتاب هنر ظریف بی خیالی</p>
                    <span>
                        <p>تومان 55,000</p>
                    </span>

                </div>
            </div>
            <div>
                <img src={offer1} alt="" />
                <div className='reading-book__caption'>
                    <p className='reading-book__description'>کتاب هنر ظریف بی خیالی</p>
                    <span>
                        <p>تومان 55,000</p>
                    </span>
                </div>
            </div>
            <div>
                <img src={offer1} alt="" />
                <div className='reading-book__caption'>
                    <p className='reading-book__description'>کتاب هنر ظریف بی خیالی</p>
                    <span>
                        <p>تومان 55,000</p>
                    </span>
                </div>
            </div>
        </div>
    )
}