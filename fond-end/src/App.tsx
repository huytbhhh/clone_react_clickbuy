import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './client/homepage';
import { Phone_page } from './client/phone_page/phone_page';
import { Admin } from './admin/admin';
import { ListProduct_Admin } from './admin/component/ListProduct_Admin';
import { NewProduct } from './admin/component/NewProduct';
import { Iphone } from './client/menu_category/Iphone';
import { Samsung } from './client/menu_category/Samsung';
import { Table } from './client/menu_category/Table';
import { Laptop } from './client/menu_category/Laptop';
import { Dongho } from './client/menu_category/Dongho';
import { Hangcu } from './client/menu_category/Hangcu';
import { Phukien } from './client/menu_category/Phukien';
import { Amthanh } from './client/menu_category/Amthanh';
import { Suachua } from './client/menu_category/Suachua';
import { Sigin } from './client/sigin_sigup/Sigin';
import { Sigup } from './client/sigin_sigup/sigup';
import { Detail } from './client/detail/Detail';
import { Cart } from './client/cart/cart';
import { UseEffect } from './demo/UseEffect';


import { Info_user } from './client/info-user/Info_user';
import { Timer } from './demo/Timer';
import { Hocit } from './demo/admin';

function App() {

  return (
    <>
    <Router>
      <Routes>
        
      <Route path = "/" element={<Homepage/>}/>
      <Route path = "/homepage" element={<Phone_page/>}/>
      <Route path = "/iphone" element={<Iphone/>}/>
      <Route path = "samsung" element={<Samsung/>}/>
      <Route path="/table" element={<Table/>}/>
      <Route path="laptop" element={<Laptop/>}/>
      <Route path="dongho" element={<Dongho/>}/>
      <Route path="hangcu" element={<Hangcu/>}/>
      <Route path="phukien" element={<Phukien/>}/>
      <Route path="amthanh" element={<Amthanh/>}/>
      <Route path="suachua" element={<Suachua/>}/>
      <Route path="sigin" element={<Sigin/>}/>
      <Route path='sigup' element={<Sigup/>}/>
      <Route path='detail/:id' element={<Detail/>}/>
      <Route path = "hocit" element={<Hocit/>}/>
      <Route path = "user" element={<Info_user/>}/>

      
      <Route path = "cart" element={<Cart/>}/>





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
