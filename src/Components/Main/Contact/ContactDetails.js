import React from "react";

export default function ContactDetails() {
    return (
        <div className="contactdetails">
            <ul class = "contact_details">        
                <li class = "email">
                    <i class="fa-regular fa-envelope fa-large contact_icon"></i><a class="contactemail" href="mailto:PenguinsBasketballAus@gmail.com">PenguinsBasketballAus@gmail.com</a>
                </li>
                <li class = "address">
                    <i class="fa-solid fa-location-dot contact_icon"></i><address class="address">74 Main Rd, Penguin TAS 7316</address>
                </li>
                <li class="phone">
                    <i class="fa-solid fa-phone contact_icon"></i>0428 123 456
                </li>
            </ul>
        </div>
      );
}