import React from "react";
import "./style/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Page404 from "./pages/Page404";
import Homepage from "./pages/Homepage";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
          <Route path="projects" element={<Project />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
