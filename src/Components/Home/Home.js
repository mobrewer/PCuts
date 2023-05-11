import React from "react"
import './Home.css'
import Temp from '../../Pictures/Temp.png'


export default function Home() {
    return (
        <div className="nav">
            <h1>Peter Puertas</h1>
            <div className="nav-list">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="events">Events</a></li>
                    <li><a href="appointment">Make and Appointement</a></li>
                    <li><a href="about">About</a></li>
                </ul>
            </div>
            <div className="temp">
                <img src={Temp} alt='' />
            </div>
        </div>
    )
}