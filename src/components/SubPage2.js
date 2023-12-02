import React from "react";
import mobile from "./../assets/images/mobile.jpg"
import boxshot from "./../assets/images/boxshot.png"
import downloadingGif from "./../assets/images/download-icon.gif"
export default function SubPage2() {
    return (
        <>
            <div className="main-container-subpage2">
                <div className="text-container-subpage2">
                    <h1>Download your shows to watch offline</h1>
                    <p>Save your favourites easily and always have something to watch.</p>
                </div>
                <div className="mobile-container-subpage2">
                    <img src={mobile} alt="mobile" />

                    <div className="card-cont">
                        <div className="stranger-img">
                            <img src={boxshot} alt="boxshot" />
                        </div>
                        <div className="text">
                            <span id="strangerthings">Stranger <br />Things</span>
                            <span id="downloading-text">Downloading...</span>
                        </div>
                        <div data-uia="nmhp-card-animation-asset-custom" className="animation">
                            <img src={downloadingGif} alt="gif" />


                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="seperation"></div>
        </>
    );
}
