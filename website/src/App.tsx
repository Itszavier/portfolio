/** @format */

import React from "react";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
