import { IoLogoWhatsapp } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import "./index.css"

const Contact=()=>{
    return(
        <div className="contact-container">
            <h1 className="con">Contact</h1>
            <div className="contact-box">
                <div className="icon-box">
                <IoLogoWhatsapp className="whatsapp-icon"/>
                <a href="https://api.whatsapp.com/send?phone=+919948156798" target="_blank" rel="noopener noreferrer">
                <button className="button-icon">Message Me</button>
               </a>
                </div>

                <div className="icon-box">
                <SlSocialInstagram className="insta-icon"/>
                <a href="https://instagram.com/she_calls_me_bava__?igshid=OGY3MTU3OGY1Mw==" rel="noopener noreferrer" target="_blank">
                <button className="button-icon">Follow Me</button>
                </a>
                </div>

                <div className="icon-box">
                <MdEmail className="mail-icon"/>
                <a href="mailto:hemanthsudhani302@gmail.com" target="_blank" rel="noopener noreferrer">
                <button className="button-icon">Mail Me</button>
                </a>
                </div>


            </div>
        </div>
    )
}

export default Contact