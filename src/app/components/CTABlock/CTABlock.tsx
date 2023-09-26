'use client'

import Image from "next/image";
import './CTABlock.css';
import { Button } from "../Button/Button";

export default function CTABlock() {
    return (
      <div className='cta'>
        <div className='title-button-wrapper'>
          <span className="title">The Future of Boxing Is Fan Owned</span>
          <div className="button-wrapper">
            <Button to="/" size="main" type="prime" leadingIcon={<Image src="/img/Ic_wallet.svg" alt="wallet" width={20} height={20} />}>CONNECT</Button>
          </div>
        </div>
  
        <div className='cta-image-container'>
          <div className='cta-image'>
            <div className='coin'></div>
            <div className='coin2'></div>
            <div className='coin3'></div>
          </div>
        </div>
      </div>
    )
  }
  
  