
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Banner2 } from "./components/Banner2";
import { Banner3 } from "./components/Banner3";
import { TDK } from "./components/tdk";
import { Grading } from "./components/Grading";
import { Schedule } from "./components/Schedule";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Oldprojects } from "./components/Oldprojects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner /> 
      <TDK />
      <Schedule />
      <Grading />
      <Banner2 />
      {/* <Contact /> */}
      <Oldprojects/>
      <Banner3 />
      <Footer />
    </div>
  );
}

export default App;
