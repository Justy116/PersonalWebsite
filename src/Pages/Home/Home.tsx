import { useState } from "react";
import "./home.css"
import Header from "../../shared/components/header/Header";

const Home = () => {
  const [clickDot, setclickDot] = useState<boolean>(false);
  const [clickArrow, setclickArrow] = useState<boolean>(false);

  return (
    <div className="container-home">
        <div className={"home-left-section"  + (clickArrow ? ' left-section-animation home-left-section' : '')}></div>
        <p className="home-text">HE <br></br> LLO<span className={"home-text-dot " + (clickDot ? 'animation-dot' : '')} onClick={()=>setclickDot(!clickDot)}>.</span></p>
        <div onClick={()=>setclickArrow(!clickArrow)}>
          <svg className="scroll-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
        </div>
        <div className={"home-right-section"  + (clickArrow ? ' right-section-animation' : '')}></div>
        <div className="container-header">
          <Header />
        </div>
    </div>
  )
}

export default Home