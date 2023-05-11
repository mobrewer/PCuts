import React from "react"
import './Home.css'
import Temp from '../../Pictures/Temp.png'


export default function Home() {
    return (
        <div id="header">
            <div className="header container">
                <div className="nav-bar">
                    <div className="brand">
                        <a href="/">
                        <h1><span>P</span>eter <span>P</span>uertas</h1>
                        </a>
                    </div>
                    <div className="nav-list">
                        <div className="hamburger">
                            <div className="bar"></div>
                        </div>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="events">Events</a></li>
                            <li><a href="appointment">Make and Appointement</a></li>
                            <li><a href="about">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="temp">
                <img src={Temp} alt='' />
            </div>
        </div>
    )
}