import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collections from "./components/Collections";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />}>
          Home
        </Route>

        <Route path="/collections" element={<Collections />}>
          Collections
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
