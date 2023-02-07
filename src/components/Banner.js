import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
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
                <span className="tagline">COURSE INFORMATION</span>
                <h1>{`Project Laboratory`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "information", "description", "objectives" ]'><span className="wrap">{text}</span></span></h1>
                <ShowMoreText>
                 
               
                  <p>The course is organized largely around getting involved in original „cutting-edge” research by
applying advanced mathematical tools to answer research questions arising outside of mathematics
(e.g., computer science, physics, engineering, life sciences, economics, quantitative social science).
</p>
                  <p>Students are working in small teams (2-3 students) on a research paper, to make it a conference-
presentable and journal-publishable work by the end of Project Laboratory 2. Applied
mathematicians often collaborate with each other, so the course aims at giving students a taste of
not only research but also research collaboration.

                  </p>
                  <p>
Topics and content are determined by the responsible instructor.
Each team is guided by a supervisor and helped by a project coordinator. The supervisor is usually a
domain expert but not a mathematician, while the project coordinator is the responsible instructor
of the course, or someone appointed by the responsible instructor.

                  </p>
                  </ShowMoreText>
                  <button onClick={handleClickScroll}>Available Projects<ArrowRightCircle size={25} /></button>
              </div>
            }
              
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated " : ""}>
                  <img src={headerImg} alt="Header Img"/>
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
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated" : ""}>
                <span className="tagline">AIMS & OBJECTIVES</span>
                <h2>{`By the end of the semester, the student will:`} </h2>
                <ShowMoreText lines={1}>
                  
                  <p>* Know the current research problems in some of the major areas in applied
mathematics/computer science/physics/engineering/economics/life sciences/quantitative
social science.</p>
<p>* carry out research to deepen their knowledge and develop their skills regarding an area in
</p>
<p>* which they have a special interest.
</p>
<p>* know how to search the literature for articles on a specific topic.
</p>
<p>* gain a perspective on research in quantitative sciences.
</p>
<p>* learn how to identify a research problem or research question.
</p>
<p>* know the format of technical papers.
</p>
<p>* read and understand research articles.
</p>
<p>* learn about references and research ethics.
</p>
<p>* understand how to work with primary sources, and how to collect and work with data.
</p>
<p>* implement mathematical methods in a programming language of the student’s choice.
</p>
<p>* write and present technical papers.
</p>
<p>* understand the process of starting, working on, writing, and presenting original research.
</p>
<p>* develop skills regarding project management.
</p>
<p>* gain experience in how to organize a team project and work with peers.
</p>
<p>* gain experience in how to work with experts outside of mathematics.
</p>
<p>* (As each project is unique, specific modes of teaching and learning will respond to the nature
and scope of the project.)</p>



                  
                  </ShowMoreText>
                  {/* <button onClick={handleClickScroll}>More information <ArrowRightCircle size={25} /></button> */}
              </div>
            }
              
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
