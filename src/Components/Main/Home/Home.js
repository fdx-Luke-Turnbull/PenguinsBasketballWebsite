import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Home.css"

export default function Home() {
    return (
        //store images in carousel for interactivity
        <Carousel infiniteLoop autoPlay interval="5000" showThumbs={false} showIndicators={false} showStatus={false}>
        {/*Container 1*/}
        <div className="mySlidesContainer">
            <img src="images/background-1.jpg" alt='carouselbackground1'className="mySlides"/>
            <div className="text">
                <h3>Strength to Strength</h3>
                <p>Forward Jeffries returns from injury in near loss to Kiwis.</p>
                <small>28 February 2023</small>
            </div>
        </div>
        {/*Container 2*/}
        <div className="mySlidesContainer">
            <img src="images/background-2.jpg" alt='carouselbackground2'className="mySlides"/>
            <div className="text">
                <h3>Flying High</h3>
                <p>Penguins continue strong season performance with dominant win over rival Mariners.</p>
                <small>23 February 2023</small>
            </div>
        </div>
        {/*Container 3*/}
        <div className="mySlidesContainer">
            <img src="images/background-3.jpg" alt='carouselbackground3'className="mySlides"/>
            <div className="text">
                <h3>Standing Strong</h3>
                <p>Penguins show impressive display to local crowd ahead of mid-season break.</p>
                <small>18 February 2023</small>
            </div>
        </div>
    </Carousel>
    )
}