import React, {useState} from "react";
import "./MailingList.css"

export default function MailingListForm() {
    // download terms function. Consider creating own component.
    const onClickTerms = () => {
  
        let  alink = document.createElement("a");   
        alink.href = "documents/terms-and-conditions.pdf";
        alink.download = "terms-and-conditions.pdf";
        alink.click();  
           }
    //download privacy function. Consider creating own component.
    const onClickPrivacy = () => {
  
        let  alink = document.createElement("a");   
        alink.href = "documents/Privacy-policy-template.docx";
        alink.download = "PrivacyPolicy.docx";
        alink.click();  
           }
    // set form submit message with string variable
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Welcome to the team ${name}! Keep an eye on your inbox for exciting news and developments.`);
    }

    return (
        <div className="partner_card sponsor_enquiries_card primary">
            <div className="sponsor_enquries">
            <form className="sponsor_form primary" name="mailing_list" onSubmit ={handleSubmit}>
                    <h3>Mailing List</h3>
                    <p>The Penguins Basketball club pride itself on the relationships that it holds with its fans and communities. Sign up to receive updates about our activities and how you can contribute to our winning culture.</p>
                    <input type="text" name="contact_name" id="sponsor_name" aria-label="sponsor name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required/>
                    <input type="email" name="email_address" id="sponsor_email" aria-label="sponsor email" placeholder="Enter your email" required/>
                    <input type="text" name="organisation" id="sponsor_org" aria-label="sponsor organisation" placeholder="Enter your organisation (optional)"/>
                    <label className="declaration"><input type="checkbox" name="declaration" id="sponsor_consent" aria-label="consent_checkbox" required/>I agree with the <span onClick={onClickTerms} className="decLink">Terms and Conditions</span> and to the <span onClick={onClickPrivacy} className="decLink">Privacy Policy</span>.</label>
                    <input type="hidden" name="enquiries_count"/>
                    <input className="sponsor_submit secondary" type="submit" aria-label="submit form" value="Submit"/>
                </form>
            </div>
        </div>
      );
}