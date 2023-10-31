import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Physiotherapy from "./components/Physiotherapy"
import MUHS from "./components/MUHS"
import About from "./components/About"
import Activities from "./components/Activities"
import Admission from "./components/Admission"
import Facilities from "./components/Facilities"
import Department from "./components/Department"
import Contact from "./components/Contact"

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (

    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Home" element={<Home />}></Route>

          <Route exact path="/Admission" element={<Admission />}></Route>
          <Route exact path="/Physiotherapy" element={<Physiotherapy />}></Route>
          <Route exact path="/Activities" element={<Activities />}></Route>
          <Route exact path="/Facilities" element={<Facilities />}></Route>
          <Route exact path="/Department" element={<Department />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/MUHS" element={<MUHS />}></Route>



        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export default App;
