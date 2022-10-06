import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Wall from "./Components/Wall";
import Input from "./Components/Input";
import Default from "./Components/Default";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/wall" element={<Wall />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </div>
  );
}

export default App;
