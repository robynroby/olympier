import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import CalltoAction from './components/CalltoAction/CalltoAction'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import Herosection from './components/Herosection/Herosection'
import Navbar from './components/Navbar/Navbar'
import OurClients from './components/OurClients/OurClients'
import Services from './components/Services/Services'
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
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </Router>
    <Herosection />
    <CalltoAction />
    <OurClients />
    <ContactUs />
    <Footer />
  </>
    
  )
}

export default App
