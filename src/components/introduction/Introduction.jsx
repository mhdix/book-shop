import React from 'react'
import './Introduction.css'
import '../../App.css'
import img1 from '../../assets/introduction/1.webp'
import img2 from '../../assets/introduction/2.webp'
import img3 from '../../assets/introduction/3.webp'
import icon from '../../assets/icon/icon.png'
import { BsFillChatDotsFill, BsFillShareFill } from "react-icons/bs";
const Introduction = () => {
    return (
        <div>
            <div className="reading">
                <h3>خلاصه و معرفی کتاب های برتر دنیا</h3>
            </div>
            <div className='introduction-main'>
                <div className='introduction'>
                    <div className='introduction-main-img'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='introduction-content'>
                        <h5>برترین ها</h5>
                        <h4>بهترین رمان های کره ای و ژاپنی [ترجمه فارسی]</h4>
                        {tag()}
                        <p>در دنیای پرشتاب امروزی، ایجاد یک روتین صبحگاهی که نحوه زندگی و عملکرد ما را تنظیم می کند، بیش از همیشه مهم است. این مقاله با الهام از اصول کتاب باشگاه پنج صبحی ها به بررسی قدرت باورنکردنی یک روتین صبحگاهی قدرتمند کامل خود راZ ...</p>
                    </div>
                </div>
                <div className='introduction'>
                    <div className='introduction-main-img'>

                        <img src={img2} alt="" />
                    </div>
                    <div className='introduction-content'>
                        <h5>مقالات</h5>
                        <h4>بهترین رمان های کره ای و ژاپنی [ترجمه فارسی]</h4>
                        {tag()}
                        <p>در دنیای پرشتاب امروزی، ایجاد یک روتین صبحگاهی که نحوه زندگی و عملکرد ما را تنظیم می کند، بیش از همیشه مهم است. این مقاله با الهام از اصول کتاب باشگاه پنج صبحی ها به بررسی قدرت باورنکردنی یک روتین صبحگاهی قدرتمند کامل خود راZ ...</p>
                    </div>
                </div>
                <div className='introduction'>
                    <div className='introduction-main-img'>

                        <img src={img3} alt="" />
                    </div>
                    <div className='introduction-content'>
                        <h5>پرفروش ترین ها</h5>
                        <h4>بهترین رمان های کره ای و ژاپنی [ترجمه فارسی]</h4>
                        {tag()}
                        <p>در دنیای پرشتاب امروزی، ایجاد یک روتین صبحگاهی که نحوه زندگی و عملکرد ما را تنظیم می کند، بیش از همیشه مهم است. این مقاله با الهام از اصول کتاب باشگاه پنج صبحی ها به بررسی قدرت باورنکردنی یک روتین صبحگاهی قدرتمند کامل خود راZ ...</p>
                    </div>
                </div>
                <div className='introduction'>
                    <div className='introduction-main-img'>

                        <img src={img1} alt="" />
                    </div>
                    <div className='introduction-content'>
                        <h5>پرفروش ترین ها</h5>
                        <h4>بهترین رمان های کره ای و ژاپنی [ترجمه فارسی]</h4>
                        {tag()}
                        <p>در دنیای پرشتاب امروزی، ایجاد یک روتین صبحگاهی که نحوه زندگی و عملکرد ما را تنظیم می کند، بیش از همیشه مهم است. این مقاله با الهام از اصول کتاب باشگاه پنج صبحی ها به بررسی قدرت باورنکردنی یک روتین صبحگاهی قدرتمند کامل خود راZ ...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction

function tag() {
    return (
        <span>
            <button><BsFillShareFill /></button>
            <button><BsFillChatDotsFill /></button>
            <p>کتاب سراج</p>
            <img src={icon} alt="" />
        </span>
    )
}