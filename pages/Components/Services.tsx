import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import ac from '../assets/ac_logo.png'
import Electrician from '../assets/Electrician_logo.png'
import ref from '../assets/ref.png'
import was from '../assets/was.png'
import cctv from '../assets/cctv.png'
import range from '../assets/cookingrange.png'


const Services = () => {
  return (
    <>
     <section className="services" id="service">

    <Container className="services-boxes">
      <Row className="mb-3">

  

        <Link href="../AC_Services" className="col-md-2 col-mywidth col-4 pb-1 bg-top-card-home servicesLink">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center  mb-4 px-4 bg-card-home"
            style={{height: '210px'}}>
            <div className="d-inline-flex align-items-center justify-content-center  shadow rounded-circle mb-4"
              style={{width: '100px', height: '100px'}}>

              <Image src={ac} alt=""/>
            </div>
            <h4 className="font-weight-bold m-0">Air Conditioner</h4>
          </div>
        </Link>

        <Link href="../Electrician" className="col-md-2 col-mywidth col-4 pb-1 bg-top-card-home servicesLink">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center  mb-4 px-4 bg-card-home"
            style={{height: '210px'}}>
            <div className="d-inline-flex align-items-center justify-content-center  shadow rounded-circle mb-4"
             style={{width: '100px', height: '100px'}}>
              <Image src={Electrician} alt=""/>
            </div>
            <h4 className="font-weight-bold m-0" >Electrician</h4>
          </div>
        </Link>


        <Link href="../Refrigator" className="col-md-2 col-mywidth col-4 pb-1 bg-top-card-home servicesLink">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center  mb-4 px-4 bg-card-home"
            style={{height: '210px'}}>
            <div className="d-inline-flex align-items-center justify-content-center  shadow rounded-circle mb-4"
              style={{width: '100px', height: '100px'}}>
             <Image src={ref} alt=""/>
            </div>
            <h4 className="font-weight-bold m-0">Refrigerators</h4>
          </div>
        </Link>

  
      
     

        <Link href="../WashingMachine" className="col-md-2 col-mywidth col-4 pb-1 bg-top-card-home servicesLink">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center  mb-4 px-4 bg-card-home"
            style={{height: '210px'}}>
            <div className="d-inline-flex align-items-center justify-content-center  shadow rounded-circle mb-4"
              style={{width: '100px', height: '100px'}}>
               <Image src={was} alt=""/>
            </div>
            <h4 className="font-weight-bold m-0" >Washing Machines</h4>
          </div>
        </Link>
      
        <Link href="../CCTV" className="col-md-2 col-mywidth col-4 pb-1 bg-top-card-home servicesLink">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center  mb-4 px-4 bg-card-home"
            style={{height: '210px'}}>
            <div className="d-inline-flex align-items-center justify-content-center  shadow rounded-circle mb-4"
              style={{width: '100px', height: '100px'}}>
               <Image src={cctv} alt=""/>
            </div>
            <h4 className="font-weight-bold m-0">CCTV Network</h4>
          </div>
        </Link>
        <Link href="../Cooking_Range" className="col-md-2 col-mywidth col-4 pb-1 bg-top-card-home servicesLink">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center  mb-4 px-4 bg-card-home"
            style={{height: '210px'}}>
            <div className="d-inline-flex align-items-center justify-content-center  shadow rounded-circle mb-4"
              style={{width: '100px', height: '100px'}}>
               <Image src={range} alt=""/>
            </div>
            <h4 className="font-weight-bold m-0" >Cooking Rage</h4>
          </div>
        </Link>

   
     
     </Row>
</Container>
</section>
    </>
  )
}

export default Services
