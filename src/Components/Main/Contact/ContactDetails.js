import React from "react";

// contact details stored in component
export default function ContactDetails() {
    return (
        <div className="contactdetails">
            <ul className = "contact_details">        
                <li className = "email">
                    <i className="fa-regular fa-envelope fa-large contact_icon"></i><a className="contactemail" href="mailto:PenguinsBasketballAus@gmail.com">PenguinsBasketballAus@gmail.com</a>
                </li>
                <li className = "address">
                    <i className="fa-solid fa-location-dot contact_icon"></i><address className="address">74 Main Rd, Penguin TAS 7316</address>
                </li>
                <li className="phone">
                    <i className="fa-solid fa-phone contact_icon"></i>0428 123 456
                </li>
            </ul>
        </div>
      );
}