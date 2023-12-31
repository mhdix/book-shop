import logo from '../../assets/download.png'
import React, { useEffect, useState } from 'react'
import './Header.css'
import Navigation from './Navigation'
import books from './../books';
import img1 from '../../assets/offer/1.webp'
import Date from '../Date';
const Header = () => {
    const [allBooks, setAllBooks] = useState(books)
    const [selectedBook, setSelectedBook] = useState([])
    const [searched, setSearched] = useState()
    const [searchBox, setSearchBox] = useState(false)
    
    return (
        <div className='header'>
            <div className='main-header'>
                <div className='header-logo'>
                    <img src={logo} alt="" />
                </div>
                <Search searchBox={searchBox} setSearchBox={setSearchBox} setSearched={setSearched} searched={searched} allBooks={allBooks} />
                <div className='header-btn'>
                    <button className='header-cart'><span>🛒</span> سبد خرید شما</button>
                    <span></span>
                    <button className='login-signup'>🖖 ورود / ثبت نام</button>
                </div>
            </div>
            <Navigation />
        </div>

    )
}

export default Header

function Search({ allBooks, setSearched, searched, searchBox, setSearchBox }) {
    // open search box when click inpiut and writing text inner input
    const openSearchedBox = (e) => {
        setSearched(e.target.value)
        setSearchBox(!searchBox)
    }
    return (
        <div className='header-search'>
            {/* <button>🔍</button> */}
            {/* <Date /> */}
            <input type="text" placeholder=' ... جستجوی محصولات' onChange={(e) => openSearchedBox(e)} onClick={() => setSearchBox(true)} />
            <div className={`search-content ${searchBox === true ? 'show-search' : ''}`} >
            <button onClick={()=>setSearchBox(false)}>close</button>
                {allBooks.filter(item => String(item.name).includes(`${searched}`)).map(((filteredBook, index) => {
                    return (
                        <div className='main-search' >
                            <div className="search-content__content">
                                <h3>{filteredBook.name}</h3>
                                <p style={{ margin: '30px 0 0 0' }}>قیمت : 56000</p>
                            </div>
                            <div className='search-img'>
                                <img src={img1} alt="" />
                            </div>
                            <h5>{index + 1}</h5>
                        </div>
                    )
                }))}

            </div>
        </div >
    )
}