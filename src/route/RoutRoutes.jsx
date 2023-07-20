// import React from 'react'
import { Routes, Route } from "react-router-dom";
import RouteLayout from '../layout/RouteLayout';
import Home  from "../component/pages/Home";
import Login from "../component/pages/login";
import Protech from "./Protech";

export default function RoutRoutes() {
  return (
    <Routes>
        <Route path="/" element={<RouteLayout />}>
            <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<Protech />}>
           <Route path="/login" element={<Login />}/>
        </Route>
    </Routes>
  )
}
