import React from "react";

import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import Schedule from "./Schedule/Schedule";
import Roster from "./Roster/Roster";
import Standings from "./Standings/Standings";
import Community from "./Community/Community";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";


export default function Main() {
  return (
    <div className="main">
        <Home />
        <AboutUs />
        <Schedule />
        <Roster />
        <Standings />
        <Community />
        <Gallery />
        <Contact />
    </div>
  );
} 