import React from "react";

export default function Logo() {
// mimic a tag to reload page
    function refreshPage() {
        window.location.reload(false);
      }
// return logo containter for reuse
    return (
        <div className="logo">
            <span className="menu_logo" title="Penguins Basketball" onClick={refreshPage}><i className="fa-regular fa-snowflake logo fa-xl"><span className="logo_title">PENGUINS</span></i></span>
        </div>
      );
}

