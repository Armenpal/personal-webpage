import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import City from '../photos/background.png';
import Image from 'react-bootstrap/Image';
import './Nav.css';

export default function Nav(){

	
		return(
<section >
    <div class="row">
    <div class="thumbnail text-center">
      <Image src={City} fluid />
      <div class="caption" >

      <h1 class="text-light font-weight-light">Armen Palvetzian</h1>
      <h4 class="text-light font-weight-light">Software Developer / Investor </h4>
      </div>
    </div>
</div>
</section>




     
      
       
		  
		);
	}