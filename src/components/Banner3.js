import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { ProjectCard } from "./ProjectCard";

import TrackVisibility from 'react-on-screen';
import ShowMoreText from "react-show-more-text";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg21 from "../assets/img/2-1.png";

import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import projImg7 from "../assets/img/7.png";
import projImg8 from "../assets/img/8.png";
import projImg9 from "../assets/img/9.png";
import projImg10 from "../assets/img/10.png"
import projImg11 from "../assets/img/11.png"

import projectimage from "../assets/img/p1.png";


export const Banner3 = () => {

  const [isShown, setIsShown] = useState(false);


  const projects = [
    {
      title: "Psychological characteristics behind (academic) performance",
      description: "Supervisor: Dr. Beatrix Séllei",
      description2:"Assistant Professor",
      description3:"The research topic aims to investigate the effects of positive psychological characteristics behind successful performance using mathematical methods. The primary area of research is the examination of predictions using machine learning methodology to filter out human attributes that influence performance. This kind of modelling of success enables optimal organizational human resource planning and development. The research area combines the results of the humanities with the field of data sciences using mathematical tools.",
      description4:"Recommended literature: Séllei, B., Stumphauser, N., & Molontay, R. (2021). Traits versus Grades—The Incremental Predictive Power of Positive Psychological Factors over Pre-Enrollment Achievement Measures on Academic Performance. Applied Sciences, 11(4), 1744. Richardson, M., Abraham, C., & Bond, R. (2012). Psychological correlates of university students' academic performance: a systematic review and meta-analysis. Psychological bulletin, 138(2), 353. Martínez, I. M., Youssef-Morgan, C. M., Chambel, M. J., & Marques-Pinto, A. (2019). Antecedents of academic performance of university students: Academic engagement and psychological capital resources. Educational Psychology, 39(8), 1047-1067. ",
      imgUrl: projImg1,
    },
    {
      title: "Analyzing the competition in the Hungarian fuel market",
      description: "Supervisor: Dr. Zombor Berezvai",
      description2:"Head of Economic and Market Research, Hungarian Competition Authority",
      description5:"Dr. Mihály Szabó",
      description6:"Rector's delegate. Rector's Office Directorate of Education, BME",
      description3:"The aim of the research is to investigate the competitive processes in the Hungarian retail fuel market, what determines the prices at which certain petrol stations sell fuel (e.g. the number of other petrol stations nearby, the population of the settlement, the number of petrol stations on the motorway). The topicality of the topic is given by the fuel price freeze, which was lifted in December 2022 after more than a year, as it is an interesting question to examine the competition in the reviving market. The data for the analysis can be obtained from https://holtankoljak.net/, which is also part of the exercise.",
     description4:"Recommended literature: Fasoula, E., & Schweikert, K. (2020). Price regulations and price adjustment dynamics: Evidence from the Austrian retail fuel market. Journal of Transport Economics and Policy (JTEP), 54(1), 21-39.Genakos, C., & Pagliero, M. (2022). Competition and pass-through: evidence from isolated markets. American Economic Journal: Applied Economics, 14(4), 35-57.Farkas, R., & Yontcheva, B. (2019). Price transmission in the presence of a vertically integrated dominant firm: Evidence from the gasoline market. Energy policy, 126, 223-237.Farkas, R., & Czigány, G. (2017). Az autópályák indirekt hatása a kiskereskedelmi benzinárakra. STATISZTIKAI SZEMLE, 95(3), 278-296.",
      imgUrl: projImg2,
    },
    {
      title: "Tournament Design",
      description: "Supervisor: Dr. László Csató",
      description2:"Research Fellow. Research Group of Operations Research and Decision Systems, SZTAKI",
      // description5:"Dr. Mihály Szabó",
      // description6:"Rector's delegate. Rector's Office Directorate of Education, BME",
      
    description3:"Finding the optimal design of sports tournaments is an important question of scientific research. Organizers can choose several characteristics of a tournament, including its format, the schedule of individual matches, the seeding policy, or the ranking rules, subject to some constraints. In the analysis and comparison of different tournament designs, both theoretical and simulation tools can be successfully applied.",     description4:"Recommended literature:Fasoula, E., & Schweikert, K. (2020). Price regulations and price adjustment dynamics: Evidence from the Austrian retail fuel market. Journal of Transport Economics and Policy (JTEP), 54(1), 21-39.Genakos, C., & Pagliero, M. (2022). Competition and pass-through: evidence from isolated markets. American Economic Journal: Applied Economics, 14(4), 35-57.Farkas, R., & Yontcheva, B. (2019). Price transmission in the presence of a vertically integrated dominant firm: Evidence from the gasoline market. Energy policy, 126, 223-237.Farkas, R., & Czigány, G. (2017). Az autópályák indirekt hatása a kiskereskedelmi benzinárakra. STATISZTIKAI SZEMLE, 95(3), 278-296.",
    description4:"Related literature: Csató, L. (2021). Tournament Design: How Operations Research Can Improve Sports Rules. Palgrave Pivots in Sports Economics. Palgrave Macmillan, Cham, Switzerland.Kendall, G. and Lenten, L. J. A. (2017). When sports rules go awry. European Journal of Operational Research, 257(2):377–394.Lenten, L. J. A. and Kendall, G. (2021). Scholarly sports: Influence of social science academe on sports rules and policy. Journal of the Operational Research Society, in press. DOI: 10.1080/01605682.2021.2000896.  Wright, M. (2009). 50 years of OR in sport. Journal of the Operational Research Society, 60(Supplement 1):S161–S168. Wright, M. (2014). OR analysis of sporting rules – A survey. European Journal of Operational Research, 232(1):1–8."
    ,imgUrl: projImg3,
    },
    {
      title: "Network analysis of a corpus of laws",
      description: "Supervisor: Dr. István Szakadát",
      description2:"Associate Professor Department of Sociology and Communications, BME",
      description3:"The network structure of the corpus of Hungarian laws issued between 1990 and 2022 can be analysed in several ways. The internal structure of each law, the qualitative and quantitative characteristics of the laws, and the changes in the structure of the texts over time can be examined. Considering the laws as nodes, and the references among them as edges, the legal corpus as a network can be described and analysed based on network theory tools, with the help of various centrality measures.",
           description4:"Related literature: Fowler, J. H., Johnson, T. R., Spriggs II, J. F., Jeon, S., & Wahlbeck, P. J. (2007). Network analysis and the law: Measuring the legal importance of Supreme Court precedents. Political Analysis, 15(3), 324-346. Whalen, R. (2016). Legal networks: The promises and challenges of legal network analysis. Mich. St. L. Rev., 539.", 
           imgUrl: projImg4,
      
          },
    {
      title: "Dynamic clustering of log anomalies",
      description: "Supervisor: Dr. Miklós Telek",
      description2:"Professor. Department of Networked Systems and Services, BME",
description3:"The aim of the project is to develop a technique for identifying patterns in log data by dynamically clustering log anomalies in real-time. This method involves applying unsupervised machine learning algorithms to the real-time evolving data, which automatically group similar log anomalies together into clusters. By analyzing the patterns within these clusters, the method can identify potential issues or anomalies in the system and provide insights for optimization or troubleshooting. The approach is useful for monitoring large-scale distributed systems, such as those used in cloud computing or IoT devices, and can help improve system performance, reliability, and security.", 
description4:"Related literature: Landauer, M., Wurzenberger, M., Skopik, F., Settanni, G., & Filzmoser, P. (2018). Dynamic log file analysis: An unsupervised cluster evolution approach for anomaly detection. Computers & Security, 79, 94-116.Christensen, R., & Li, F. (2013, June). Adaptive log compression for massive log data. In SIGMOD Conference (pp. 1283-1284). He, S., He, P., Chen, Z., Yang, T., Su, Y., & Lyu, M. R. (2021). A survey on automated log analysis for reliability engineering. ACM computing surveys (CSUR), 54(6), 1-37.Landauer, M., Skopik, F., Wurzenberger, M., & Rauber, A. (2020). System log clustering approaches for cyber security applications: A survey. Computers & Security, 92, 101739. ",
           imgUrl: projImg5,
    },
    {
      title: "The fractal structure of treelines in high mountains",
      description: "Supervisor: Dr. Beáta Oborny",
      description2:"Professor. Department of Plant Systematics, Ecology and Theoretical Biology, ELTE",
      // description5:"Dr. Mihály Szabó",
      // description6:"Rector's delegate. Rector's Office Directorate of Education, BME",
      description3:"The aim of the research is to investigate the competitive processes in the Hungarian retail fuel market, what determines the prices at which certain petrol stations sell fuel (e.g. the number of other petrol stations nearby, the population of the settlement, the number of petrol stations on the motorway). The topicality of the topic is given by the fuel price freeze, which was lifted in December 2022 after more than a year, as it is an interesting question to examine the competition in the reviving market. The data for the analysis can be obtained from https://holtankoljak.net/, which is also part of the exercise.",
     description4:"Related literature: Gastner, M., Oborny, B., Pruessner, G. & Zimmermann, D. (2009) Transition from connected to fragmented vegetation across an environmental gradient: scaling laws in ecotone geometry. American Naturalist 174: 23-39. Juhász R., Oborny B. (2020) Percolation theory suggests some universal features in range margins across environmental gradients. Ecological Complexity 42, 100814.  ",
        imgUrl: projImg6,
    },
    {
      title: "Quantifying scientific impact with correction for citation gaming",
      description: "Supervisor: Dr. Levente Török",
      description2:"Machine Learning Engineer, DAALab",
      description5:"Supervisor: Dr. Attila Kovács",
      description6:"Dean. Budapest Metropolitan University",
      description3:"The project aims at developing a method to evaluate the impact of scientific research while accounting for the practice of citation manipulation or 'citation gaming.' Citation gaming involves authors manipulating citations to artificially boost their impact metrics. The proposed method should adjust the citation counts of articles based on the proportion of self-citations and citations from suspect sources. This approach allows for a more accurate evaluation of the impact of research and can be useful for funding agencies, research institutions, and researchers themselves in assessing the value of scientific publications.",
       description4:"Related literature: Chakraborty, J., Pradhan, D. K., & Nandi, S. (2022). Research misconduct and citation gaming: A critical review on characterization and recent trends of research manipulation. Data Management, Analytics and Innovation: Proceedings of ICDMAI 2021, Volume 2, 485-492.Fister Jr, I., Fister, I., & Perc, M. (2016). Toward the discovery of citation cartels in citation networks. Frontiers in Physics, 4, 49.Senanayake, U., Piraveenan, M., & Zomaya, A. (2015). The pagerank-index: Going beyond citation counts in quantifying scientific impact of researchers. PloS one, 10(8), e0134794.Gao, C., Wang, Z., Li, X., Zhang, Z., & Zeng, W. (2016). PR-index: using the h-index and PageRank for determining true impact. PloS one, 11(9), e0161755.Gasparyan, A. Y., Yessirkepov, M., Duisenova, A., Trukhachev, V. I., Kostyukova, E. I., & Kitas, G. D. (2018). Researcher and author impact metrics: variety, value, and context. Journal of Korean Medical Science, 33(18).Bai, X., Pan, H., Hou, J., Guo, T., Lee, I., & Xia, F. (2020). Quantifying success in science: An overview. IEEE Access, 8, 123200-123214.Vergoulis, T., Kanellos, I., Atzori, C., Mannocci, A., Chatzopoulos, S., Bruzzo, S. L., ... & Manghi, P. (2021, April). Bip! db: A dataset of impact measures for scientific publications. In Companion Proceedings of the Web Conference 2021 (pp. 456-460).",
        imgUrl: projImg7,
    },
    
  ];

  const handleClick = event => {
    // 👇️ toggle shown state
    
    setIsShown(current => !current);}


    const handleClick1 = event => {
      // 👇️ toggle shown state
    
      setIsShown(current => !current);}
  

      


  return (
    <section className="banner3" id="Available">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated " : ""}>
                <span className="tagline">Available projects</span>
                {/* <h1>{`Project Laboratory`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "information", "description", "objectives" ]'><span className="wrap">{text}</span></span></h1> */}

                  {/* <button onClick={handleClickScroll}>Available Projects<ArrowRightCircle size={25} /></button> */}
              </div>
            }
              
            
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated " : ""}>
                  {/* <img src={headerImg} alt="Header Img"/> */}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Container>

      </Container>
      <Container>
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
      {/* <div> <p> TRY HERE</p></div> */}
      </Container>
      <Container auto>
      <Row xs={1} md={2} className="g-5">
      
      <Col>
          <Card bg="dark">
     <Card.Title><h2>Psychological characteristics behind (academic) performance</h2></Card.Title>
           <br/>
            <Card.Img variant="top" src={projectimage} />
            <Card.Body >
              <Card.Text><h7>Supervisor: Dr. Beatrix Séllei</h7><br/>
              <h7>Assistant Professor</h7>
              <br/>
                <img className="img2" src={projImg1}/>

              </Card.Text>
    <ShowMoreText>       
  <div>
The research topic aims to investigate the effects of positive psychological characteristics behind successful performance using mathematical methods. The primary area of research is the examination of predictions using machine learning methodology to filter out human attributes that influence performance. This kind of modelling of success enables optimal organizational human resource planning and development. The research area combines the results of the humanities with the field of data sciences using mathematical tools.
<br/><br/>Recommended literature: Séllei, B., Stumphauser, N., & Molontay, R. (2021). Traits versus Grades—The Incremental Predictive Power of Positive Psychological Factors over Pre-Enrollment Achievement Measures on Academic Performance. Applied Sciences, 11(4), 1744. Richardson, M., Abraham, C., & Bond, R. (2012). Psychological correlates of university students' academic performance: a systematic review and meta-analysis. Psychological bulletin, 138(2), 353. Martínez, I. M., Youssef-Morgan, C. M., Chambel, M. J., & Marques-Pinto, A. (2019). Antecedents of academic performance of university students: Academic engagement and psychological capital resources. Educational Psychology, 39(8), 1047-1067.
 
  </div></ShowMoreText>   

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card   bg="dark">
     <Card.Title><h2>Analyzing the competition in the Hungarian fuel market</h2></Card.Title>
           <br/>
            <Card.Img variant="top" src={projectimage} />
            <Card.Body >
              <Card.Text><h7>Supervisor: Dr. Zombor Berezvai</h7><br/>
              <h7>Head of Economic and Market Research, Hungarian Competition Authority</h7>
              <br/>
              {/* <h7>Supervisor:Dr. Mihály Szabó</h7><br/>
              <h7>Rector's delegate. Rector's Office Directorate of Education, BME</h7> */}
              <br/>
                <img className="img2" src={projImg2}/>
                {/* <img className="img2" src={projImg21}/> */}


              </Card.Text>
              <ShowMoreText>   
  <div>The aim of the research is to investigate the competitive processes in the Hungarian retail fuel market, what determines the prices at which certain petrol stations sell fuel (e.g. the number of other petrol stations nearby, the population of the settlement, the number of petrol stations on the motorway). The topicality of the topic is given by the fuel price freeze, which was lifted in December 2022 after more than a year, as it is an interesting question to examine the competition in the reviving market. The data for the analysis can be obtained from https://holtankoljak.net/, which is also part of the exercise.",
  <br/><br/>Recommended literature: Fasoula, E., & Schweikert, K. (2020). Price regulations and price adjustment dynamics: Evidence from the Austrian retail fuel market. Journal of Transport Economics and Policy (JTEP), 54(1), 21-39.Genakos, C., & Pagliero, M. (2022). Competition and pass-through: evidence from isolated markets. American Economic Journal: Applied Economics, 14(4), 35-57.Farkas, R., & Yontcheva, B. (2019). Price transmission in the presence of a vertically integrated dominant firm: Evidence from the gasoline market. Energy policy, 126, 223-237.Farkas, R., & Czigány, G. (2017). Az autópályák indirekt hatása a kiskereskedelmi benzinárakra. STATISZTIKAI SZEMLE, 95(3), 278-296.",
  
  </div>
  </ShowMoreText>   
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card   bg="dark">
     <Card.Title><h2>Tournament Design</h2></Card.Title>
           <br/>
            <Card.Img variant="top" src={projectimage} />
            <Card.Body >
              <Card.Text><h7>Supervisor: Dr. László Csató</h7><br/>
              <h7>Research Fellow. Research Group of Operations Research and Decision Systems, SZTAKI</h7>
              <br/>
                <img className="img2" src={projImg3}/>

              </Card.Text>
              <ShowMoreText>   
  <div>
Finding the optimal design of sports tournaments is an important question of scientific research. Organizers can choose several characteristics of a tournament, including its format, the schedule of individual matches, the seeding policy, or the ranking rules, subject to some constraints. In the analysis and comparison of different tournament designs, both theoretical and simulation tools can be successfully applied.",     description4:"Recommended literature:Fasoula, E., & Schweikert, K. (2020). Price regulations and price adjustment dynamics: Evidence from the Austrian retail fuel market. Journal of Transport Economics and Policy (JTEP), 54(1), 21-39.Genakos, C., & Pagliero, M. (2022). Competition and pass-through: evidence from isolated markets. American Economic Journal: Applied Economics, 14(4), 35-57.Farkas, R., & Yontcheva, B. (2019). Price transmission in the presence of a vertically integrated dominant firm: Evidence from the gasoline market. Energy policy, 126, 223-237.Farkas, R., & Czigány, G. (2017). Az autópályák indirekt hatása a kiskereskedelmi benzinárakra. STATISZTIKAI SZEMLE, 95(3), 278-296.",
   <br/><br/>Related literature: Csató, L. (2021). Tournament Design: How Operations Research Can Improve Sports Rules. Palgrave Pivots in Sports Economics. Palgrave Macmillan, Cham, Switzerland.Kendall, G. and Lenten, L. J. A. (2017). When sports rules go awry. European Journal of Operational Research, 257(2):377–394.Lenten, L. J. A. and Kendall, G. (2021). Scholarly sports: Influence of social science academe on sports rules and policy. Journal of the Operational Research Society, in press. DOI: 10.1080/01605682.2021.2000896.  Wright, M. (2009). 50 years of OR in sport. Journal of the Operational Research Society, 60(Supplement 1):S161–S168. Wright, M. (2014). OR analysis of sporting rules – A survey. European Journal of Operational Research, 232(1):1–8."
    
  </div>
  </ShowMoreText>   
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card   bg="dark">
          <Card.Title><h2>Network analysis of a corpus of laws</h2></Card.Title>
           <br/>
            <Card.Img variant="top" src={projectimage} />
            <Card.Body >
              <Card.Text><h7>Supervisor: Dr. István Szakadát</h7><br/>
              <h7>Assistant Professor. Associate Professor Department of Sociology and Communications, BME",
    </h7>
              <br/>
                <img className="img2" src={projImg4}/>

              </Card.Text>
              <ShowMoreText>   
  <div>
The network structure of the corpus of Hungarian laws issued between 1990 and 2022 can be analysed in several ways. The internal structure of each law, the qualitative and quantitative characteristics of the laws, and the changes in the structure of the texts over time can be examined. Considering the laws as nodes, and the references among them as edges, the legal corpus as a network can be described and analysed based on network theory tools, with the help of various centrality measures.",
        <br/><br/>Related literature: Fowler, J. H., Johnson, T. R., Spriggs II, J. F., Jeon, S., & Wahlbeck, P. J. (2007). Network analysis and the law: Measuring the legal importance of Supreme Court precedents. Political Analysis, 15(3), 324-346. Whalen, R. (2016). Legal networks: The promises and challenges of legal network analysis. Mich. St. L. Rev., 539.", 
            
  </div>
  </ShowMoreText>   
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card   bg="dark">
          <Card.Title><h2>Dynamic clustering of log anomalies</h2></Card.Title>
           <br/>
            <Card.Img variant="top" src={projectimage} />
            <Card.Body >
              <Card.Text><h7>Supervisor: Dr. Miklós Telek</h7><br/>
              <h7>Professor. Department of Networked Systems and Services, BME</h7>
              <br/>
                <img className="img2" src={projImg5}/>

              </Card.Text>
              <ShowMoreText>   
  <div>
The aim of the project is to develop a technique for identifying patterns in log data by dynamically clustering log anomalies in real-time. This method involves applying unsupervised machine learning algorithms to the real-time evolving data, which automatically group similar log anomalies together into clusters. By analyzing the patterns within these clusters, the method can identify potential issues or anomalies in the system and provide insights for optimization or troubleshooting. The approach is useful for monitoring large-scale distributed systems, such as those used in cloud computing or IoT devices, and can help improve system performance, reliability, and security.", 
<br/><br/>Related literature: Landauer, M., Wurzenberger, M., Skopik, F., Settanni, G., & Filzmoser, P. (2018). Dynamic log file analysis: An unsupervised cluster evolution approach for anomaly detection. Computers & Security, 79, 94-116.Christensen, R., & Li, F. (2013, June). Adaptive log compression for massive log data. In SIGMOD Conference (pp. 1283-1284). He, S., He, P., Chen, Z., Yang, T., Su, Y., & Lyu, M. R. (2021). A survey on automated log analysis for reliability engineering. ACM computing surveys (CSUR), 54(6), 1-37.Landauer, M., Skopik, F., Wurzenberger, M., & Rauber, A. (2020). System log clustering approaches for cyber security applications: A survey. Computers & Security, 92, 101739. ",
          
  </div>
  </ShowMoreText>   
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card   bg="dark">
          <Card.Title><h2>The fractal structure of treelines in high mountains</h2></Card.Title>
           <br/>
            <Card.Img variant="top" src={projectimage} />
            <Card.Body >
              <Card.Text><h7>Supervisor: Dr. Beáta Oborny</h7><br/>
              <h7>Professor. Department of Plant Systematics, Ecology and Theoretical Biology, ELTE</h7>
              <br/>
                <img className="img2" src={projImg6}/>

              </Card.Text>
              <ShowMoreText>   
  <div>
The aim of the research is to investigate the competitive processes in the Hungarian retail fuel market, what determines the prices at which certain petrol stations sell fuel (e.g. the number of other petrol stations nearby, the population of the settlement, the number of petrol stations on the motorway). The topicality of the topic is given by the fuel price freeze, which was lifted in December 2022 after more than a year, as it is an interesting question to examine the competition in the reviving market. The data for the analysis can be obtained from https://holtankoljak.net/, which is also part of the exercise.",
    <br/><br/>Related literature: Gastner, M., Oborny, B., Pruessner, G. & Zimmermann, D. (2009) Transition from connected to fragmented vegetation across an environmental gradient: scaling laws in ecotone geometry. American Naturalist 174: 23-39. Juhász R., Oborny B. (2020) Percolation theory suggests some universal features in range margins across environmental gradients. Ecological Complexity 42, 100814.  ",
      
  </div>
  </ShowMoreText>   
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card   bg="dark">
          <Card.Title><h2>Quantifying scientific impact with correction for citation gaming</h2></Card.Title>
           <br/>
            <Card.Img variant="top" src={projectimage} />
            <Card.Body >
              <Card.Text><h7>Supervisor: Dr. Levente Török</h7><br/>
              <h7>Machine Learning Engineer, DAALab</h7>
              <br/>
                <img className="img2" src={projImg7}/>

              </Card.Text>
              <ShowMoreText>   
  <div>
The project aims at developing a method to evaluate the impact of scientific research while accounting for the practice of citation manipulation or 'citation gaming.' Citation gaming involves authors manipulating citations to artificially boost their impact metrics. The proposed method should adjust the citation counts of articles based on the proportion of self-citations and citations from suspect sources. This approach allows for a more accurate evaluation of the impact of research and can be useful for funding agencies, research institutions, and researchers themselves in assessing the value of scientific publications.",
       <br/><br/>Related literature: Chakraborty, J., Pradhan, D. K., & Nandi, S. (2022). Research misconduct and citation gaming: A critical review on characterization and recent trends of research manipulation. Data Management, Analytics and Innovation: Proceedings of ICDMAI 2021, Volume 2, 485-492.Fister Jr, I., Fister, I., & Perc, M. (2016). Toward the discovery of citation cartels in citation networks. Frontiers in Physics, 4, 49.Senanayake, U., Piraveenan, M., & Zomaya, A. (2015). The pagerank-index: Going beyond citation counts in quantifying scientific impact of researchers. PloS one, 10(8), e0134794.Gao, C., Wang, Z., Li, X., Zhang, Z., & Zeng, W. (2016). PR-index: using the h-index and PageRank for determining true impact. PloS one, 11(9), e0161755.Gasparyan, A. Y., Yessirkepov, M., Duisenova, A., Trukhachev, V. I., Kostyukova, E. I., & Kitas, G. D. (2018). Researcher and author impact metrics: variety, value, and context. Journal of Korean Medical Science, 33(18).Bai, X., Pan, H., Hou, J., Guo, T., Lee, I., & Xia, F. (2020). Quantifying success in science: An overview. IEEE Access, 8, 123200-123214.Vergoulis, T., Kanellos, I., Atzori, C., Mannocci, A., Chatzopoulos, S., Bruzzo, S. L., ... & Manghi, P. (2021, April). Bip! db: A dataset of impact measures for scientific publications. In Companion Proceedings of the Web Conference 2021 (pp. 456-460).",
            
  </div>
  </ShowMoreText>   
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card   bg="dark">
          <Card.Title><h2>Diffusion of innovation in social networks</h2></Card.Title>
           <br/>
            <Card.Img variant="top" src={projectimage} />
            <Card.Body >
              <Card.Text><h7>Supervisor: Dr. Balázs Sziklai</h7><br/>
              <h7>Associate Professor. Corvinus University</h7>
              <br/>
                <img className="img2" src={projImg10}/>

              </Card.Text>
              <ShowMoreText>   
  <div>
Rogers (1962) classified adopters of innovation into five categories: innovators, early adopters, early majority, late majority and laggards. It is well-documented that innovators and early adopters play a crucial role in the diffusion of innovation. Interestingly, the network diffusion
literature largely ignores these lessons and focuses on optimization-related tasks. In their seminal paper, Kempe, Kleinberg and Tardos (2003) define the influence maximization problem, where we need to find the most influential nodes in the network, whose activation would cause the largest impact. They also introduce two network diffusion models, linear threshold (LT) and independent cascade (IC). Although these two remain the most widely applied models of diffusion, they completely ignore adopter groups and network assortativity, which have been confirmed many times to greatly affect innovation spreading. The aim of the project is to investigate network diffusion models and possibly improve them. In particular, the students

    will develop alternatives for LT and IC,
    compare network centralities on the new models,
    and characterize certain solutions/models.

The first two points entail programming and simulation tasks (either in Python or C++), while the last one is more theoretical and possibly involves mathematical proofs.  
<br/><br/>
Recommended literature:
Rogers EM (1962) Diffusion of innovations, 1st ed. Free Press of Glencoe, New York
Kempe D, Kleinberg J, Tardos E (2003) Maximizing the spread of influence through a social network. In: Proceedings of the 9th ACM SIGKDD international conference on knowledge discovery and data mining, KDD ’03, Association for Computing Machinery, New York, NY, USA, pp 137–146
Sziklai BR (2018) How to identify experts in a community? Int J Game Theory 47:155–173
Sziklai BR and Lengyel B (2023) Finding early adopters of innovation in social networks Social
Network Analysis and Mining 13:4
  </div>
  </ShowMoreText>   
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="dark">
          <Card.Title><h2>Predicting student performance in "Technical Chemistry"</h2></Card.Title>
           <br/>
            <Card.Img variant="top" src={projectimage} />
            <Card.Body >
              <Card.Text><h7>Supervisor: Dr. Mihály Szabó</h7><br/>
              <h7>Rector's delegate. Rector's Office, Directorate of Education, BME</h7>
              <br/>
                <img className="img2" src={projImg21}/>

              </Card.Text>
              <ShowMoreText>   
  <div>
In previous work by HSDSLab, we studied the prediction of academic success for first-year students entering the Budapest University of Technology and Economics (BME), analyzing the relationships between pre-enrollment achievement measures used as the basis for admission and subsequent university performance. An important question we addressed was which elements of the admission score have the strongest explanatory power for future academic performance. Using modern statistical and machine learning tools (random forests, neural networks, and boosting methods), we conducted this research on historical data, applying predictive analytical methods to determine how well the data available at the time of admission can indicate whether a given student will complete their studies successfully and with what level of performance.
As a continuation of this work, in the framework of the proposed research, the student should investigate how successful completion of the first-semester course entitled "Technical Chemistry" at the Faculty of Transportation Engineering and Vehicle Engineering at BME can be predicted based on data available at the time of admission and which competencies are most crucial. Can those who are likely to perform poorly be identified so that support measures, such as remedial classes, consultation sessions, and other forms of assistance, can be provided to help them catch up during the semester?
 <br/><br/>Recommended literature

Ozsogomonyan, A., & Loftus, D. (1979). Predictors of general chemistry grades. Journal of Chemical Education, 56(3), 173.

Daniel House, J. (1995). Noncognitive predictors of achievement in introductory college chemistry. Research in Higher Education, 36, 473-490.

Wagner, E. P., Sasser, H., & DiBiase, W. J. (2002). Predicting students at risk in general chemistry using pre-semester assessments and demographic information. Journal of Chemical Education, 79(6), 749.

Lopez, E. J., Shavelson, R. J., Nandagopal, K., Szu, E., & Penn, J. (2014). Factors contributing to problem-solving performance in first-semester organic chemistry. Journal of Chemical Education, 91(7), 976-981.

Fink, A., Frey, R. F., & Solomon, E. D. (2020). Belonging in general chemistry predicts first-year undergraduates’ performance and attrition. Chemistry Education Research and Practice, 21(4), 1042-1062.

Kiss, B., Nagy, M., Molontay, R., & Csabay, B. (2019, November). Predicting dropout using high school and first-semester academic achievement measures. In 2019 17th international conference on emerging eLearning technologies and applications (ICETA) (pp. 383-389). IEEE.

Baranyi, M., Gál, K., Molontay, R., & Szabó, M. (2019, November). Modeling students’ academic performance using Bayesian networks. In 2019 17th international conference on emerging eLearning technologies and applications (ICETA) (pp. 42-49). IEEE.

Baranyi, M., Nagy, M., & Molontay, R. (2020, October). Interpretable deep learning for university dropout prediction. In Proceedings of the 21st annual conference on information technology education (pp. 13-19).

  </div>
  </ShowMoreText>   
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card   bg="dark">
          <Card.Title><h2>Identifying brand strategy success on social media</h2></Card.Title>
           <br/>
            <Card.Img variant="top" src={projectimage} />
            <Card.Body >
              <Card.Text><h7>Supervisor: Dr. Szilvia Bíró-Szigeti</h7><br/>
              <h7>Associate Professor. Department of Management and Business Economics, BME</h7>
              <br/>
                <img className="img2" src={projImg11}/>

              </Card.Text>
              <ShowMoreText>   
  <div>
The aim of the project is to identify the brand strategy success factors that businesses, organizations and individuals use for their appearance on websites and social media. This approach involves the identification of brand management tools that focuses on the exploration of image elements and the analysis of visual applications. We primarily aim to analyze the success factors of texts, images and videos using advanced natural language processing and object identification tools (topic analysis, sentiment analysis, optical character recognition, and object detection). The results are suitable for identifying the marketing communication components of the most popular and successful elements (campaigns, news, announcements), their rate and timing.
<br/><br/>Related literature: Lies, J., & Fuß, S. (2019). Factors influencing the success of social media posts: A quantitative analysis of over 60 million Facebook posts. Journal of Digital & Social Media Marketing, 7(2), 137-147.
Jenders, M., Kasneci, G., & Naumann, F. (2013, May). Analyzing and predicting viral tweets. In Proceedings of the 22nd international conference on world wide web (pp. 657-664).
Barnes, K., Riesenmy, T., Trinh, M. D., Lleshi, E., Balogh, N., & Molontay, R. (2021). Dank or not? Analyzing and predicting the popularity of memes on Reddit. Applied Network Science, 6(1), 1-24.
Aaker, D. A. (2011). Building strong brands. Free Press.
Kotler, P., Armstrong, G. (2016): Principles of Marketing. 16th Edition, Pearson
  </div>
  </ShowMoreText>   
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card   bg="dark">
          <Card.Title><h2>Analysing political networks in the European Parliament</h2></Card.Title>
           <br/>
            <Card.Img variant="top" src={projectimage} />
            <Card.Body >
              <Card.Text><h7>Supervisor: Dr. Attila Kovács</h7><br/>
              <h7>Dean. Budapest Metropolitan University</h7>
              <br/>
                <img className="img2" src={projImg8}/>

              </Card.Text>
              <ShowMoreText>   
  <div>
Legislative data could be used to identify key legislators and decision-makers in EU policies and politics and to quantify their influence on legislative outcome (Kreppel, 1999). Co-voting and co-sponsorship networks could be drawn up and analysed by social network analysing tools, giving insights to what networks and coalitions of elected members have a high impact on the legislative outcome in the EU (Hix et al., 2009). This is a valuable information for EU citizens and lobbying companies as well (Marschall, 2010).

Homophily could give answers to what drives cooperation in political networks in Brussels (McPherson et al., 2001). Analysing legislative amendments or parliamentary speeches using natural language processing could be another potential research area of interest.

A unique dataset of more than 1 million legislative amendments and parliamentary speeches since 2009 could be the basis of analysis. All this broken down by policy area and legislative procedure type. The dataset also contains a number of variables related to the amendments and their sponsors (age, gender, ideological scores, party affiliation, Member State, education level, etc.). It also broadens the diversity of potential research avenues.
<br/><br/>Related literature

McPherson, M., Smith-Lovin, L. and Cook, J.M. (2001). Birds of a Feather: Homophily in Social Networks. Annu. Rev. Sociol. 2001. 27:415–44.

Marshall, D. (2010). Who to lobby and when: Institutional determinants of interest group strategies in European Parliament committees. European Union Politics. 11(4) 553–575.

Hix, S., Noury, A. and Roland, G. (2009). Voting patterns and alliance formation in the European Parliament. Phil. Trans. R. Soc. B. 364, 821–831

Kreppel, A. (1999). What Affects the European Parliament’s Legislative Influence? An Analysis of the Success of EP Amendments. Journal of Common Market Studies. 37(3): 521–38.

Fertő, I., Kóczy, L.Á., Kovács, A. and Sziklai, B.R. (2020). The power ranking of the members of the Agricultural Committee of the European Parliament. European Review of Agricultural Economics. 47(5): 1897–1919
  </div>
  </ShowMoreText>   
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card   bg="dark">
     <Card.Title><h2>Physics-informed neural networks for engineering applications</h2></Card.Title>
           <br/>
            <Card.Img variant="top" src={projectimage} />
            <Card.Body >
              <Card.Text><h7>Supervisor: Dr. Botond Szilágyi</h7><br/>
              <h7>Associate Professor. Department of Chemical and Environmental Process Engineering, BME</h7>
              <br/>
              {/* <h7>Supervisor:Dr. Mihály Szabó</h7><br/>
              <h7>Rector's delegate. Rector's Office Directorate of Education, BME</h7> */}
              <br/>
                <img className="img2" src={projImg9}/>
                {/* <img className="img2" src={projImg21}/> */}


              </Card.Text>
              <ShowMoreText>   
  <div>Differential equations are frequently utilized in chemical engineering practice for process modeling and simulation that allows for evaluating the performance of chemical processes before the first real experiment and investment. In this context, process models will have a major role in the transition to cleaner and safer production, accelerating the adoption of fully circular economies. Unfortunately, the computational cost of these differential equations is prohibitive for many applications (despite the recent significant progress in information technology that includes parallel, GPU, and cloud computing (Szilágyi & Nagy, 2016)). It was shown recently that neural networks could be used to approximate the solution of differential equations describing fluid mechanics (Cai et al., 2021), by incorporating the differential equation into the loss function. This study aims to extend the concept of physics-informed neural networks to general chemical engineering applications by solving representative case studies for chemical and biochemical reactions and separation models. This work will pave the way for spreading digital solutions across all engineering fields.

  <br/><br/>Recommended literature: Cai, S., Mao, Z., Wang, Z., Yin, M., & Karniadakis, G. E. (2021). Physics-informed neural networks (PINNs) for fluid mechanics: a review. Acta Mechanica Sinica, 37(12), 1727–1738. https://doi.org/10.1007/s10409-021-01148-1
Szilágyi, B., & Nagy, Z. K. (2016). Graphical processing unit (GPU) acceleration for numerical solution of population balance models using high resolution finite volume algorithm. Computers and Chemical Engineering, 91, 167–181. https://doi.org/10.1016/j.compchemeng.2016.03.023
  </div>
  </ShowMoreText>   
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </Container>
    </section>
  )
}
