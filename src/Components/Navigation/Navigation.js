import React, { useState } from "react";
import Logo from "../Logo/Logo"

import CloseMenu from "./CloseMenu";
import HamburgerMenu from "./HamburgerMenu";
import "./Navigation.css"

//import Hamburger from "./Hamburger"
const Navigation = () => {
    // set menu open and close on click
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false); 
    
    //list menu options as array
    const navItems = ["Schedule","Roster","Standings","Community","Gallery","Contact"];
    
    //map through array to build menu
    const navList = navItems.map((nav,index) => 
        <li key={index} className ="nav_menu_item option" onClick={closeMobileMenu}> 
            {/*set href for page navigation*/}
            <a href = {'#'+nav.toLowerCase()}>
                {nav}
            </a>
        </li>);

    return (
        <nav id = "navbar_menu" className="navbar secondary"> 
        {/*import logo component*/}
        <Logo />
        <ul className={click ? "nav-options active" : "nav-options"}>
        {navList}
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
            {click ? (
            <CloseMenu className="menu-icon" />
            ) : (
            <HamburgerMenu className="menu-icon" />
            )}
        </div>
    </nav>
    )
}

export default Navigation