import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import NavBar from './NavBar'
import {BsBoxArrowLeft, BsBoxArrowInRight} from 'react-icons/bs'

const Index = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  
  
  const toggleMenu = () => {
    setIsAnimating(true);
    setMenuVisible(!menuVisible);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="container">
      <div className="header"><Header /></div>
      <div className={`menu bg-erpBlack ${menuVisible ? '' : 'hidden'} ${isAnimating ? 'animating' : ''}`}>
        <NavBar />
      </div>
      {/* {menuVisible ? (
        <button className='toggleMenuClose text-2xl text-white' onClick={toggleMenu}><BsBoxArrowLeft /></button>
      ):(
        openMenu ? (
          <button className='toggleMenuOpen text-2xl text-black' onClick={toggleMenu}><BsBoxArrowInRight /></button>
        ):null
      )} */}
      <div className={`main bg-erpBackground ${menuVisible ? '' : 'full-width'}`}>{children}</div>
      <div className="footer"><Footer /></div>
    </div>
  )
}

export default Index
