import { useState } from "react";
import "./home.css"

const Home = () => {
  const [clickDot, setclickDot] = useState<boolean>(false);
  return (
    <div className="container-home">
        <div className="home-left"></div>
        <p className="home-text">HE <br></br> LLO<span className={clickDot ? 'home-text-dot animation-dot' : 'home-text-dot'} onClick={()=>setclickDot(!clickDot)}>.</span></p>
        <div className="home-right"></div>
    </div>
  )
}

export default Home