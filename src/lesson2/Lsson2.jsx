import React from 'react';
import "./Figm.scss";
import logo from "./img/logo.png"
import hero_img from "./img/hero_img.png"
import shash from "./img/shashlik.png"
import star from "./img/star.png"

const Lsson2 = () => {
  return (
    <>
      <header>
        <div className="header_wrap container">
          <div className="header_left">
            <img src={logo} alt="" />
          </div>
          <ul className="header_right nav">
           <li className='nav_li'>Menu</li>
           <li className='nav_li'>News</li>
           <li className='nav_li'>About Us</li>
           <li className='nav_li'>Contact Us</li>
           <li className='nav_li'>
           <button className='btn btn-outline-light'>Login</button>
           </li>
          </ul>
        </div>
      </header>
      <section className='hero_sec'>
        <div className="hero_wrap container">
          <div className="hero_left">
            <h5 className='hero_h5'>Chase the new Flavour</h5>
            <h1 className='hero_head'>The key to Fine dining</h1>
            <p className='hero_text'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <button className='btn btn-outline-light'>Explore Menu</button>
          </div>
          <div className="hero_right ">
            <img src={hero_img} alt="" />
          </div>
        </div>
      </section>
      <section className='pop_sec pt-5'>
        <div className="pop_wrap container">
          <h3 className='text-danger mb-5'>Popular Dishes</h3>
          <ul className='d-flex'>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
          </ul>
        </div>
      </section>
      <section className='pack pt-5'>
      <div className="pop_wrap container">
          <h3 className='text-danger mb-5'>Our Regular Menu Pack</h3>
          <div className='buttonss mb-5'>
            <button className='btn btn-outline-danger'>All</button>
            <button className='btn btn-outline-danger'>Shawarma</button>
            <button className='btn btn-outline-danger'>Turk Kebab</button>
            <button className='btn btn-outline-danger'>Hamburger Kebab</button>
            <button className='btn btn-outline-danger'>Doner kebab</button>
            <button className='btn btn-outline-danger'>Shish kebab</button>
            <button className='btn btn-outline-danger'>French fries Pizza</button>
            <button className='btn btn-outline-danger'>Desserts</button>
          </div>
          <ul className='d-flex'>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            
          </ul>
          <ul className='d-flex'>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            
          </ul>
          <ul className='d-flex'>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className='pop_item'>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            
          </ul>
          
        </div>
      </section>
    </>
  )
}

export default Lsson2