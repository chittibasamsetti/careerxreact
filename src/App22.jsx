import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login"
import { FaHome, FaPhone  } from "react-icons/fa";

export default function App22() {
  return (
    <div>
      <Router>
        <p>
          <Link to="/home"><FaHome />Home</Link> | <Link to="/about">About</Link> |
          <Link to="/contact"> <FaPhone /> Contact</Link> | <Link to="/login">Login</Link>
        </p>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}