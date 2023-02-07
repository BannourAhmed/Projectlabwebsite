import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ShowMoreText from "react-show-more-text";
import Carousel from 'react-multi-carousel';
import Table from 'react-bootstrap/Table';
// import TextSlider from 'text-slider'




export const Banner2 = () => {
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
    const element = document.getElementById('skills');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const slideText = ["Welcome to React Native Text Slider",
"It is very easy to use",
"You can simply install and use it now",
"If you have any issues open up an issue in issues tab"
]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="banner" id="scientific">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "" : ""}>
                <span className="tagline">SCIENTIFIC WRITING</span>
                
                <ShowMoreText>
                 
                  <p>A central goal of the course is to familiarize students with writing effective, journal-style research
papers. Papers are a key way in which scientists share research findings and learn about others’
work.
</p>
                  <p>A good paper requires writing precisely and correctly as well as anticipating readers’ needs. When
students are deeply focused on the details of their research, it can be hard for them to imagine what
the reading experience may be like for someone new to that research.

                  </p>
                 
                  </ShowMoreText>
                  <h1></h1>
                  <h3>Various resources are provided to help students learn effective scientific writing:</h3>
                  <h1></h1>
                  <Table striped bordered hover>
      <thead>
        <tr>
          <th><h2>#</h2></th>
          <th><h2>Source</h2></th>
          
          
        </tr>
      </thead>
      <tbody>
        <tr>
        <th><h2>1</h2></th>
          <td><a href="https://library.sacredheart.edu/c.php?g=29803&amp;p=185901"><h5>Organizing Academic Research Papers</h5></a></td>
          
          
        </tr>
        <tr>
        <th><h2>2</h2></th>
        <td><a href="https://spie.org/news/photonics-focus/janfeb-2020/how-to-write-a-scientific-paper?SSO=1"><h5>10 Simple Steps to Writing a Scientific Paper</h5></a></td>
         
        </tr>
        <tr>
        <th><h2>3</h2></th>
        <td><a href="https://www.elsevier.com/connect/11-steps-to-structuring-a-science-paper-editors-will-take-seriously"><h5>11 steps to structuring a science paper editors will take seriously</h5></a></td>
          
        </tr>
        <tr>
        <th><h2>4</h2></th>
        <td><a href="https://jgscott.github.io/teaching/writeups/write_ups/"><h5>Data analysis write-ups</h5></a></td>
          
        </tr>
        <tr>
        <th><h2>5</h2></th>
        <td><a href="https://www.grammarly.com/blog/how-to-write-a-research-paper/"><h5>The Ultimate Guide to Writing a Research Paper</h5></a></td>
          
        </tr>
        <tr>
        <th><h2>6</h2></th>
        <td><a href="https://nnkt.ueh.edu.vn/wp-content/uploads/2019/06/Academiv-Phrase-Bank.pdf"><h5>Academic Phrase Bank</h5></a></td>
          
        </tr>
        
      </tbody>
    </Table>
    <h2> For collaborative writing, you are very much encouraged to use <a href="https://www.overleaf.com/">Overleaf</a>.</h2>
    
                 
              </div>
            }
              
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
      <div><h1>{'\n'}</h1></div>
    
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "" : ""}>
                <span className="tagline">SCIENTIFIC PRESENTATION</span>
                {/* <h2>{`By the end of the semester, the student will:`} </h2> */}
                  
                  <p>Effective presentations provide motivation, communicate results, and stimulate interest, all while
being scientifically accurate and informative.</p>
             <p>Here you can find some useful resources that can guide you in delivering a well-structured and
engaging research presentation:</p>
<Table striped bordered hover>
      <thead>
        <tr>
          <th><h2>#</h2></th>
          <th><h2>Source</h2></th>
          
          
        </tr>
      </thead>
      <tbody>
        <tr>
        <th><h2>1</h2></th>
          <td><a href="https://www.unomaha.edu/college-of-information-science-and-technology/_files/docs/round-tables/tips-for-academic-presentations-mdavidson.pdf"><h5>Tips for Presenting Your Research at Conferences</h5></a></td>
          
          
        </tr>
        <tr>
        <th><h2>2</h2></th>
        <td><a href="https://www.sfu.ca/~jeffpell/Ling480/ParberryMembrane.pdf"><h5>How to Present a Paper: A Speaker’s Guide</h5></a></td>
         
        </tr>
        <tr>
        <th><h2>3</h2></th>
        <td><a href="https://www.wikihow.com/Prepare-a-Paper-Presentation"><h5>How to Prepare a Paper Presentation</h5></a></td>
          
        </tr>
      
        
      </tbody>
    </Table>

                  {/* <button onClick={handleClickScroll}>More information <ArrowRightCircle size={25} /></button> */}
              </div>
            }
              
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "" : ""}>
                <span className="tagline">TEAMWORK</span>
                {/* <h2>{`By the end of the semester, the student will:`} </h2> */}
                  <ShowMoreText>
                  <p>Researchers (both in academia and industry) constantly collaborate with each other, so the course is
structured to give students a taste of not only research but also research collaboration.
Each team works differently. Often, each student takes on a different part of the work. For example,
one student may enjoy reviewing the literature or developing a theory while another plays with the
data or creates a computer simulation. We support this technique since it mimics the productive
teamwork of professional researchers.
Favorably, students can do more as a group than they might on their own. To get over obstacles,
they can support one another, learn from one another, attempt a variety of strategies, and rely on
one another&#39;s complementing abilities and interests. They can inspire one another and share ideas.
Because writers are frequently too close to their own work to recognize errors, teammates can
provide each other with useful critiques.
Teamwork can be difficult! We genuinely want students to struggle a little with teamwork, make
deliberate choices about how to deal with their problems, and through that process, become better
prepared for teamwork in the future.
All team members are required to contribute equally. In exceptional cases, if a conflict is reported to
the responsible instructor, the team might be broken apart.
Focusing on the team&#39;s project is likely the most useful tactic when there are problems with
teamwork. Focusing on the objective can frequently make the teamwork issue appear less
significant.</p></ShowMoreText>

             <h4>Some pieces of advice for managing a team project:</h4>
             <a href=""> <p>Organizing Academic Research Papers: How to Manage Group Projects</p></a>
             <a href=""> <p>3 tips for successful group work
</p></a>
<a href=""> <p>5 Tips for Working on Group Projects</p></a>
<a href=""><p>7 Tips to More Effectively Work on Group Projects</p></a>


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
