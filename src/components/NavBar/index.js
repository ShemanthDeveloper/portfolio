import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./nav.css"

function OffcanvasExample() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 custom-navbar">
          <Container fluid>
            <Navbar.Brand className='nav-text-color1 portfolio-heading'  href="/">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="custom-navbar color"

            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='nav-text-color' id={`offcanvasNavbarLabel-expand-${expand}`}>
                  SHK Portfolio
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ta">
                  <Nav.Link href="/"    className='nav-text-color'>Home</Nav.Link>
                  <Nav.Link href='/about'   className='nav-text-color' >About</Nav.Link>
                  <Nav.Link href="/skills" className='nav-text-color' >Skills</Nav.Link>
                  <Nav.Link href="/projects" className='nav-text-color' >Projects</Nav.Link>
                  <Nav.Link href="/contact"  className='nav-text-color' >Contact</Nav.Link>  
                    
                </Nav>
                
                  
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;