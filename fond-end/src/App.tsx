import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './client/homepage';
import { Phone_page } from './client/phone_page/phone_page';
import { Hocit } from './client/demo/Hocit';
import { Admin } from './admin/admin';
import { ListProduct_Admin } from './admin/component/ListProduct_Admin';
import { NewProduct } from './admin/component/NewProduct';

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path = "/" element={<Homepage/>}/>
      <Route path = "/homepage" element={<Phone_page/>}/>
      <Route path = "/hocit" element={<Hocit/>}/>
      
      <Route path = "/admin" element={<Admin/>}>

      <Route path="listproduct" element={<ListProduct_Admin/>}/>
      <Route path="newproduct" element={<NewProduct/>}/>


      </Route>
      </Routes>
    </Router>


    
    </>
  )
}

export default App
