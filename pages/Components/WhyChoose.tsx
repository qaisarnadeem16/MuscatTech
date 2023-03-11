import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Image from 'next/image'
import pic from '../assets/why2.png'
import pic1 from '../assets/why1.png'

const WhyChoose = () => {
  return (
   <>
     <Container>
          <Row>
        
            <div className="col-md-12">


              <div className="row">
                <div className="col-md-5">
                  <div className="choose_box">
                    <i><Image src={pic} className="py-3" alt="#" /></i>
                    <h3>Best Quality Service</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page
                      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                      distribution of letters,</p>
                  
                  </div>
                </div>
                <div className="col-md-5 offset-md-2">
                  <div className="choose_box">
                  <i><Image src={pic1} className="py-3" alt="#" /></i>
                    <h3>Affordable Pricing</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page
                      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                      distribution of letters,</p>
                   
                  </div>
                </div>
                
              </div>

            </div>
         
          </Row>
        </Container>
   </>
  )
}

export default WhyChoose
