import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carros from "./Components/Carros";
import Sobre from "./Components/Sobre";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="content">
          <Routes>
            <Route path="/" element={<Carros />}></Route>
            <Route path="sobre" element={<Sobre />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
