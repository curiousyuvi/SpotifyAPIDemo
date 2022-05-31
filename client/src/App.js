import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Callback from "./pages/Callback";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/callback" element={<Callback />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
