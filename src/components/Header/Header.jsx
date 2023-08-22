import logo from '../../assets/download.png'
import React from 'react'
import './Header.css'
import Navigation from './Navigation'
const Header = () => {
    return (
        <div className='header'>
            <div className='main-header'>
                <div className='header-logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='header-search'>
                    <button>🔍</button>
                    <input type="text" placeholder='جستجوی محصولات' />
                </div>
                <div className='header-btn'>
                    <button className='header-cart'>🛒 سبد خرید شما</button>
                    <button className='login-signup'>🖖 ورود / ثبت نام</button>
                </div>
            </div>
            <Navigation />
        </div>

    )
}

export default Header