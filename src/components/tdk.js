import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ShowMoreText from "react-show-more-text";


export const TDK = () => {

 

  return (
    <section className="tdk" id="tdk">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Project Laboratory vs Master’s thesis vs TDK</h2>
                
                <h6>Project Laboratory is similar to a master’s thesis project, but it has some major differences:
</h6>
<ul>

<li><h6>Project Laboratory is a team project, while the master’s thesis must be individual work.</h6></li>
<li><h6>Here the research question comes from outside of mathematics (but the solution requires
advanced mathematical tools), however, the master’s thesis frequently solves an intrinsically
motivated problem in mathematics</h6></li>
<li><h6>Here the paper must be a lot shorter than the length of a master’s thesis. This paper is
structured in a more research article-like way, with a focus on the original results.</h6></li>
<li><h6>Because of the above differences (in particular the team vs. individual nature), we strongly
recommend a clear distinction is made between the master’s thesis and the project
laboratory. Overlap is only possible in special cases and with special permission.</h6></li></ul>
<h6>However, students are strongly encouraged to submit a TDK (=Students' Scientific Conference) paper on the topic of the project laboratory. </h6>


      

              </div>} 
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
