import './App.css';
import About from './components/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import Register from './components/Register';


function App() {
  return (
    <>
     <Navbar/>
     <Register/>
     {/* <LogIn/> */}
     {/* <Home/>   */}
      {/* <Booking/>  */}
      {/* <About/> */}
      {/* <Contact/> */}
     <Footer/>  
    </>
  );
}

export default App;
