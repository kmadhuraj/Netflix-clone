import React from "react";
import pc from "./../assets/images/pc.png"
import videodevice from "./../assets/video/video-devices-in.m4v"


export default function SubPage3() {
    return (
        <>
            <div className="main-container2">
                <div className="text-container">
                    <h1>Watch everywhere</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="tv-container">
                    <img src={pc} alt="tv" />
                    <video id="subpage3-vdeo"controls autoPlay muted>
                        <source src={videodevice} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="seperation"></div>
        </>
    );
}
