import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img1.png";
import headerImg2 from "../assets/img/header-img2.png";
import headerImg3 from "../assets/img/header-img3.png";


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
    <section className="banner2" id="scientific">
      <Container>
        <Row className="aligh-items-center">
          
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "" : ""}>
                <h2>Tips</h2>

                  <p>A central goal of the course is to familiarize students with writing effective, journal-style research
papers. Papers are a key way in which scientists share research findings and learn about others’
work.
</p>
                  <p>A good paper requires writing precisely and correctly as well as anticipating readers’ needs. When
students are deeply focused on the details of their research, it can be hard for them to imagine what
the reading experience may be like for someone new to that research.

                  </p>
                 
                 
                <br/>
                
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
          <h3>Various resources are provided to help students learn effective scientific writing:</h3>
        <ul>
          <li>  <h7>  <a href="https://library.sacredheart.edu/c.php?g=29803&amp;p=185901"> Organizing Academic Research Papers</a></h7>
          </li>
   
       <br/>
      <li>
        <h7> 
         <a href="https://spie.org/news/photonics-focus/janfeb-2020/how-to-write-a-scientific-paper?SSO=1">  10 Simple Steps to Writing a Scientific Paper</a></h7>
        </li>
<br/>
 <li>
        <h7>
       <a href="https://www.elsevier.com/connect/11-steps-to-structuring-a-science-paper-editors-will-take-seriously"> 11 steps to structuring a science paper editors will take seriously</a></h7>
        </li>
 <br/>

        <li> <h7>
       <a href="https://jgscott.github.io/teaching/writeups/write_ups/"> Data analysis write-ups</a></h7>
        </li>
 <br/>
 <li>
        <h7>
        <a href="https://www.grammarly.com/blog/how-to-write-a-research-paper/"> The Ultimate Guide to Writing a Research Paper</a></h7>
        </li>
<br/>
  <li>
        <h7>
       <a href="https://nnkt.ueh.edu.vn/wp-content/uploads/2019/06/Academiv-Phrase-Bank.pdf"> Academic Phrase Bank</a></h7>         
    </li>
        <br/>
        </ul>
      {/* </tbody> */}
   
    <h3> For collaborative writing, you are very much encouraged to use <a href="https://www.overleaf.com/">Overleaf</a>.</h3>
    
                 
          
          
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
<h3>Here you can find some useful resources that can guide you in delivering a well-structured and
engaging research presentation:</h3>

    

       
      <li><h7> <a href="https://www.unomaha.edu/college-of-information-science-and-technology/_files/docs/round-tables/tips-for-academic-presentations-mdavidson.pdf">Tips for Presenting Your Research at Conferences</a></h7>
 
      </li>
      <br/>
        
  
      <li> <h7> <a href="https://www.sfu.ca/~jeffpell/Ling480/ParberryMembrane.pdf">How to Present a Paper: A Speaker’s Guide</a></h7>
         
         </li>
         <br/>
       
       
         <li> <h7> <a href="https://www.wikihow.com/Prepare-a-Paper-Presentation">How to Prepare a Paper Presentation</a> </h7>
     
         </li>
         <br/>
      
      
        
    
   

                  {/* <button onClick={handleClickScroll}>More information <ArrowRightCircle size={25} /></button> */}
              </div>
            }
              
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                  <img src={headerImg2} alt="Header Img"/>
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
                  <ShowMoreText className="showmore" lines={1}>
                  <p>Researchers (both in academia and industry) constantly collaborate with each other, so the course is
structured to give students a taste of not only research but also research collaboration.<p>
Each team works differently. Often, each student takes on a different part of the work. For example,
one student may enjoy reviewing the literature or developing a theory while another plays with the
data or creates a computer simulation. We support this technique since it mimics the productive
teamwork of professional researchers.</p>
<p>Favorably, students can do more as a group than they might on their own. To get over obstacles,
they can support one another, learn from one another, attempt a variety of strategies, and rely on
one another&#39;s complementing abilities and interests. They can inspire one another and share ideas.
Because writers are frequently too close to their own work to recognize errors, teammates can
provide each other with useful critiques.</p>
Teamwork can be difficult! We genuinely want students to struggle a little with teamwork, make
deliberate choices about how to deal with their problems, and through that process, become better
prepared for teamwork in the future.<p>
All team members are required to contribute equally. In exceptional cases, if a conflict is reported to
the responsible instructor, the team might be broken apart.</p>
Focusing on the team&#39;s project is likely the most useful tactic when there are problems with
teamwork. Focusing on the objective can frequently make the teamwork issue appear less
significant.</p></ShowMoreText>
<br/>
             <h3>Some pieces of advice for managing a team project:</h3>
           
   
   
    
       
            <li> <h7><a href="https://library.sacredheart.edu/c.php?g=29803&amp;p=185948">Organizing Academic Research Papers: How to Manage Group Projects</a></h7>
          </li>
          <br/>
    
   
 
          <li><h7> <a href="https://www.prospects.ac.uk/applying-for-university/university-life/3-tips-for-successful-group-work">3 tips for successful group work</a></h7>
          </li>
     
             <br/>

       
             <li><h7><a href="https://www.herzing.edu/blog/5-tips-working-group-projects">5 Tips for Working on Group Projects</a></h7>
             </li>
             <br/>

   
     
             <li> <h7> <a href="https://www.saintleo.edu/about/stories/blog/7-tips-to-more-effectively-work-on-group-projects">7 Tips to More Effectively Work on Group Projects</a></h7>
             </li>
             <br/>

      
           

   
        
                  {/* <button onClick={handleClickScroll}>More information <ArrowRightCircle size={25} /></button> */}
              </div>
            }
              
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                  <img src={headerImg3} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
