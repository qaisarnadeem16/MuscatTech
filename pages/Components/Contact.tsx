import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import p1 from '../assets/howToConnect.svg'

const Contact = () => {
  return (
    
    <>
     <Container>
          <Image src={p1} style={{width:'100%'}} alt=""/>
        </Container>
    </>
  )
}

export default Contact
