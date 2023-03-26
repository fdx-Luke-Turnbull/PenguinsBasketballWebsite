import React from "react";
import Description from "./PartnerDescription";

export default function Sponsor2() {
//store partner details for reuse / parse through function
  const PartnerName2 = `Style Authority`
  const PartnerDescription2 = `A boutique clothing store that offers a carefully curated selection of clothing, accessories, and home goods from up-and-coming designers. They prioritize sustainability and ethical production, and many of their pieces are made from natural and recycled materials. They also host monthly pop-up events featuring local artisans and makers.`
  
  return (
        <div className = "partner_card sponsor primary">
          <div className="partner_bio">
            <h3 className="partner_header">{PartnerName2}</h3>
            <p className="partner_desc"><Description text={PartnerDescription2}/></p>
          </div>
          <div>    
            <img className="partner_image" src="/images/Style.jpg" alt="partner_logo"/>
          </div>
        </div>
      );
}