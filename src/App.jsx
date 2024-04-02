import { useState } from "react";
import "./styles/App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";


function App() {
  return (

    <>
  <BrowserRouter>

  <Layout/>

  
  </BrowserRouter>

    </>
  );
}

export default App;
