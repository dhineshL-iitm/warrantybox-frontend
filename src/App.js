import './App.css';
import Home from './Home/home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DashBoard from './Dashboard/DashBoard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar/NavBar';
import About from './about';
import ContactUs from './ContactUs';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/contactus" element={<ContactUs />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
