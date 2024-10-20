import { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './App.css';
import Videos1 from './Videos/job_project_videos.mp4';

function ContainerInsideExample() {
  const videoRef = useRef(null);

  useEffect(() => {
  
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []); 

  return (
    <div>
      <Navbar expand="lg" className="rounded-bottom bg-white">
        <Container>
          <Navbar.Brand href="#home">Romi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#job-seekers">For Employers</Nav.Link>
              <Nav.Link href="#employers">+Post a Job</Nav.Link>
              <Nav.Item>
                <Nav.Link href="#sign-up">
                  <Button className="rounded-pill job_portal_button">Sign Up</Button>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#log-in">
                  <Button className="rounded-pill job_portal_button">Log In</Button>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
      <video width="100%" autoPlay muted loop ref={videoRef} loading="lazy">
        <source src={Videos1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Container>
        <p className='fs-4'>New Jobs</p>
        <div class="shadow-sm p-5 mb-5 bg-white rounded">Larger shadow</div>
        <div class="shadow-lg p-5 mb-5 bg-white rounded">Larger shadow</div>
        <div class="shadow-lg p-5 mb-5 bg-white rounded">Larger shadow</div>

      </Container>
    </div>
  );
}

export default ContainerInsideExample;
