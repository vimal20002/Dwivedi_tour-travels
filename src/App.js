import './App.css';
import About from './components/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
     <Navbar/>
     {/* <Home/>   */}
      {/* <Booking/>  */}
      {/* <About/> */}
      <Contact/>
     <Footer/>  
    </>
  );
}

export default App;
