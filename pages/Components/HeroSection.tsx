import React from 'react'
import Image from 'next/image'
import s1 from '../assets/1 (6).svg'
import s2 from '../assets/1 (2).svg'
import s3 from '../assets/1 (3).svg'
import s4 from '../assets/1 (4).svg'
import s5 from '../assets/1 (5).svg'
import s6 from '../assets/1 (1).svg'
import profile from '../assets/profile2.png'
import { Container } from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HeroSection = () => {
  return (
   <>
    <Container fluid className='position-relative'>
    <Carousel showStatus={false}>
    
        <div className='sliderImg'>
        <Image
        className="d-block image-responsive" 
          src={s3}
          alt="First slide"
          fill
        />
      </div>
   
   
      <div className='sliderImg'>
        <Image
        className="d-block" 
          src={s2}
          alt="First slide"
          fill
        />
      </div>
     

      <div className='sliderImg'>
        <Image
        className="d-block" 
          src={s1}
          alt="First slide"
          fill
        />
      </div>
    
  
      <div className='sliderImg'>
        <Image
        className="d-block" 
          src={s4}
          alt="First slide"
          fill
        />
      </div>
     
    
      <div className='sliderImg'>
        <Image
        className="d-block" 
          src={s5}
          alt="First slide"
          fill
        />
      </div>
 
      <div className='sliderImg'>
        <Image
        className="d-block" 
          src={s6}
          alt="First slide"
          fill
        />
      </div>
    
    </Carousel>
    {/* <div className="position-absolute top-0 start-50 mt-5">
    <Image src={profile} alt="Second slide"  width={50}  />
    </div> */}
    </Container>
   
  

   </>
  )
}

export default HeroSection
