import enamad from '../../assets/enamad/logo.png'
import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="links">
        <div>
          <h4>حساب کاربری</h4>
          <ul>
            <li><a href="/">حساب کاربری شما</a></li>
            <li><a href="/a">سبد خرید شما</a></li>
            <li><a href="#">تماس با ما</a></li>
          </ul>
        </div>
        <div>
          <h4>کتاب های پیشنهادی</h4>
          <ul>
            <li><a href="#">حساب کاربری شما</a></li>
            <li><a href="#">سبد خرید شما</a></li>
            <li><a href="#">تماس با ما</a></li>
          </ul>
        </div>
        <div>
          <h4>کتاب های پرطرفدار</h4>
          <ul>
            <li><a href="#">حساب کاربری شما</a></li>
            <li><a href="#">سبد خرید شما</a></li>
            <li><a href="#">تماس با ما</a></li>
          </ul>
        </div>
      </div>
      <div className='border-bottom'></div>
      <div className='site-caption'>
        <div><p>فروشگاه کتاب سراج بوک یکی از بهترین کتابفروشی های ایران برای خرید کتاب، از سال 96 به صورت حرفه ای خرید و فروش کتاب به صورت آنلاین را به مجموعه خود اضافه کرد و در همین راستا بهترین کتاب های روانشناسی و رمان ، بهترین کتاب های کودک ، جدیدترین کتاب های عمومی را به بانک کتاب خود اضافه کرده است، در سراج بوک خرید کتاب با تخفیف انجام میشود و کلیه کتاب ها تا سقف 50% تخفیف ویژه و دائمی دارند.</p></div>
        <div><img src={enamad} alt="" /></div>
      </div>
    </div>
  )
}

export default Footer