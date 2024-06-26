import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="footer-content-logo" src={assets.logo} alt="" />
            <p>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos.We also provide our delivery partners with transparent and flexible earning opportunities.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>9811304554</li>
                <li><a href="mailto:yummybites@gmail.com">yummybites@gmail.com</a></li>
            </ul>
            <h2>REVIEW</h2>
            <button className='form'><a href="https://forms.gle/jPwDJLB8RrJuudFc7" target='_blank'>Review Form</a></button>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ YummyBites.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
