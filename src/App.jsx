import { useState } from "react";
import "./styles/App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (

    <>
  <BrowserRouter>
  <ToastContainer />

  <Layout/>
 
  </BrowserRouter>

    </>
  );
}

export default App;
