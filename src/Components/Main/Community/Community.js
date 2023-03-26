import React from "react";

//import all sponsor components
import Sponsor1 from "./Sponsors/Sponsor1";
import Sponsor2 from "./Sponsors/Sponsor2";
import Sponsor3 from "./Sponsors/Sponsor3";
import Sponsor4 from "./Sponsors/Sponsor4";
import "./Community.css"

//import mailing list form component
import MailingList from "./MailingList";

export default function Community() {
    return (
        <section id="community" className="partnerships secondary">
            <h2 className="section_header">Community</h2>
            <div id = "partnerships_enquiries_section">
                <div className="partner_card_container">
                    <Sponsor1 />
                    <Sponsor2 />
                    <Sponsor3 />
                    <Sponsor4 />
                    <MailingList />
                </div>
            </div>
        </section>
      );
}