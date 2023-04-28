import React, { useContext } from 'react';
import { MyContext } from './CounterExample';
import { CiDark } from 'react-icons/ci'
import { MdOutlineLightMode } from 'react-icons/md'
import './Figm.scss'
import './../App.css';
import logo from "./img/logo.png"
const Header = () => {

  const {counter, setCounter} = useContext(MyContext)
  

  const handleButtonClick = () => {
    setCounter(!counter);

  };
  return (
    <>
    <header >
    <button className='btn bg-danger dark-lighte-mode' onClick={handleButtonClick}>{counter ?  <MdOutlineLightMode /> : <CiDark />}</button>
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
    </>
  )
}

export default Header