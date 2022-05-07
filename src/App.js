import './App.css';
import Home from './Home/home';
import { BrowserRouter } from 'react-router-dom';
// Vision UI Dashboard React Context Provider
import { VisionUIControllerProvider } from "./context";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './Dashboard/DashBoard';
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
          <Route path="/dashboard/*" element={
              <VisionUIControllerProvider>
                <Dashboard />
              </VisionUIControllerProvider>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
