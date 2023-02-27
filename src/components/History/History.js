import { Container, Row, Col } from "react-bootstrap";
import imghistory from "../../assets/img/historyimg.png";
import './History.css';
import TrackVisibility from 'react-on-screen';

export const History = () => {
  


  return (
    <section className="history" id="history">
         <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated " : ""}>

                < h2>The history of the Project Laboratory (Témalabor) course</h2>
               
                 
               
                <p>
          The Project Laboratory course is as old as the BME mathematics program itself, which means that in 2023, it is exactly 25 years old. For the past 25 years, Dr Márta Lázi has been responsible for the course, which has been a prominent part of the curriculum throughout.
</p>

 <p>Of course, over the past 25 years, a lot has changed. For example, in the early years, the topic proposals were not posted online, but Dr Lázi put them in a folder at the library. 
    Initially, the course was four semesters long, but after the transition to the Bologna system, it became a two-semester course. 
  </p>  <p>The popularity of topics has also changed significantly over the past 25 years. Dr Lázi noted that while encryption and optimization used to be the most popular topics, nowadays topics related to network science and data science are the most popular.
          </p>
          
                  
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
                   <a href="https://math.bme.hu/~lazi/"><img src={imghistory} alt="Header Img"/></a>
                  <br/>
                  <a href="https://math.bme.hu/~lazi/"><h5>Former instructor: Dr Márta Lázi</h5></a>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Container>
      <p>However, the goal of the course has remained unchanged for 25 years. Dr Lázi summarized why the subject was included in the curriculum from the beginning:</p>
<ul><li><p>Mathematics students should learn to communicate with non-mathematically trained professionals, and be able to participate in team work.</p></li>  
<li><p>Students should become familiar with another, typically interdisciplinary field, its terminology, logic, and a current problem.</p></li>  
<li><p>They should be introduced to the concrete application of mathematics.</p></li>
<li><p>Students should become familiar with research work, literature review, creating work plans, and practicing the presentation of their work in writing and orally.</p></li>
</ul><p>Dr Lázi emphasized that the oral project reports are a very important part of the course, and she is very grateful to those professors who listened to the students' presentations, highlighting the active participation of Dr János Tóth and Dr Péter Prőhle. She recalled with pleasure those reports where an active intellectual discourse followed the presentations, often with the participation of the supervisors.</p>
<p>Another success of Project Laboratory course is that many BME lecturers offered topics, so in the early years, professors from other faculties could become familiar with mathematician students, mostly getting very good impressions. Dr Lázi fondly recalls that at one of the reports, a supervisor from an engineering faculty said that he had never met such a talented student as the mathematics student he supervised in this course.</p>
<p>Dr Lázi also stated that over the past 25 years, she has become well acquainted with the students, and unfortunately, despite the many success stories, sometimes the student and the supervisor do not really match. Although this is not always reflected in the grades, student performance varies greatly, and it is easy to feel how much work is behind the project, and who is just trying to predent to work and making excuses. Dr Lázi believes that this mentality is detrimental to the student, as they do not benefit from the subject as much as they could.</p>
        
        <p>We hope that the next 25 years of the Project Laboratory course will be just as successful as the past 25 years have been.</p>
      </Container>
     
      
    </section>
  )
}
