import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Projects from "./pages/Projects"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
