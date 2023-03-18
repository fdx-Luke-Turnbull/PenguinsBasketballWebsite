import React from "react";
import Map from "./Map";
import ContactDetails from "./ContactDetails";

export default function Contact() {
    return (
        <section id="contact" class="contact secondary">
            <h2 class="section_header">Contact</h2>
            <div class = "contact_container primary">
                <Map />
                <ContactDetails />
            </div>
        </section>
      );
}