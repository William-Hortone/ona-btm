import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Services, Contact, Projects } from "./Pages";
import { Footer, Navbar } from "./containers";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import "./App.css";

const App = () => {
  const location = useLocation();
  return (
    <div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 0.75, ease: "easeOut" }}
      className="App "
    >
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
