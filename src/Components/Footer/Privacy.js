import React from "react";

export default function Privacy() {
    //download terms document
    const onClickTerms = () => {
  
        let  alink = document.createElement("a");   
        alink.href = "/documents/terms-and-conditions.pdf";
        alink.download = "terms-and-conditions.pdf";
        alink.click();  
           }
    // download privacy document
    const onClickPrivacy = () => {
  
        let  alink = document.createElement("a");   
        alink.href = "/documents/Privacy-policy-template.docx";
        alink.download = "PrivacyPolicy.docx";
        alink.click();  
           }
    // build footer section
    return (
        <div className="footer_endpage_container primary">
        <div className = "legal">
            <ul className="policies">
                <li className="terms" onClick={onClickTerms}>Terms & Conditions</li>
                <li className = "privacy" onClick={onClickPrivacy}>Privacy Policy</li>
            </ul>
            <small>&copy; Created by Luke Turnbull 2023. All rights reserved.</small>    
        </div>
    </div>
      );
}