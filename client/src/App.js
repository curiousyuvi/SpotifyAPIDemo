import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Callback from "./pages/Callback";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TokenProvider from "./providers/TokenProvider";

function App() {
  return (
    <>
      <TokenProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/callback" element={<Callback />} />
          </Routes>
        </BrowserRouter>
      </TokenProvider>
    </>
  );
}

export default App;
