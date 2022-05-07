import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './templatestyle.css';
import './templatemobilestyle.css';
import './App.css';

// Create the function
export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

function App() {
  return (
    <div className="App">
      <div id="page">
        <div id="header">
          <div>
            <a href="index.html" className="logo">
              <img src="images/logo.png" style={{width:'50%'}} alt=""/>
            </a>
            <ul id="navigation" style={{float:'right', marginRight:'-5%'}}>
              <li className="selected">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li className="menu">
                <a href="projects.html">Projects</a>
                <ul className="primary">
                  <li>
                    <a href="proj1.html">proj 1</a>
                  </li>
                </ul>
              </li>
              <li className="menu">
                <a href="blog.html">Blog</a>
                <ul className="secondary">
                  <li>
                    <a href="singlepost.html">Single post</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="#">Signup / Login</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="body" className="home">
          <div className="header">
            <div>
              <img src="images/satellite.png" style={{display:'none'}} alt="" className="satellite"/>
              <h1 style={{width:'95%', marginRight:'15%', marginLeft:'15%', padding:'0'}} >Warranty-Box</h1>
              <h2 style={{width:'90%', padding:'0', float:'left'}} >Customised user-friendly services</h2>
              <a href="blog.html" className="more">Read More</a>
              <h3>FEATURED PROJECTS</h3>
              <ul>
                <li>
                  <a href="projects.html">
                    <img src="images/project-image1.jpg" alt=""/>
                  </a>
                </li>
                <li>
                  <a href="projects.html">
                    <img src="images/project-image2.jpg" alt=""/>
                  </a>
                </li>
                <li>
                  <a href="projects.html">
                  <img src="images/project-image3.jpg" alt=""/>
                  </a>
                </li>
                <li>
                  <a href="projects.html">
                    <img src="images/project-image4.jpg" alt=""/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="body">
            <div>
              <h1>OUR MISSION</h1>
              <p>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>
            </div>
          </div>
          <div className="footer">
            <div>
              <ul>
                <li>
                  <h1>FEATURED VIDEO</h1>
                  <a href="blog.html">
                    <img src="images/mars-rover.jpg" alt=""/>
                    <span></span>
                  </a>
                </li>
                <li>
                  <h1>LATEST BLOG</h1>
                  <ul>
                    <li>
                      <a href="blog.html">
                        <img src="images/finding-planet.jpg" alt=""/>
                      </a>
                      <h1>FINDING PLANET X-123</h1>
                      <span>FEBRUARY 6, 2023</span>
                      <a href="blog.html" className="more">Read More</a>
                    </li>
                    <li>
                      <a href="blog.html">
                        <img src="images/new-satellitedish.jpg" alt=""/>
                      </a>
                      <h1>NEW SATELLITE DISH</h1>
                      <span>FEBRUARY 3, 2023</span>
                      <a href="blog.html" className="more">Read More</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="connect">
            <div>
              <h1>FOLLOW OUR  MISSIONS ON</h1>
              <div>
                <a href="http://freewebsitetemplates.com/go/facebook/" className="facebook">facebook</a>
                <a href="http://freewebsitetemplates.com/go/twitter/" className="twitter">twitter</a>
                <a href="http://freewebsitetemplates.com/go/googleplus/" className="googleplus">googleplus</a>
                <a href="http://pinterest.com/fwtemplates/" className="pinterest">pinterest</a>
              </div>
            </div>
          </div>
          <div className="footnote">
            <div>
              <p>&copy; 2023 BY SPACE PROSPECTION | ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </header>
      {AddLibrary("js/mobile.js")}
    </div>
  );
}

export default App;
