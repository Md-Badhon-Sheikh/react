import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Blog from "./pages/Blog";
import Footer from "./component/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import useState from "./pages/useState";

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        
       
      </Routes>
      <useState/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
