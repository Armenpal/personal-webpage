import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Interests from './components/Interests';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
  
    <div class="main-container">
     
 	<Nav/>
 	<About/>
 	
 	<Interests/>
 	<Portfolio/>
 	<br/>
 	<Contact/>
 	<br/>
 	<Footer/>
    </div>
 	

	</Router> 	

  

    
  );
}

export default App;
