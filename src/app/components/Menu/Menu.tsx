/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { Button } from '../Button/Button';
import './Menu.css'

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const menuRef = useRef(null);
  
    const toggleMenu = () => {
        console.log("MENU")
      setIsMenuOpen(!isMenuOpen);
    };
  
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as Node).contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);

  return (
    <div>
      <div className='menu'>
        <Button size='small' type='secondary' leadingIcon={<Image src="/img/menu.svg" width={14} height={11} alt="Menu" />} onClick={toggleMenu}>
          Menu
        </Button>
        <div className="logo-container">
          <Link href="/">
              <Image src="/img/logo.png" width={47} height={61} alt="Logo" />
          </Link>
        </div>
        <Link href="https://matchup-eny3gcscqa-uc.a.run.app">
            <Button size='small' type='prime' leadingIcon={<img src="/img/Ic_wallet.svg" alt="Wallet" />}>
              Connect wallet
            </Button>
        </Link>
      </div>
      {isMenuOpen && (
        <div className="popup-menu-wrapper" ref={menuRef}>
          <div className="mobile-menu-item">
            <Link href="/">
                <img src="/img/logo.png" width={47} alt="Logo" />
            </Link>
            <Button size='small' type='secondary' leadingIcon={<img src="/img/close.png" alt="Wallet" />} onClick={toggleMenu}>
              Close
            </Button>
          </div>
          <div className="menu-left">
            <span className="menu-title">Menu</span>
            <nav>
              <ul className="menu-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/contact">The 34 Founders</Link></li>
                <li><Link href="/contact">Roadmap</Link></li>
              </ul>
            </nav>
          </div>
          <div className="menu-right">
            <span className="menu-title">Social Media</span>
            <ul className="menu-list">
              <li><a href="https://twitter.com/MatchupDAO" target="window">Twitter <img src="/img/twitter.png" alt="Twitter" /></a></li>
              <li><a href="https://www.instagram.com/boxing.heads/" target="window">Instagram <img src="/img/insta.png" alt="instagram" /></a></li>
              <li><a href="https://discord.gg/Y7EZSRPe" target="window">Discord <img src="/img/discord.png" alt="discord" /></a></li>
              <li><a href="https://t.me/+lJtR18FxtG8xZjhk" target="window">Telegram <img src="/img/telegram.png" alt="telegram" /></a></li>
            </ul>
            <div className="menu-grid">
              <div className="grid-item"><a href="https://twitter.com/MatchupDAO" target="window"><img src="/img/twitter.png" alt="Twitter" /> Twitter</a></div>
              <div className="grid-item"><a href="https://www.instagram.com/boxing.heads/" target="window"><img src="/img/insta.png" alt="instagram" /> Instagram</a></div>
              <div className="grid-item"><a href="https://discord.gg/Y7EZSRPe" target="window"><img src="/img/discord.png" alt="discord" /> Discord</a></div>
              <div className="grid-item"><a href="https://t.me/+lJtR18FxtG8xZjhk" target="window"><img src="/img/telegram.png" alt="telegram" /> Telegram</a></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
