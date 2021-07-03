import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import St_Mikes from '../photos/st.mikes.JPG';
import St_Mikes_1 from '../photos/st.mikes_1.JPG';
import St_Mikes_2 from '../photos/st.mikes_2.JPG';
import St_Mikes_3 from '../photos/st.mikes_3.JPG';
import St_Mikes_4 from '../photos/st.mikes_4.JPG';
import IRIS_1 from '../photos/iris_1.png';
import IRIS_2 from '../photos/iris_2.png';
import IRIS_3 from '../photos/iris_3.png';
import Carousel from 'react-bootstrap/Carousel';
import './Portfolio.css';

export default function Portfolio(){

	
		return(
      <section class="bg-light">
      <div class="container text-center">
      <br/>
      <h1 class="font-weight-light">Professional Portfolio</h1>
      <hr/>
      <br/>
        <div class="row">

          {/*St. Mikes Portfolio */}
          <div class="col-md-6">
          <h3 class="font-weight-light">St. Michael's Hospital</h3>
          <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={St_Mikes}
                    alt="First slide"
                    fluid
                    rounded
                  />                
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={St_Mikes_1}
                    alt="Third slide"
                    fluid
                    rounded
                  />                
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={St_Mikes_2}
                    alt="Third slide"
                    fluid
                    rounded
                  />                
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={St_Mikes_3}
                    alt="Third slide"
                    fluid
                    rounded
                  />                
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={St_Mikes_4}
                    alt="Third slide"
                    fluid
                    rounded
                  />                
                </Carousel.Item>
              </Carousel>
           </div>    
          
        <br/>

    {/*IRIS Tech Protfolio */}
    <div class="col-md-6">
          <h3 class="font-weight-light">IRIS Technologies</h3>
          <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={IRIS_1}
                    alt="First slide"
                    fluid
                    rounded
                  />                
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={IRIS_2}
                    alt="Third slide"
                    fluid
                    rounded
                  />                
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={IRIS_3}
                    alt="Third slide"
                    fluid
                    rounded
                  />                
                </Carousel.Item>
              </Carousel>

           </div> 

        </div>
        <br/>
        

        <a href="https://github.com/Armenpal" class="btn btn-outline-secondary" role="button">Check out my Github!</a>
        <br/>
        <br/>
        </div>
       
		  </section>
		);
	}