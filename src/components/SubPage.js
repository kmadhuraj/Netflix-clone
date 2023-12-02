import React from 'react'
import tvpng from './../assets/images/tv.png'
import videotv from './../assets/video/video-tv-in-0819.m4v'
export default function SubPage() {
  return (
    <>
    <div className="main-container2">
      <div className="text-container">
        <h1>Enjoy on your TV</h1>
        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
      </div>
      <div className="tv-container">
        <img src={tvpng} alt="tv"  />
        <video  controls autoPlay muted>
        <source src={videotv} type="video/mp4"/> 
        </video>
        

      </div>
    </div>
    <div className="seperation"></div>
    </>
  )
}
