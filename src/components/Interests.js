import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function About() {
  return (
    
  <section class="image-square-left bg-secondary">
    
    {/*Font Awesome Link */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  			
        <div class="container text-center" style={{color: '#D4AF37'}}>
        <h1 class="font-weight-light">Areas of Interest</h1>
        <hr/>
  				<div class="row font-weight-light">
          

          {/* Data Science Icon */}
  					<div class="col-md-3">
  						<i class="fa fa-database" style={{'font-size':'48px'}} aria-hidden="true"></i>
              <hr/>
              <h4>Data Science</h4>
              <p>We are in a world full of data so having the knowledge to harness it is key</p>
  					</div>

          {/*Real Estate Icon */}
            <div class="col-md-3">
              <i class="fa fa-home" style={{'font-size':'48px'}} aria-hidden="true"></i>
              <hr/>
              <h4>Real Estate</h4>
              <p>Real Estate has been a keen interest of mine when it comes to investing for the future</p>
            </div>

          {/*Software Development Icon */}
             <div class="col-md-3">
              <i class="fa fa-desktop" style={{'font-size':'48px'}} aria-hidden="true"></i>
              <hr/>
              <h4>Software Development</h4>
              <p>I love to create and bring ideas to fruition and solve problems with software if possible</p>
            </div>

          {/* Cooking Icon */}
             <div class="col-md-3">
              <i class="fa fa-cutlery" style={{'font-size':'48px'}}></i>
              <hr/>
              <h4>Cooking</h4>
              <p>I love to bring both ideas and taste under a single plate</p>
            </div>

          {/* Healthcare Icon */}
            <div class="col-md-3">
              <i class="fa fa-heartbeat" style={{'font-size':'48px'}}></i>
              <hr/>
              <h4>Healthcare</h4>
              <p>I'm thoroughly stimulated by the human body as well as coming up with unique solutions to issues
              in healthcare.
              </p>
            </div>

          {/* Track & Field Icon*/}
            <div class="col-md-3">
              <i class="fa fa-trophy" style={{'font-size':'48px'}}></i>
              <hr/>
              <h4>Track & Field</h4>
              <p>Exercise and althetics has always been a constant throughout my life</p>
            </div>

          {/* Data Analytics Icon*/}
            <div class="col-md-3">
              <i class="fa fa-line-chart" style={{'font-size':'48px'}}></i>
              <hr/>
              <h4>Data Analytics</h4>
              <p>I love taking existing data and figuring out what went well and what didn't in order 
                  to figure out how to improve the results next time</p>
            </div>

          {/* Travel Icon*/}
            <div class="col-md-3">
              <i class="fa fa-plane" style={{'font-size':'48px'}}></i>
              <hr/>
              <h4>Travel</h4>
              <p>I love being able to get up and explore parts of the world that I've never been to</p>
            </div>



  				</div>
  			</div>
        <br/>
  </section>
    
  );
}



