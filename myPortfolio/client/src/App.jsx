import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="portfolio_app">
        <Navbar />
        <main className="app_content" id="home">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Catch-all route to keep URL cleanly on single-page Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
