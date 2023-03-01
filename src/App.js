import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Services, Contact, Projects } from "./Pages";
import { Navbar } from "./containers";
import { AnimatePresence } from "framer-motion";
import {
  Villa1,
  Villa2,
  Villa3,
  Villa4,
  House,
  Apartment,
  Batiment,
} from "./PageProjects";
import "./App.css";

const App = () => {
  const location = useLocation();

  return (
    <div className="App ">
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/villa1" element={<Villa1 />} />
          <Route path="/villa2" element={<Villa2 />} />
          <Route path="/villa3" element={<Villa3 />} />
          <Route path="/villa4" element={<Villa4 />} />
          <Route path="/house" element={<House />} />
          <Route path="/apartment" element={<Apartment />} />
          <Route path="/batiment" element={<Batiment />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
