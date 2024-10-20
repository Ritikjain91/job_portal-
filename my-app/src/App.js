import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './App.css'

function ContainerInsideExample() {
  return (
    <Navbar expand="lg" className="rounded-bottom bg-white">
      <Container>
        <Navbar.Brand href="#home">Romi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#job-seekers">For Employers</Nav.Link>
            <Nav.Link href="#employers">+post a job</Nav.Link>
            <Nav.Item>
              <Nav.Link href="#sign-in">
                <Button className="rounded-pill job_portal_button">Sign up</Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#sign-up">
                <Button  className="rounded-pill job_portal_button">logn in</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;
