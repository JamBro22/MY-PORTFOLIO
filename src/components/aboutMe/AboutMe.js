import React, { Fragment } from "react";
import { Box, Grid, Paper, makeStyles } from "@material-ui/core";
import "./AboutMe.css";
import profile from "./profile.jpg";

const AboutMe = () => {
  const useStyles = makeStyles({
    paper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "rgba(31, 35, 37, 0.5)",
      border: "1px solid black",
      height: "100%",
      textAlign: "center",
      fontFamily: '"Roboto", sans-serif',
      color: "#c6cccf",
      padding: "20px",
    },
    profile: {
      height: "130px",
      width: "120px",
      borderRadius: "50%",
      border: "2px solid black",
      margin: "10px auto",
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <span id="about"></span>
      <h1 className="header">About Me</h1>
      <Box className="background about-background">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <img
                src={profile}
                alt="Jamie Brown"
                className={classes.profile}
              />
              <h2 className="title">Full Name:</h2>
              <h3 className="details">Jamie Brown </h3>
              <h2 className="title">Age:</h2>
              <h3 className="details">23 years</h3>
              <h2 className="title">Location:</h2>
              <h3 className="details">Steenberg/Retreat, Cape town</h3>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <h2 className="title">Bio</h2>
              <p>
                "I am a dedicated individual who values integrity, honesty and
                pure passion. Creativity is the fuel that powers me to produce
                my best work. My motto is “Don’t doubt yourself”, which has
                guided me through many difficult situations. Through this it
                should be known that I will never stop trying, I will never give
                up. "
              </p>
              <h2 className="title">Hobbies</h2>
              <p>Reading and writing</p>
              <p>Drawing</p>
              <p>Doing various puzzles</p>
              <p>Playing board games</p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2 className="title">Education</h2>
              <img
                src="https://img.icons8.com/ultraviolet/40/000000/planet.png"
                alt="planet"
                className="planet"
              />
              <div className="grid-right">
                <h3>2014</h3>
                <h4>
                  Matric <br />
                  School: Steenberg High
                </h4>
              </div>
              <img
                src="https://img.icons8.com/ultraviolet/40/000000/planet.png"
                alt="planet"
                className="planet"
              />
              <div className="grid-left">
                <h3>Feb 2016 - June 2017</h3>
                <h4>
                  University of Free State <br />
                  Course: Bachelor of Accounting <br />
                  Completed: no
                </h4>
              </div>
              <img
                src="https://img.icons8.com/ultraviolet/40/000000/planet.png"
                alt="planet"
                className="planet"
              />
              <div className="grid-right">
                <h3>Feb 2020 - Aug 2020</h3>
                <h4>
                  Lifechoices Academy <br />
                  Course: Coding <br />
                </h4>
              </div>
              <img
                src="https://img.icons8.com/ultraviolet/40/000000/planet.png"
                alt="planet"
                className="planet"
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2 className="title">Skills & Proficiency</h2>
              <h3 className="bar-border">
                <i className="fab fa-html5 icons">
                  <span className="bar-font">HTML</span>
                </i>
                <i className="fas fa-space-shuttle shuttle html" />
              </h3>
              <h3 className="bar-border">
                <i className="fab fa-css3-alt icons">
                  <span className="bar-font">CSS</span>
                </i>
                <i className="fas fa-space-shuttle shuttle css" />
              </h3>
              <h3 className="bar-border">
                <i className="fab fa-js-square icons">
                  <span className="bar-font">JavaScript</span>
                </i>
                <i className="fas fa-space-shuttle shuttle javascript"></i>
              </h3>
              <h3 className="bar-border">
                <i className="fab fa-python icons">
                  <span className="bar-font">Python</span>
                </i>
                <i className="fas fa-space-shuttle shuttle python" />
              </h3>
              <h3 className="bar-border">
                <i className="fab fa-bootstrap icons">
                  <span className="bar-font">Bootstrap</span>
                </i>
                <i className="fas fa-space-shuttle shuttle bootstrap" />
              </h3>
              <h3 className="bar-border">
                <i className="fab fa-react icons">
                  <span className="bar-font">React</span>
                </i>
                <i className="fas fa-space-shuttle shuttle react" />
              </h3>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default AboutMe;
