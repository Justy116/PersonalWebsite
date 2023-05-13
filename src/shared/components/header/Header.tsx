import { socialData } from "../../../data/social.data"
import { ISocial } from "../../interfaces/Social.interface"
import SocialButton from "../social-button/SocialButton"
import "./header.css"

const Header = () => {

  const socials: ISocial[] = socialData;

  return (
    <div className="container-social-buttons" >
        {socials.map((val, i)=>(
            <SocialButton social={val.social} image={val.image} link={val.link}  key={i} />
        ))}
    </div>
  )
}

export default Header