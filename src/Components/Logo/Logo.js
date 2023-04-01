import React from "react";
import {animateScroll as scroll} from 'react-scroll'

export default function Logo() {
// mimic a tag to reload page
    function scrollToTop() {
        scroll.scrollToTop({
            spy:true, 
            smooth:true, 
            duration:300});
      }
// return logo containter for reuse
    return (
        <div className="logo">
            <span className="menu_logo" title="Penguins Basketball" onClick={scrollToTop}><i className="fa-regular fa-snowflake logo fa-xl"><span className="logo_title">PENGUINS</span></i></span>
        </div>
      );
}

