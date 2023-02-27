
// import "./components/Banner/Banner.css";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { Banner2 } from "./components/Banner2/Banner2";
import { Banner3 } from "./components/Banner3/Banner3";
import { TDK } from "./components/tdk/tdk";
import { Grading } from "./components/Grading/Grading";
import { Schedule } from "./components/Schedule/Schedule";
import { Video } from "./components/Video/Video";
import { Footer } from "./components/Footer/Footer";
import { History } from "./components/History/History";
import { Oldprojects } from "./components/Oldprojects/Oldprojects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner /> 
      <TDK />
      <Schedule />
      <Grading />
      <Banner2 />
      {/* <Video /> */}
      <History/>
      {/* <Oldprojects/> */}
      <Banner3 />
      <Footer />
    </div>
  );
}

export default App;
