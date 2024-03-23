import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import HomePage from "./pages";
import Inventory from "./pages/inventory";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout component={<HomePage />} header footer />} />
        <Route exact path="/inventory" element={<Layout component={<Inventory />} header footer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
