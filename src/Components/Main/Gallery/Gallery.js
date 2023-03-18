import React from "react";

export default function Gallery() {
    return (
        <section id="gallery" class="gallery primary">
            <h2 class="section_header">Gallery</h2>
            <div class="gallery_container">
                <div class="gallery_card">
                    <iframe src="https://www.youtube.com/embed/7ahgosTZJHg?controls=0&loop=1" title="youtube video"></iframe>
                </div>
                <div class="gallery_card">
                    <iframe src="https://www.youtube.com/embed/7ahgosTZJHg?controls=0&loop=1" title="youtube video"></iframe>
                </div>
                <div class="gallery_card">
                    <iframe src="https://www.youtube.com/embed/7ahgosTZJHg?controls=0&loop=1" title="youtube video"></iframe>
                </div>
            </div>
        </section>
      );
}