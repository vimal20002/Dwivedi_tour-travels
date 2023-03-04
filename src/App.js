import './App.css';
import Booking from './components/Booking';
import Footer from './components/Footer';
// import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
     <Navbar/>
     {/* <Home/>   */}
      <Booking/> 
     <Footer/>  
    </>
  );
}

export default App;
