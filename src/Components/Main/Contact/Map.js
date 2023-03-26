import React from "react";
// store map iframe as component for ease of access
export default function Map() {
    return (
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d375.7443888462005!2d146.07241597026587!3d-41.11367142507267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa7bc69a2124e4e3%3A0xce5b1034e64ad693!2sThe%20Big%20Penguin!5e0!3m2!1sen!2sau!4v1676615037860!5m2!1sen!2sau" style={{border:0, height:'100%', width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map Location"></iframe>
        </div>
      );
}