import { ISocial } from "../../interfaces/Social.interface"
import "./social-button.css"



const SocialButton = (props: ISocial) => {

  return (
    <a className="container-social-button" href={props.link}>
      <div >
          <img className="social-button-image" src={props.image} alt="" />
      </div>
    </a>

  )
}

export default SocialButton