import React from "react";
import "./App.css";
import { CardImage, Consultation, HeadText } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, About, Services, Contact, Projects } from "./Pages";
import {
  Description,
  Footer,
  Header,
  Navbar,
  RecentProjects,
} from "./containers";

const App = () => {
  return (
    <div className="App ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
