import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import CalltoAction from './components/CalltoAction/CalltoAction'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import Herosection from './components/Herosection/Herosection'
import Navbar from './components/Navbar/Navbar'
import OurClients from './components/OurClients/OurClients'
import Services from './components/Services/Services'

function App() {

  return (
    <>
      <Navbar />
      <Herosection />
      <CalltoAction />
      <AboutUs />
      <Services />
      <OurClients />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
