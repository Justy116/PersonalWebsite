import { useState } from "react";
import "./home.css"
import Header from "../../shared/components/header/Header";

const Home = () => {
  const [clickDot, setclickDot] = useState<boolean>(false);
  return (
    <div className="container-home">
        <div className="home-left-section"></div>
        <p className="home-text">HE <br></br> LLO<span className={"home-text-dot " + (clickDot ? 'animation-dot' : '')} onClick={()=>setclickDot(!clickDot)}>.</span></p>
        <p className="scroll-text">Scrool</p>
        <div className="home-right-section"></div>
        <div className="container-header">
          <Header />
        </div>
    </div>
  )
}

export default Home