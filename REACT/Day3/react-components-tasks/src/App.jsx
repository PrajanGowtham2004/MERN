import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import React from "react";
function App() {
  return (
    <div className="app">
      {/* Task 1 - Single Component */}
      <Header />

      {/* Task 2 - Multiple Components */}
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;