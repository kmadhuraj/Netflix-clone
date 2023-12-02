import React from "react"
import NetflixLogo from "./../assets/images/Netflix-Logo.svg";
export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <span><img  src={NetflixLogo} alt="img"  /></span>
                <div className="btn">
                    <button className="btn-nav">English</button>
                    <button id="red-btn">Sign in</button>
                </div>
            </nav>
        </div>
    );
}
