import React from "react";

export default function MailingListForm() {
    return (
        <div class="partner_card sponsor_enquiries_card primary">
            <div class="sponsor_enquries">
            <form class="sponsor_form primary" name="sponsor_form">
                    <h3>Mailing List</h3>
                    <p>The Penguins Basketball club pride itself on the relationships that it holds with its fans and communities. Sign up to receive updates about our activities and how you can contribute to our winning culture.</p>
                    <input type="text" name="contact" id="sponsor_name" aria-label="sponsor name" placeholder="Enter your name" required/>
                    <input type="text" name="organisation" id="sponsor_org" aria-label="sponsor organisation" placeholder="Enter your organisation"/>
                    <input type="email" name="email address" id="sponsor_email" aria-label="sponsor email" placeholder="Enter your email" required/>
                    <label><input type="checkbox" name="declaration" id="sponsor_consent" aria-label="consent_checkbox" required/>I agree with the <a href="">Terms and Conditions</a> and to the <a href="">Privacy Policy</a>.</label>
                    <input type="hidden" name="enquiries_count"/>
                    <input class="sponsor_submit secondary" type="submit" aria-label="submit form" value="Submit"/>
                </form>
            </div>
        </div>
      );
}