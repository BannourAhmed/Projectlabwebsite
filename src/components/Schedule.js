import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ShowMoreText from "react-show-more-text";


export const Schedule = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="schedule">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Project Laboratory vs Master’s thesis vs TDK</h2>
                
                <ShowMoreText>
                <p>Project Laboratory is similar to a master’s thesis project, but it has some major differences:
- Project Laboratory is a team project, while the master’s thesis must be individual work.
- Here the research question comes from outside of mathematics (but the solution requires
advanced mathematical tools), however, the master’s thesis frequently solves an intrinsically
motivated problem in mathematics
- Here the paper must be a lot shorter than the length of a master’s thesis. This paper is
structured in a more research article-like way, with a focus on the original results.
- Because of the above differences (in particular the team vs. individual nature), we strongly
recommend a clear distinction is made between the master’s thesis and the project
laboratory. Overlap is only possible in special cases and with special permission.
- However, students are strongly encouraged to submit a TDK thesis on the topic of the project
laboratory.</p></ShowMoreText>
                <h2>Schedule and deliverables</h2>
                <h3 >Registration week:</h3>
<p> All project proposals are posted on the course page: projectlab.math.bme.hu</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                    <Tab.Pane eventKey="first">
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
                      
                      <p>All project proposals are posted on the course page:</p> <a  href="projectlab.math.bme.hu"><p>projectlab.math.bme.hu</p></a>
                      
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
                </Tab.Container>
                <h2> During the semester </h2>
                <ShowMoreText>
                <p>Your team should contact your supervisor every other week or so, perhaps just by email, to report
your progress. It is wise to type up your work as you do it. This will help you when you have to write
reports, including your final report. In addition, it gives you something to show your supervisor and
will help monitor your progress and rapid detection of any errors. Bear your deadlines for
deliverables in mind throughout the project. If you have any serious problems with your project or
find it very difficult to manage the workload among your team members, please inform the
responsible instructor immediately.</p></ShowMoreText>
                <Tab.Container id="projects-tabs1" defaultActiveKey="first1">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                    <Tab.Pane eventKey="first1">
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
                      
                      <p>- On the online workshop, students briefly report on their progress. (Teams of 2 students: 5 min,
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
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
