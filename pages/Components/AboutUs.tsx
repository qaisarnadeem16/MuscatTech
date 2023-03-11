import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import about from '../assets/about.svg'
import prfile from '../assets/profile2.png'
import prfile2 from '../assets/profile3.png'

const AboutUs = () => {
  return (
    <>
      <Container fluid className="aboutus " id="about">

        <Container className="pt-0 pt-lg-4">

          <Row className="align-items-cente">
            <div className="col-md-5">
              <div className="col-12 d-flex gap-1">
                <div className="col-6 ">
                  <Image src={prfile} className="img-fluid" alt="" />
                </div>
                <div className="col-6">
                  <Image src={prfile2} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-12 mt-1">
                <Image src={about} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-7  mt-lg-0 pl-lg-5">
              <h1 className="mb-4">We provide professional Services</h1>
              <h5 className="font-weight-medium font-italic mb-4">
                1.We are repairing installing servicing shifting all type Air conditions. <br />
                2.we are repairing all type refrigerators,freezers, water coolers.<br />
                3.we are repairing all kind of full automatic and normal washing machines,dryers and dish washer.<br />
                4.we are repairing service cooking range, firon all type.<br />
                5.we are installing CCTV, biometric fingerprint mashine, networking, wifi range extender,new WiFi connecti</h5>
              <h6 className="font-weight-medium font-italic">
                <ul>
                  <li> Air Conditioner </li>
                  <li> Refrigerators </li>
                  <li> Washing Machines </li>
                  <li> CCTV & Networking </li>
                  <li> Cooking Range</li>
                  <li>All other Electrician services</li>
                </ul>
              </h6>
              <h4 className=" font-weight-medium font-italic">
                We are also taking Contract Maintanece monthly basis</h4>
              <h2 className="text-danger">Special Offer</h2>
              <h5 className="text-uppercase" >special discount for hotel restaurant school and
                masques</h5>
              <Link href="#contact">  <div className="btn " >Contact Us  </div></Link>
            </div>



          </Row>

        </Container>
      </Container>

    </>
  )
}

export default AboutUs
