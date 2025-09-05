import Homepage from './src/Pages/HomePage'
import Navbar from './src/components/NavBar'
import AboutUs from './src/Pages/About_Us'
import Services from './src/Pages/Services'
import Contact from './src/components/Contact';
import Footer from './src/Pages/Footer';

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
