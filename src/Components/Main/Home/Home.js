import React from "react";
import Photo1 from "./Photo1"
import Photo2 from "./Photo2"
import Photo3 from "./Photo3"

export default function Home() {
    return (
        <section class = "home_page">
                <div class="slideshow-container">
                    <div class="mySlides fade">
                    <img class="home_image" src="/images/background-1.jpg" alt="home 1"/>
                    <div class="text">
                        <h3>Strength to Strength</h3>
                        <p>Forward Jeffries returns from injury in near loss to Kiwis.</p>
                        <small>28 February 2023</small>
                    </div>
                    </div>
                
                    <div class="mySlides fade">
                    <img class="home_image" src="/images/background-2.jpg" alt="home 2"/>
                    <div class="text">
                        <h3>Flying High</h3>
                        <p>Penguins continue strong season performance with dominant win over rival Mariners.</p>
                        <small>23 February 2023</small>
                    </div>
                    </div>
                
                    <div class="mySlides fade">
                    <img class="home_image" src="/images/background-3.jpg" alt="home 3"/>
                    <div class="text">
                        <h3>Standing Strong</h3>
                        <p>Penguins show impressive display to local crowd ahead of mid-season break.</p>
                        <small>18 February 2023</small>
                    </div>
                    </div>
                
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                </div>
        </section>
      );
}