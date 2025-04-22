import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import AddJob from "./components/AddJob";
import EditJob from "./components/EditJob";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
  <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add" element={<AddJob />} />
    <Route path="/edit/:id" element={<EditJob />} />
  </Routes>
  </>
  );
}

