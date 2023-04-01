import React from "react";
import {animateScroll as scroll} from 'react-scroll'
import Privacy from "./Privacy";
import Logo from "../Logo/Logo"
import "./Footer.css"



// mimic a tag to reload page
    function scrollToTop() {
        scroll.scrollToTop({
            spy:true, 
            smooth:true, 
            duration:300});
      }

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_banner secondary">
                <div className="footer_logo_container" onClick={scrollToTop}>
                    {/*import logo section for footer.*/}
                    <Logo />
                </div>
                {/*social banner icon list*/}
                <ul className = "social_banner">
                    <li className="facebook social icon" title="Find us on Facebook"><a href="https://www.facebook.com" rel="noopener" ><i className="fa-brands fa-square-facebook fa-2xl social_icon"></i></a></li>
                    <li className="instagram social icon" title="Find us on Instagram"><a href="https://www.instagram.com" rel="noopener"><i className="fa-brands fa-instagram fa-2xl social_icon"></i></a></li>
                    <li className="youtube social icon" title="Find us on YouTube"><a href="https://www.youtube.com" rel="noopener"><i className="fa-brands fa-youtube fa-2xl social_icon"></i></a></li>
                    <li className="email social icon" title="Find us by Email"><a href="mailto:PenguinsBasketballAus.com.au" rel="noopener"><i className="fa-regular fa-envelope fa-2xl social_icon"></i></a></li>                
                </ul>
            </div>
            {/*import privacy and terms section*/}
            <Privacy />
        </div>
      );
}