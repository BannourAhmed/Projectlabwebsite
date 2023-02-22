import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import headerImg10 from "../assets/img/header-img10.png";

import headertext from "../assets/img/header-text-image.png";

import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ShowMoreText from "react-show-more-text";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "1", "2" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const handleClickScroll = () => {
    const element = document.getElementById('Available');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated " : ""}>
                                <h1>{`Project Laboratory`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "information", "description", "objectives" ]'><span className="wrap">{text}</span></span></h1>

                <h2>Course Information</h2>
               
                 
               
                  <p>The course is organized largely around getting involved in original „cutting-edge” research by
applying advanced mathematical tools to answer research questions arising outside of mathematics
(e.g., computer science, physics, engineering, life sciences, economics, quantitative social science).
</p>
                  <p>Students are working in small teams (2-3 students) on a research paper, to make it a conference-
presentable and journal-publishable work by the end of Project Laboratory 2. Applied mathematicians often collaborate with other scientists, so the course aims at giving students a taste of not only research but also research collaboration.

                  </p>
                  <p>
Topics and content are determined by the responsible instructor.
Each team is guided by a supervisor and helped by a project coordinator. The supervisor is usually a
domain expert but not a mathematician, while the project coordinator is the responsible instructor
of the course, or someone appointed by the responsible instructor.

                  </p>
                  
                  <button className="tagline2" onClick={handleClickScroll}><h5>Available Projects<ArrowRightCircle size={25} /></h5></button>
                  {/* <img className="imgheader" src={headerImg} alt="Header Img"/> */}
                  <br/>
                  {/* <h2>Instructor: Molontay Roland</h2> */}
                  {/* <a href="https://math.bme.hu/~molontay/eng.html"><img  className="imgheader" src={headertext} alt="Header text"/></a> */}

              </div>
            }
        
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated " : ""}>
                  <a href="https://math.bme.hu/~molontay/eng.html"><img src={headerImg} alt="Header Img"/></a>
                  <a href="https://math.bme.hu/~molontay/eng.html"><h5>Instructor: Dr Roland Molontay</h5></a>
                  {/* <a href="https://math.bme.hu/~molontay/eng.html"><img src={headertext} alt="Header text"/></a> */}

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Container>

      </Container>
      <Container>
        <div>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>

        </div>
      </Container>
    
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            
              <div >
                <h2>Aims & Objectives</h2>
                <h3>{`By the end of the semester, the student will:`} </h3>
               
               <ul> 
                  <li><h6>Know the current research problems in some of the major areas in applied
mathematics/computer science/physics/engineering/economics/life sciences/quantitative
social science.</h6></li>
<li><h6>Carry out research to deepen their knowledge and develop their skills regarding an area in which they have a special interest.
</h6></li>
<ShowMoreText className="showmore" lines={1}>
<li><h6>Know how to search the literature for articles on a specific topic.
</h6></li>
<li><h6>Gain a perspective on research in quantitative sciences.
</h6></li>
<li><h6>Learn how to identify a research problem or research question.
</h6></li>
<li><h6>Know the format of technical papers.
</h6></li>
<li><h6>Read and understand research articles.
</h6></li>
<li><h6>Learn about references and research ethics.
</h6> </li>      
<li> <h6>Understand how to work with primary sources, and how to collect and work with data.
</h6></li>
<li><h6>Implement mathematical methods in a programming language of the student’s choice.
</h6></li>
<li><h6>Write and present technical papers.
</h6></li>
<li><h6>Understand the process of starting, working on, writing, and presenting original research.
</h6></li>
<li><h6>Develop skills regarding project management.
</h6></li>
<li><h6>Gain experience in how to organize a team project and work with peers.
</h6></li>
<li><h6>Gain experience in how to work with experts outside of mathematics.
</h6></li>
<li><h6>(As each project is unique, specific modes of teaching and learning will respond to the nature
and scope of the project.)</h6></li></ShowMoreText></ul>
                </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated " : ""}>
                  <img src={headerImg10} alt="Header Img"/>
                  {/* <h2>Instructor: Molontay Roland</h2> */}
                  

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
