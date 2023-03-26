import React from "react";
import Map from "./Map";
import ContactDetails from "./ContactDetails";
import "./Contact.css"

export default function Contact() {
    return (
        <section id="contact" className="contact secondary">
            <h2 className="section_header">Contact</h2>
            <div className = "contact_container primary">
                {/*import map iframe*/}
                <Map />
                {/*import contact details component*/}
                <ContactDetails />
            </div>
        </section>
      );
}