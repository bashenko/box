'use client'
import { useSearchParams } from 'next/navigation';
import './hero.css'

export default function Hero() {

  const searchParams = useSearchParams()
  const score = searchParams.get('score') || 0; 
  return (
    <div className="hero">
        <div className="stats-wrapper">
            <div className="stats shadow-after" style={{color: "white"}}>
                <div className="data-wrapper">
                You are
                    <div className="data">
                        <div className="data-current">1</div>
                        <div className="data-of">of 34</div>
                    </div>
                </div>
            </div>
            <div className="stats shadow-before" style={{color: "white"}}>
             <div className="data-wrapper">
             Your score
                    <div className="data">
                        <div className="data-current">{score}</div>
                        <div className="data-of">of 100</div>
                    </div>
                </div>
            </div>
        </div> 
        <div className="hero-wrapper">
            <div className="invitation-text-block">
                <div className="invitiation-text-left">
                    <p>You are invited to become a </p>
                    <div className="crown-wrapper">
                        <div className="crown"> </div>
                        <p className="accented">FOUNDING MEMBER </p>
                    </div>
                    <p>of the Boxing Heads community</p>
                </div>
                <div className="invitiation-text-right">
                    <p>Contribute to the development of</p>
                    <p className="strong">Matchup: Fan Owned <br />Boxing Protocol</p>
                </div>
            </div>
            <div className="image-red-container">
                <div className="boxhead"></div>
            </div>
        </div>
    </div>
  )
}
