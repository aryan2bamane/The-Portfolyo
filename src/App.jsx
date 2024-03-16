import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Other from "./pages/Other";
// import Main from "./components/Main";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="contact-me" element={<Contact />} />
          <Route path="story" element={<Other />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
