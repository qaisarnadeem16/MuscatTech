import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'

import Image from 'next/image'
import c1 from '../assets/contact.jpg'

const ContactSection = () => {
  return (
    <>
    <Container fluid id='contact'>
          <Row>
            <Col md={6}>
              <form action="https://formspree.io/f/xlevlpqy" method="post" id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12 ">
                    <input className="contactus" placeholder="Name" type="type" name="Name"/>
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Email" type="type" name="Email"/>
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number"/>
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Select the Service" list="services" type="type" name="services"/>
                    <datalist id="services">
                      <option value="Air Conditioner Repairning"/>
                      <option value="Refrigerators Repairning"/>
                      <option value="CCTV and Network "/>
                      <option value="Cooking Range Repairning"/>
                      <option value="Electrician"/>
                      <option value="Washing Machine Repairning"/>
                    </datalist>


                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Full Address" type="type" name="address"/>
                  </div>
                 
                  <div className="col-md-12">
                    <button className="send_btn">Send</button>
                  </div>
                </div>
              </form>
          
            
            </Col>
            <Col md={6}>
              <div className="co_tru">
                <Image src={c1} alt="#"  style={{width:'100%', height:'100%'}}/>
              </div>
            </Col>
        
      </Row>
    </Container>
    </>
  )
}

export default ContactSection
