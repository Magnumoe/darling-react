// imported packages
import React, { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// imported pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Business = lazy(() => import("./pages/Business"));
const Positions = lazy(() => import("./pages/Positions"));
const Footer = lazy(() => import("./components/Footer/Footer"));


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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index path="/" element={<Home handlePageChange={handlePageChange} />} />
          <Route path="/about" element={<About handlePageChange={handlePageChange} />} />
          <Route path="/contact" element={<Contact handlePageChange={handlePageChange} />} />
          <Route path="/*" element={<NotFound handlePageChange={handlePageChange} />} />
          <Route path="/business" element={<Business handlePageChange={handlePageChange} />} />
          <Route path="/positions" element={<Positions handlePageChange={handlePageChange} />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
