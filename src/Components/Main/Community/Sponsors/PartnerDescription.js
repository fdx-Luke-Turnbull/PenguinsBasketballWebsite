import React, { useState } from "react";
//text length limit / show more button function for partner description 
function Description (props) {
    const maxChars = 150;
    const [hidden, setHidden] = useState(true);
    if (props.text.length <= maxChars) {
        return (
          <span>{props.text}</span>
        );
      }
    
      return (
        <span>
          {hidden ? `${props.text.substr(0, maxChars).trim()} ...` : props.text}
          {hidden ? (
            <span onClick={() => setHidden(false)} className="expand"> show more</span>
          ) : (
            <span onClick={() => setHidden(true)} className="expand"> show less</span>
          )}
        </span>
      );
    }
export default Description;      