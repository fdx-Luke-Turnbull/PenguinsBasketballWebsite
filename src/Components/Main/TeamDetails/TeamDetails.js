import React from "react";

//store icon of each team for reuse in multiple sections/
function GetRowIcon(teamName) {
    switch(teamName) {
        case 'Dragons':
            return <i className="fa-solid fa-dragon team_icon"></i>

        case 'Flyers':
            return <i className="fa-solid fa-feather team_icon"></i>

        case 'Kiwis':
            return <i className="fa-solid fa-kiwi-bird team_icon"></i>

        case 'Penguins':
            return <i className="fa-regular fa-snowflake team_icon"></i>

        case 'Red Backs':
            return <i className="fa-solid fa-spider team_icon"></i>

        case 'Pistols':
            return <i className="fa-solid fa-shrimp team_icon"></i>

        case 'Stallions':
            return <i className="fa-solid fa-horse-head team_icon"></i>

        case 'Fire':
            return <i className="fa-solid fa-fire-flame-curved team_icon"></i>

        case 'Crows':
            return <i className="fa-solid fa-crow team_icon"></i>

        case 'Mariners':
            return <i className="fa-solid fa-anchor team_icon"></i>

        case 'Thunder':
            return <i className="fa-solid fa-bolt team_icon"></i>

        case 'Comets':
            return <i className="fa-solid fa-meteor team_icon"></i>

        default:
            return null;
    }
}

  export default function RowwithIcon({teamName}) {

    // return team icons
    const icon = GetRowIcon(teamName);
        
    return (
        <span style={{display:"inline"}}>
            {icon}
        </span>
    )
    
  };