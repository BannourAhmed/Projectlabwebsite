import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { ProjectCard } from "./ProjectCard";

import TrackVisibility from 'react-on-screen';
import ShowMoreText from "react-show-more-text";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import projImg7 from "../assets/img/7.png";
import projImg8 from "../assets/img/7.png";

export const Banner3 = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "1", "2" ];
  const period = 2000;
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
      title: "The fractal structure of treelines in high mountains ",
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
    <section className="banner3" id="Available">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated " : ""}>
                <span className="tagline">Available projects</span>
                {/* <h1>{`Project Laboratory`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "information", "description", "objectives" ]'><span className="wrap">{text}</span></span></h1> */}
                <ShowMoreText>
                 
               
                  
                  </ShowMoreText>
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
          <Row>
           
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
                      </Row>
      {/* <div> <p> TRY HERE</p></div> */}
      </Container>
    
    </section>
  )
}
