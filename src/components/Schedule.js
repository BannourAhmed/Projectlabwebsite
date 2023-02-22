import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ShowMoreText from "react-show-more-text";
import { Chrono } from "react-chrono";

export const Schedule = () => {

  let  items = [{
    title: "Registration week - Posting project proposals", "color":"red"
   
  }, 
  {
    title : "Week 1 - In-person workshop" 
  },
  {
    title: "Week 3 - Research proposal submission",
   
  },{
    title: "Week 10 - Online workshop",
   
  },{
    title: "Week 2 of the exam period - Documentation submission",
   
  },{
    title: "Week 3 of the exam period",
   
  },];

  


  // const projects = [
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg1,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg1,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   },
  // ];

  return (
    <section className="project" id="schedule">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
             

<h2>Deliverables</h2>

<h3> Documentation </h3>
<h6>A high-quality final technical report created in Latex using a  <a href="https://journals.ieeeauthorcenter.ieee.org/create-your-ieee-journal-article/authoring-tools-and-templates/tools-for-ieee-authors/ieee-article-templates/" >double-column IEEE template</a>.  
 The paper should follow the <a href="#scientific">structure of original research papers.</a>
Required length: 6-7 double-column pages (for teams of 2 students)
9-10 double-column pages (for teams of 3 students).</h6>
<ul>
  <li><h6>The above length should include figures and refences and must be self-contained.</h6></li>
  <li><h6> It is possible two add a max 10-page-long supplementary material with additional tables,
figures, or methodological details that can be referenced in the main text.
The paper must be written in English.</h6></li></ul>
<h3> Presentation</h3>
<h6>Students present their work at a conference-like event. They are encouraged to comment on their
peers’ work and ask questions.</h6> 
<ul>

<li><h6>The presentation must follow the <a href="#scientificpresentation">structure</a> and standards of research
presentations.</h6></li>

<li><h6>Teams of 2 students have 25 minutes, while teams of 3 students have 35 minutes to present their
work.</h6></li>
<li><h6>The presentations must be aided by a slideshow (or similar)</h6></li>
<li><h6>The presentations will be followed by a short discussion.</h6></li>
<li><h6>The presentations can be held in English or Hungarian.</h6></li>
<li><h6>Snacks and treats will be provided.</h6></li>

</ul>

                
          <h2>Schedule</h2>
                <div >
            
        <Chrono items={items} mode="VERTICAL_ALTERNATING"    
  theme={{
    primary: 'grey',
    secondary: 'transparent',
    cardBgColor: 'rgba(0, 0, 0, 0.2)',
    cardForeColor: 'none',
    titleColor: 'white',
    titleColorActive: 'white',
   
  }} hideControls disableClickOnCircle  disableAutoScrollOnClick disableNavOnKey cardHeight={100}   activeItemIndex={10}>
    
    
  <div style={{}}><p>All project proposals are posted on the course page: <a  href="https://projectlab.math.bme.hu"> projectlab.math.bme.hu</a></p> 
  </div>


  <div><ShowMoreText className="showmore" lines={1}> <p>• Before the workshop, you must submit your project preferences and indicate group
preferences using the online form found on the course page.</p>
<p>
• Participation in the workshop is compulsory for those students who are taking Project
Laboratory 1 </p><p>• Here the course requirements and deliverables are presented, the project proposals are
briefly introduced, and the final student-project assignment takes place in the workshop.</p>

<p>• After the workshop, the responsible instructor connects the students with their supervisor.</p></ShowMoreText ></div>



  <div><ShowMoreText className="showmore" lines={1}><p>• By the end of Week 3, teams should submit a research plan (after obtaining agreement from
the supervisor).</p>
<p>• The research plan is an initial written report covering the background, specifications, and
milestones for your project. This is an unassessed 1-2 page compulsory submission giving the
aims and objectives of the project, the steps which will be undertaken as part of the project,
and a very short literature review. Its purpose is to ensure all students are engaged with their
project work.</p></ShowMoreText></div>




  <div><p>• On the online workshop, students briefly report on their progress. (Teams of 2 students: 5 min,
teams of 3 students: 7 min.)  </p></div>


         
  <div><p> The deadline for submitting the project documentation </p></div>
  <div> <p> Project presentation </p></div>

</Chrono>
      </div>

      
                {/* <Tab.Container id="projects-tabs" defaultActiveKey="first"> */}
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Registration week</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Week 1 (in-person)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Week 3 Research plan</Nav.Link>
                    </Nav.Item>
                   
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first"> */}
                      {/* <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> */}
                      
                      {/* <p>All project proposals are posted on the course page:</p> <a  href="https://projectlab.math.bme.hu"><p>projectlab.math.bme.hu</p></a>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>- Before the workshop, you must submit your project preferences and indicate group
preferences using the online form found on the course page.</p>
<p>
- Participation in the workshop is compulsory for those students who are taking Project
Laboratory 1 </p><p>- Here the course requirements and deliverables are presented, the project proposals are
briefly introduced, and the final student-project assignment takes place in the workshop.</p>

<p>- After the workshop, the responsible instructor connects the students with their supervisor.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>- By the end of Week 3, teams should submit a research plan (after obtaining agreement from
the supervisor).</p>

<p>- The research plan is an initial written report covering the background, specifications, and
milestones for your project. This is an unassessed 1-2 page compulsory submission giving the
aims and objectives of the project, the steps which will be undertaken as part of the project,
and a very short literature review. Its purpose is to ensure all students are engaged with their
project work.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container> */}
                {/* <h2> During the semester </h2> */}
                
                {/* <Tab.Container id="projects-tabs1" defaultActiveKey="first1"> */}
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first1">Week 10 (online)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second1">Week 2 of the exam period</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third1">Week 3 of the exam period</Nav.Link>
                    </Nav.Item>
                   
                  </Nav>
                  <Tab.Content id="slideInUp1" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first1"> */}
                      {/* <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> */}
                      
                      {/* <p>- On the online workshop, students briefly report on their progress. (Teams of 2 students: 5 min,
teams of 3 students: 7 min.)
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second1">
                      <p>A high-quality final technical report created in Latex using a double-column IEEE template.
The paper should follow the structure of original research papers.
Required length: 6-7 double-column pages (for teams of 2 students)
9-10 double-column pages (for teams of 3 students)</p><p>
The above length should include figures and refences and must be self-contained.</p><p> 
It is possible two add a max 10-page-long supplementary material with additional tables,
figures, or methodological details that can be referenced in the main text.
The paper must be written in English.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third1">
                      <p>Students present their work at a conference-like event. They are encouraged to comment on their
peers’ work and ask questions. The presentation must follow the structure and standards of research
presentations.</p> <p>Teams of 2 students have 25 minutes, while teams of 3 students have 35 minutes to present their
work.</p>
<p>The presentations must be aided by a slideshow (or similar)</p>
<p>The presentations will be followed by a short discussion.</p>
<p>The presentations can be held in English or Hungarian.</p>
<p>Snacks and treats will be provided.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>*/}

              </div>} 
              
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
 
    </section>
  )
}
