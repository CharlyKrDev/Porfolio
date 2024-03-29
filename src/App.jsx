import { useState } from "react";
import "./styles/App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { AboutMe } from "./components/AboutMe/AboutMe";



function App() {
  return (

    <>
    <NavBar/>
    <AboutMe/>

    </>
  );
}

export default App;
