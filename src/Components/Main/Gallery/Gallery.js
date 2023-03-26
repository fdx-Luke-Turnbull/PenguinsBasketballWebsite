import React from "react";
import "./Gallery.css"

// store video gallery. Consider import of package or displaying videos as array.
export default function Gallery() {
    return (
        <section id="gallery" className="gallery primary">
            <h2 className="section_header">Gallery</h2>
            <div className="gallery_container">
                <div className="gallery_card">
                    <iframe src="https://www.youtube.com/embed/7ahgosTZJHg?controls=0&loop=1" title="youtube video"></iframe>
                </div>
                <div className="gallery_card">
                    <iframe src="https://www.youtube.com/embed/7ahgosTZJHg?controls=0&loop=1" title="youtube video"></iframe>
                </div>
                <div className="gallery_card">
                    <iframe src="https://www.youtube.com/embed/7ahgosTZJHg?controls=0&loop=1" title="youtube video"></iframe>
                </div>
            </div>
        </section>
      );
}