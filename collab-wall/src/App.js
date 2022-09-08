import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Wall from "./Components/Wall";
import Input from "./Components/Input";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Wall />} />
        <Route path="/wall" element={<Wall />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </div>
  );
}

export default App;
