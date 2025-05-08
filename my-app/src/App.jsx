import React from "react";
import HomePage from "./view/HomePage";
import AboutPage from "./view/AboutPage";
import ContactPage from "./view/ContactPage";
import SkillsPage from "./view/SkillsPage";
import ProjectsPage from "./view/ProjectPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
