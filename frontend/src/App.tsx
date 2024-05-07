/** @format */
import Home from "./components/home";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Footer from "./components/footer";
import NotFound from "./components/404";
import Record from "./components/records";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Record />} path="/records" />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
