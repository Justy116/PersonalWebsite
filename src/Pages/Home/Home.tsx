import { useState } from "react";
import "./home.css"
import Header from "../../shared/components/header/Header";

const Home = () => {
  const [clickDot, setclickDot] = useState<boolean>(false);
  const [clickArrow, setclickArrw] = useState<boolean>(false);

  return (
    <div className="container-home">
        <div className="home-left-section"></div>
        <p className="home-text">HE <br></br> LLO<span className={"home-text-dot " + (clickDot ? 'animation-dot' : '')} onClick={()=>setclickDot(!clickDot)}>.</span></p>
        <div>
          <svg className="scroll-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
        </div>
        <div className="home-right-section"></div>
        <div className="container-header">
          <Header />
        </div>
    </div>
  )
}

export default Home