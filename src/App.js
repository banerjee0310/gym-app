import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";



import "./App.css";
import Navbar from "./components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Footer from "./components/Footer";


export const App = () => {
  return (
    // <div><Navbar/></div>
    <Box width="400px" sx={{width:{x1:'1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
