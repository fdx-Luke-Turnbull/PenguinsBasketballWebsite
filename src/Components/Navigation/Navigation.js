import React from "react";
import Logo from "./Logo";

const Navigation = () => {
    const navItems = ["Schedule","Roster","Standings","Community","Gallery","Contact","Terms & Conditions","Privacy Policy"];
    const navList = navItems.map((nav,index) => <li key={index} class ="nav_menu_item">{nav}</li>);

    return (
        <nav id = "navbar_menu" class="navbar secondary">
        <Logo />
        <ul class="nav_menu">
        {navList}
        </ul>
        <div class="menu_icon">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
    )
}

export default Navigation