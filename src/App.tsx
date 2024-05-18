import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Tranhuy } from './Tranhuy';

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path = "/ok" element={<Tranhuy/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
