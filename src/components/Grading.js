import meter1 from "../assets/img/40.png";
import meter2 from "../assets/img/60.png";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Grading = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="grading">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="">
                        <h2>GRADING</h2>
                        <p>Your team should contact your supervisor every other week or so, perhaps just by email, to report
your progress. It is wise to type up your work as you do it. This will help you when you have to write
reports, including your final report. In addition, it gives you something to show your supervisor and
will help monitor your progress and rapid detection of any errors. Bear your deadlines for
deliverables in mind throughout the project.</p>

<p>If you have any serious problems with your project or
find it very difficult to manage the workload among your team members, please inform the
responsible instructor immediately.</p>

                            <div class="float-container">

  <div class="float-child">
  <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Research paper</h5>
                            </div>
  </div>
  
  <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Research presentation</h5>
                            </div>
  
</div>

                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Research presentation</h5>
                            </div>
                            <div></div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Research paper</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel> */}
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
