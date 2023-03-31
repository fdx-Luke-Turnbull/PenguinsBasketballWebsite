import React from "react";
import Description from "./PartnerDescription";

export default function Sponsor3() {
  //store partner details for reuse / parse through function
  const PartnerName3 = `Louie's Country Bakehouse`;
  const PartnerDescription3 = `A local bakery that specializes in artisan breads and pastries, with a warm and inviting atmosphere. Fresh-baked goods are made daily, including whole loaves, pies and cakes, and served with a smile. Customers rave about the baked goods' quality and the friendly service.`
  
  return (
      <div className = "partner_card sponsor primary">
        <div className="partner_bio">
          <h3 className="partner_header">{PartnerName3}</h3>
          <p className="partner_desc"><Description text={PartnerDescription3}/></p>
        </div>
        <div>    
          <img className="partner_image" src="images/bakery.jpg" alt="partner_logo"/>
        </div>
      </div>
      );
}