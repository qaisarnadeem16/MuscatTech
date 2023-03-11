import Link from 'next/link'
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap'



const Header=()=>{
    return(
        <>  
     <Navbar  expand="md">
      <Container className='navbar1'>
        
        <Navbar.Brand className='logo '><Link href='/' className='text-decoration-none'><span className='t1'>Muscat <span> AC </span> Technician</span></Link>
</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="">
            <Nav.Link className='link active' href="/" >Home</Nav.Link>
            <Nav.Link  className='link' href="#about" >About</Nav.Link>
            <Nav.Link className='link' href="#gallery" >Gallery</Nav.Link>
            <Nav.Link className='link' href="#contact">Contact</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="../AC_Services">Air Contioner </NavDropdown.Item>
              <NavDropdown.Item href="../CCTV">Electrician</NavDropdown.Item>
              <NavDropdown.Item href="../Refrigator">Regfrigetor</NavDropdown.Item>
              <NavDropdown.Item href="../WashingMachine">Washing Machine</NavDropdown.Item>
              <NavDropdown.Item href="../Cooking_Range">Cooking Range</NavDropdown.Item>
              <NavDropdown.Item href="../CCTV">CCTV,Network </NavDropdown.Item>
              <NavDropdown.Item href="../CCTV">Wifi range extender</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}
export default Header