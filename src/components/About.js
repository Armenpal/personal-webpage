import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import ProfilePic from '../photos/profilepic.png';

export default function About() {
  return (
    
  <section class="image-square-left bg-dark">
  			<div class="container">
  				<div class="row">
  					<div class="col-md-4">
            <br/>
  						<Image src={ProfilePic} alt="image" fluid roundedCircle/>
  					</div>

  					<div class="col-md-6 offset-1">
            <br/>
  						<h3 class="text-align-center text-light font-weight-light">Hello There!</h3>
  						<p class="text-light font-weight-light" >
  						
  						My name is Armen Palvetzian and I am a software developer, a homecook and much more. Currently
              I'm aspiring to work in the healthcare field using my expertise in any role that suits my talents. Feel free
              to check out my resume if you would like to know more about my previous work experience or send me an email down below 
              so we can connect.
  						<br/><br/>
  						<b>Fun fact:</b> Ask me anything about cooking and I'll teach you my secrets to become a pro home cook.
  						</p>

  						<a href="https://docs.google.com/document/d/e/2PACX-1vQltEfkNoLmZ_CeI7b_JNPhqV5AOqOoAvPp80hGSItP_ttSGTHNd_MzbMvaqZFaQZgRpruauXSj_8nu/pub" class="btn btn-secondary btn-lg" role="button" download=
              "newfilename" >Resume</a>

  					</div>

  				</div>
  			</div>
        <br/>
  </section>
    
  );
}



