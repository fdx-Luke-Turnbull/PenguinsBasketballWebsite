import React from "react";

//basic text block for mission statement/about us
export default function AboutUs() {
    return (
        <section className = "about secondary"> 
            <h1 className="about_us">Our mission</h1>
            <div className="about_us_container">
                <p className="about_us_bio">The Penguins are dedicated to promoting a love of the game and a sense of community through their determination, competetiveness, and teamwork on and off the court. We value togetherness above all else and want to ensure that all peoples feel welcome and respected at our games. </p>
            </div>
        </section>
      );
}