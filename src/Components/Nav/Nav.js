import React from "react";
import { Link } from "react-router-dom";
export default function Nav({}) {
    return (
        <div classname={'NavLinks'}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/events'>Events</Link>
            <Link to='/appointment'>Make an Appointment</Link>
        </div>
    )
}