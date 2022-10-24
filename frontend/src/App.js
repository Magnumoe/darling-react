import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Business from "./pages/Business";
import Positions from "./pages/Positions";

import Navbar from "./components/Navbar/Navbar";
  

const App = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  const handleNavbarActive = () => {
    navbarActive ? setNavbarActive(false) : setNavbarActive(true);
  }
  return (
    <main className="App">
      <Navbar navbarActive={navbarActive} setNavbarActive={handleNavbarActive} />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/business" element={<Business />} />
        <Route path="/positions" element={<Positions />} />
      </Routes>
      <Outlet />
    </main>
  );
}

export default App;
