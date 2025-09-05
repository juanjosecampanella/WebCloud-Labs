import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/HomePage'
import Navbar from './components/NavBar'
import AboutUs from './Pages/About_Us'
import Services from './Pages/Services'
import Contact from './components/Contact';
import Footer from './Pages/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </>

  )
}

export default App
