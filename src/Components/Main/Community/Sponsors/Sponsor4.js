import React from "react";
import Description from "./PartnerDescription";


export default function Sponsor4() {
  //store partner details for reuse / parse through function
  const PartnerName4 = `Richardson Automotive`
  const PartnerDescription4 =`A family-owned car dealership that offers a wide selection of new and used vehicles, with a commitment to customer satisfaction. The dealership's knowledgeable sales team and skilled service technicians ensure customers drive away happy with their purchase. They also offer competitive pricing and financing options.`  
  return (
      <div className="partner_card sponsor primary">
        <div className="partner_bio">
          <h3 className="partner_header">{PartnerName4}</h3>
          <p className="partner_desc"><Description text={PartnerDescription4}/></p>
        </div>
        <div>    
          <img className="partner_image" src="images/Sales.jpg" alt="partner_logo"/>
        </div>
      </div>
      );
}