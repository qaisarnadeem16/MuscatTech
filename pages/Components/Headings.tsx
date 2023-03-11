import React from 'react'
import { Container } from 'react-bootstrap'

type heading={
    head1: string,
    head2: string
}
function Headings(props:heading) {
  return (
    <>
     <Container className="py-md-5 py-1">
      <div className="container heading">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white head1">
            {props.head1}</h1>
          <h1 className="position-absolute text-uppercase head2">{ props.head2}</h1>
          </div>
          </div>
        </Container>
    </>
  )
}

export default Headings
