import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import {
  Apartment,
  Batiment,
  House,
  Villa1,
  Villa2,
  Villa3,
  Villa4,
} from "./PageProjects";
import { AboutPage, Contact, Home, Projects, Services } from "./Pages";
import { Counter } from "./components";
import ScrollToTop from "./hook/ScrollToTop";

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App ">
      {isLoading ? (
        <Counter />
      ) : (
        <>
          <AnimatePresence exitBeforeEnter initial={false}>
            <ScrollToTop />
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
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
        </>
      )}
    </div>
  );
};

export default App;
