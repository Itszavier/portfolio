/** @format */
import Home from "./components/home";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Footer from "./components/footer";
import NotFound from "./components/404";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
