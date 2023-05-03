import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Appointment from './Components/Appointment/Appointment';

export default function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/appointment' element={<Appointment />} />
      </Routes>
    </div>
  )
};
