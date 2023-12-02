import React from "react";
import Navbar from "./Navbar";

export default function Homepage() {
    return (
        <>
            <div className="main-container">
                <Navbar />

                <div className="box"></div>
                <div className="box-text">
                    <span>Laughter. Tears. Thrills. Find it all on Netflix.</span>
                    <span>Endless entertainment starts at just ₹ 149. Cancel anytime.</span>
                    <span>Ready to watch? Enter your email to create or restart your membership.</span>

                    <div className="div-input">
                        <input id="input-email" className="input-btn" type="text" name="email" placeholder="Email address" />
                        <button id="btn-btn-red" >Get started</button>
                    </div>
                   
                </div>
                
             
            </div>
            <div className="seperation"></div>

            <div className="sub-container">
                
            </div>
        </>
    );
}
