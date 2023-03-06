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
    <Route path='/' element={<Home/>}></Route>
    <Route path='/bookcabs' element={<Booking/>}></Route>
    <Route path='/cargo' element={<Booking/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/login' element={<LogIn/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/account' element={<Account/>}></Route>
    </React.Fragment>
    </Switch>

     <Footer/>  
    
     
    </>
  );
}

export default App;
