import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import CalltoAction from './components/CalltoAction/CalltoAction'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import Herosection from './components/Herosection/Herosection'
import Navbar from './components/Navbar/Navbar'
import OurClients from './components/OurClients/OurClients'
import Services from './components/Services/Services'
import Home from '../src/Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
    <Navbar isVisible={true}  />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  </>
    
  )
}

export default App
