import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRouter } from 'next/router';

const Index = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/login') {
      setMenuVisible(false);
    }
  }, [router.pathname]);

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
      {menuVisible ? (
        <div className={`menu bg-erpBlack ${isAnimating ? 'animating' : ''}`}>
          <NavBar />
          <button className='toggleMenuClose text-2xl text-white' onClick={toggleMenu}><GiHamburgerMenu /></button>
        </div>
      ) : router.pathname != '/login' ? <button className='toggleMenuOpen text-2xl text-black' onClick={toggleMenu}><GiHamburgerMenu /></button>:null}
      <div className={`main bg-erpBackground ${menuVisible ? '' : 'full-width'}`}>{children}</div>
      <div className="footer"><Footer /></div>
    </div>
  );
};

export default Index;
