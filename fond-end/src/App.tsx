import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './client/homepage';
import { Phone_page } from './client/phone_page/phone_page';

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path = "/" element={<Homepage/>}/>
      <Route path = "/homepage" element={<Phone_page/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
