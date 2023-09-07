import React from 'react'
import newBook1 from '../../../assets/new-book/1.webp'
import newBook2 from '../../../assets/new-book/2.webp'
import newBook1_1 from '../../../assets/new-book/1-1.webp'
import newBook2_1 from '../../../assets/new-book/2-1.webp'
import newBook3_1 from '../../../assets/new-book/3-1.webp'
import './NewBook.css'
const NewBook = () => {
    return (
        <>
            <div className='new-book'>
                <img src={newBook2} alt="" />
                <img src={newBook1} alt="" />
            </div>
            <div className='new-book__offer'>
                <img src={newBook1_1} alt="" />
                <img src={newBook2_1} alt="" />
                <img src={newBook3_1} alt="" />
            </div>
        </>

    )
}

export default NewBook