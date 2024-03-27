import { useState } from "react";
import "./styles/App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />
}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
