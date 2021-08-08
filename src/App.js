import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carros from "./Components/Carros";
import Sobre from "./Components/Sobre";
import "./App.css";
import Carro from "./Components/Carro";
import Header from "./Components/Header";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Carros />}></Route>
            <Route path="sobre" element={<Sobre />}></Route>
            <Route path="carro/:id" element={<Carro />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
