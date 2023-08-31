import React, { useEffect } from 'react'
import './Offer.css'
import offer1 from '../../assets/offer/1.webp'
import '../../App.css'
import { toast } from 'react-hot-toast'
import books from './../books';
books
const Offer = ({children , key}) => {
    return (
        <div className='reading'>
            {children}
            <Product books={books} key={key}/>
        </div>
    )
}

export default Offer


function Product({ books, key }) {
    // tests
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://rickandmortyapi.com/api/character/85")
                if (!res.ok) throw new Error('!!اروری موجود است')
                const data = await res.json()
                console.log(data);
            } catch (err) {
                console.log(err.message);
                toast.error(err.message)
            }
        }
        fetchData()
    })
    
    return (
        <div className='reading-books'>
            {
               books.map((item) => {
                    let mainPrice = (item.price * item.discount) / 100
                    return (
                        <div className='reading-book__main'>
                            {
                                item.discount && <span className='discount'>
                                    -{item.discount}%
                                </span>
                            }
                            <img src={offer1} alt="" />
                            <div className='reading-book__caption'>
                                <p className='reading-book__description'>{item.name}</p>

                                {item.discount ? <span className='discount-mony'>
                                    <div>{item.price - mainPrice} تومان</div>
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