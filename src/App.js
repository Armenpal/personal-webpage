import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Interests from './components/Interests';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
  
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
 	

	 	

  

    
  );
}

export default App;
