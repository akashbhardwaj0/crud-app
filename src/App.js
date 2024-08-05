import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Navbar from "./components/Navbar";
import UpdateData from "./components/UpdateData";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} /> 
          <Route exact path="/update/:id" element={<UpdateData />} />       
        </Routes>
      </div>
    </BrowserRouter>
  );
}
