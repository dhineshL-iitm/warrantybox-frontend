import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="page">
        <div id="header">
          <div>
            <a href="index.html" class="logo">
              <img src="images/logo.png" style="width:50%" alt=""/>
            </a>
            <ul id="navigation" style="float:right;">
              <li class="selected">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li class="menu">
                <a href="projects.html">Projects</a>
                <ul class="primary">
                  <li>
                    <a href="proj1.html">proj 1</a>
                  </li>
                </ul>
              </li>
              <li class="menu">
                <a href="blog.html">Blog</a>
                <ul class="secondary">
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
        <div id="body" class="home">
          <div class="header">
            <div>
              <img src="images/satellite.png" style="display:none;" alt="" class="satellite"/>
              <h1 style="width:95%; margin-right:15%; margin-left:15%;" >Warranty-Box</h1>
              <h2 style="width:90%" >Customised user-friendly services</h2>
              <a href="blog.html" class="more">Read More</a>
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
          <div class="body">
            <div>
              <h1>OUR MISSION</h1>
              <p>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>
            </div>
          </div>
          <div class="footer">
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
                      <a href="blog.html" class="more">Read More</a>
                    </li>
                    <li>
                      <a href="blog.html">
                        <img src="images/new-satellitedish.jpg" alt=""/>
                      </a>
                      <h1>NEW SATELLITE DISH</h1>
                      <span>FEBRUARY 3, 2023</span>
                      <a href="blog.html" class="more">Read More</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="footer">
          <div class="connect">
            <div>
              <h1>FOLLOW OUR  MISSIONS ON</h1>
              <div>
                <a href="http://freewebsitetemplates.com/go/facebook/" class="facebook">facebook</a>
                <a href="http://freewebsitetemplates.com/go/twitter/" class="twitter">twitter</a>
                <a href="http://freewebsitetemplates.com/go/googleplus/" class="googleplus">googleplus</a>
                <a href="http://pinterest.com/fwtemplates/" class="pinterest">pinterest</a>
              </div>
            </div>
          </div>
          <div class="footnote">
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
    </div>
  );
}

export default App;
