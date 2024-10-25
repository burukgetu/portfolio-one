import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
// import Animations from "./pages/Animations";
// import StaggeredText from "./components/StaggeredText";
import Availability from "./components/Availability";

const App = () => {
  return ( 
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/anim" element={<Availability/>} />
      </Routes>
    </Router>
    </>
   );
}
 
export default App;