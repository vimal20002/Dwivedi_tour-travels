import './App.css';
import React from 'react';
import About from './components/About';
import Account from './components/Account';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import Register from './components/Register';
import {Switch,Route } from 'react-router-dom';

function App() {
  return (
    <>

       <Switch>
      <React.Fragment>
    <Navbar/>
    <Route exact path='/' ><Home/></Route>
    <Route exact path='/bookcabs' ><Booking/></Route>
    <Route exact path='/cargo' ><Booking/></Route>
    <Route exact path='/about' ><About/></Route>
    <Route exact path='/contact' ><Contact/></Route>
    <Route exact path='/login' ><LogIn/></Route>
    <Route exact path='/register' ><Register/></Route>
    <Route exact path='/account' ><Account/></Route>
     <Footer/>  
    </React.Fragment>
    </Switch>
    
     
    </>
  );
}

export default App;
