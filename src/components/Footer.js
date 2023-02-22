import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import logo1 from "../assets/img/logo2.png";

import logo2 from "../assets/img/logo3.png";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/LOGOBME.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
        <a href="https://www.bme.hu/?language=en"><img src={logo} alt="Logo" /></a>
          <a href="https://math.bme.hu/?language=en"><img src={logo2} alt="Logo" /></a>

           
           <a href="https://hsdslab.math.bme.hu/en.html/"><img src={logo1} alt="Logo" /></a>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">

            <p>HSDSLab © {(new Date().getFullYear())} All rights reserved<h10>First website by Ahmed Bannour et douha :)</h10></p>
            {/* <p>BME mathematics</p> */}
            

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
