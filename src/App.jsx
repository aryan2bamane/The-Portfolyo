import React from "react";
import "./App.css";
// import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Other from "./pages/Other";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="blog" element={<Blogs />} />
      <Route path="contact-me" element={<Contact />} />
      <Route path="story" element={<Other />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </>
  );
};

export default App;
