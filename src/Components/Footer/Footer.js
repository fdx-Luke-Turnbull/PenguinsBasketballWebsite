import React from "react";
import Privacy from "./Privacy";

export default function Footer() {
    return (
        <div className="footer">
            <div class="footer_banner secondary">
                <div class="footer_logo_container">
                    <a class="menu_logo" title="Penguins Basketball" href=""><i class="fa-regular fa-snowflake logo fa-xl"><span class="logo_title">PENGUINS</span></i></a>
                </div>
                <ul class = "social_banner">
                    <li class="facebook social icon" title="Find us on Facebook"><a href="https://www.facebook.com"><i class="fa-brands fa-square-facebook fa-xl social_icon"></i></a></li>
                    <li class="instagram social icon" title="Find us on Instagram"><a href="https://www.instagram.com"><i class="fa-brands fa-instagram fa-xl social_icon"></i></a></li>
                    <li class="youtube social icon" title="Find us on YouTube"><a href="https://www.youtube.com"><i class="fa-brands fa-youtube fa-xl social_icon"></i></a></li>
                    <li class="email social icon" title="Find us by Email"><a href="mailto:PenguinsBasketballAus.com.au"><i class="fa-regular fa-envelope fa-xl social_icon"></i></a></li>                
                </ul>
            </div>
            <Privacy />
        </div>
      );
}