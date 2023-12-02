import React from "react";
import kidshow from "./../assets/images/kids.png"

export default function SubPage5() {
    return (
        <>
            <div className="main-container-subpage2">
                <div id="text-container-subpage5" className="text-container-subpage2">
                    <h1>Create profiles for kids</h1>
                    <p>
                        Send children on adventures with their favourite characters in a space made just for them—free with
                        your membership.
                    </p>
                </div>
                <div id="mobile-container-subpag5" className="mobile-container-subpage2">
                    <img src={kidshow} alt="kidshow" />
                </div>
            </div>
            <div className="seperation"></div>
        </>
    );
}
