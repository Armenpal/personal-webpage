import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    
<section>
  			<div class="container">

      {/*Font Awesome Link */}
  			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  				<div class="row">
  					<div class="col-md-6">
  						<h4 class="uppercase">GET IN TOUCH</h4>
					<p>
					For any inquries regarding Armen Palvetzian please fill out the form to the right
					or send an email to <a href="mailto:palvetzian.a@gmail.com"> palvetzian.a@gmail.com </a> 
					and I will get back to you as soon as possible.
					</p>
					<hr/>

  					</div>

          {/* Connect with Armen Section */}
  					<div class="col-md-6">
  					<h4>Follow Armen</h4>

  					<p>Feel free to connect with me on any of the various
  					platforms down below to see what I'm up to on a day to day basis or if your
  					curious about what I'm currently working on feel free to click that follow button.
  					</p>

  					<hr/>

  							{/* Linkedin Icon */}
  							<a class="text-secondary" href="https://www.linkedin.com/in/armen-palvetzian-552056187/">
							<i class="fa fa-linkedin-square" style={{'font-size':'40px'}}></i>
							</a>
							
							{/* Instagram icon */} 
							<a class="text-secondary offset-1" href="https://www.instagram.com/armenvanpalvetzian/?hl=en">
							<i class="fa fa-instagram" style={{'font-size':'40px'}}></i>
							</a>

							{/* Github icon */} 
							<a class="text-secondary offset-1" href="https://github.com/Armenpal">
							<i class="fa fa-github" style={{'font-size':'40px'}}></i>
							</a>


					

					
  					</div>

  				</div>
  			</div>
  </section>

  

    
  );
}
