'use client'

import Image from "next/image";
import Link from "next/link";
import './CTABlock.css';
import { Button } from "../Button/Button";

export default function CTABlock() {
    return (
      <div className='cta font-jost'>
        <div className='title-button-wrapper'>
          <span className="title">The Future of Boxing Is Fan Owned</span>
          <div className="button-wrapper">
            <Link href="https://matchup-eny3gcscqa-uc.a.run.app">
              <Button to="/" size="main" type="prime" leadingIcon={<Image src="/img/Ic_wallet.svg" alt="wallet" width={20} height={20} />}>CONNECT</Button>
            </Link>
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
  
  