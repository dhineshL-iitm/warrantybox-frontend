import { Avatar, Button, Typography, Container } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css'
import './home.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import homeLogo from './queue.png'

function Home() {
  // const classes = useStyles();
  return (
    <>
      <div className="login__container container-fluid row">
        <div className="leftside col-lg-6">
          <div className="class1">
            <div className="">
              <img
                alt="titleImage"
                src={homeLogo}
                className="title__image"
              ></img>
            </div>
          </div>
        </div>
        <div className="rightside col-lg-6">
          <div className="login__box">
            <h2>WARRANTY BOX is India’s one-of-its-kind app that help you handle many otherwise annoying life’s trifle: Sign In To Get Started
</h2>
              <Container className="btn-lg" component="section">
                <Button
                  sx={{
                    textTransform: 'none',
                    display: 'flex',
                    flexGrow: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    boxShadow: 1,
                    transition: 'background-color 0.5s',
                    '&:hover': {
                      transition: 'background-color 0.5s',
                      cursor: 'pointer',
                    },
                  }}
                  onClick={() => {
                    console.log('clicked')
                  }}
                >
                  <Avatar src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
                  <Typography component="p" variant="h6">
                    Sign In With Google
                  </Typography>
                </Button>
              </Container>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
