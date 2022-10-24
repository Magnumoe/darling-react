// imported packages
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// imported pages and components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Business from "./pages/Business";
import Positions from "./pages/Positions";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
  

const App = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [Page, setPage] = useState("Home");

  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
  };

  const handleNavbar = () => {
    navbarActive ? setNavbarActive(false) : setNavbarActive(true);
  }
  return (
    <div className="App">
      <Navbar navbarActive={navbarActive} setNavbarActive={handleNavbar} />
      <Header title={Page} handleHamburger={handleNavbar} />
      <Routes>
        <Route index path="/" element={<Home handlePageChange={handlePageChange} />} />
        <Route path="/about" element={<About handlePageChange={handlePageChange} />} />
        <Route path="/contact" element={<Contact handlePageChange={handlePageChange} />} />
        <Route path="/*" element={<NotFound handlePageChange={handlePageChange} />} />
        <Route path="/business" element={<Business handlePageChange={handlePageChange} />} />
        <Route path="/positions" element={<Positions handlePageChange={handlePageChange} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
