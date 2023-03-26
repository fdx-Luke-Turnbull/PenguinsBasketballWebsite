import React from "react";
import Description from "./PartnerDescription";

export default function Sponsor1() {
    //store partner details for reuse / parse through function
    const PartnerName1 = `Specialty Roasters`
    const PartnerDescription1 = `A local coffee shop that specializes in locally roasted and ethically sourced, fair trade coffee beans. With its warm atmosphere and friendly baristas, it's a popular hangout spot for both locals and visitors. They also offer a rotating selection of baked goods made fresh daily.`;
    
    return (
        <div className = "partner_card sponsor primary">
            <div className="partner_bio">
            <h3 className="partner_header">{PartnerName1}</h3>
            <p className="partner_desc"><Description text={PartnerDescription1}/></p>
        </div>
        <div className="partner_image">    
            <img className="partner_image" src="/images/coffeebeans.jpg" alt="partner_logo"/>
        </div>
        </div>
      );
}