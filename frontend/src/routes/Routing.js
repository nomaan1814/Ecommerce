import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react'
import AdminLogin from '../screens/Auth/AdminLogin';
import Products from "../screens/Dashboard/Products";
import Private from "./Private";
import Public from "./Public";
import Categories from "../screens/Dashboard/Categories";
import CreateCategory from "../screens/Dashboard/CreateCategory";

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/auth">
                <Route path="admin-login" element={<Public><AdminLogin/></Public>}/>
            </Route>
            <Route path="dashboard">
                  <Route path="products" element={<Private><Products /></Private>}/>
                  <Route path="categories" element={<Private><Categories /></Private>}/>
                  <Route path="categories/:page" element={<Private><Categories /></Private>}/>
                  <Route path="create-category" element={<Private><CreateCategory /></Private>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing
