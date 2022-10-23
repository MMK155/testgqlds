
import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from '../../src/App';   
import Dashboard from '../components/Dashboard';
import CreateCat from '../components/CreateCat';
// import Cats from '../components/Cats';
// import UpdateCat from '../components/UpdateCat';

const Routing = () => {
  return (
    <BrowserRouter>
    <Dashboard> 
     <Routes>

          
       
         
          <Route path="/create-cat" element={<CreateCat />} />
          {/* <Route path="/cats" element={<Cats />} /> */}
          {/* <Route path="/update-cat/:id" element={<UpdateCat />} /> */}
          
     </Routes>
     </Dashboard>
  </BrowserRouter>
  )
}
export default Routing;
