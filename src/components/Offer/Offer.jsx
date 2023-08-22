import React from 'react'
import './Offer.css'
import offer1 from '../../assets/offer/1.webp'
import books from '../books'
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
            {
                books.map((item) => {
                    return (
                        <div className='reading-book__main'>
                            {
                                item.discount && <span className='discount'>
                                    -{item.discount}
                                </span>
                            }
                            <img src={offer1} alt="" />
                            <div className='reading-book__caption'>
                                <p className='reading-book__description'>{item.name}</p>

                                {item.discount ? <span className='discount-mony'>
                                    <div>{(item.price * item.discount) / 100} تومان</div>
                                    <p>تومان {item.price}</p>
                                </span> : <span>
                                    <div>تومان {item.price}</div>
                                </span>}

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}