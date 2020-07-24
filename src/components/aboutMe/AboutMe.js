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
    skill: {
      backgroundColor: "grey",
      borderRadius: "20px",
      opacity: "0.8",
      height: "30px",
      textAlign: "left",
      padding: "4px",
      marginLeft: "auto",
      marginBottom: "10px",
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <h1 className="header">About Me</h1>
      <Box className="background about-background" id="about">
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
              <h2>
                <i className="fas fa-space-shuttle"></i>
              </h2>
              <img
                src="https://img.icons8.com/ultraviolet/40/000000/planet.png"
                alt="planet"
                className="planet"
              />
              <img
                src="https://img.icons8.com/ultraviolet/40/000000/planet.png"
                alt="planet"
                className="planet flip"
              />
              <h2 className="title">Work Experience</h2>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2 className="title">Skills</h2>
              <Box>
                <Box>
                  <h3>HTML</h3>
                </Box>
              </Box>
              <Box>
                <Box>
                  <h3>CSS</h3>
                </Box>
              </Box>
              <Box>
                <Box>
                  <h3>JavaScript</h3>
                </Box>
              </Box>
              <Box>
                <Box>
                  <h3>Python</h3>
                </Box>
              </Box>
              <Box>
                <Box>
                  <h3>Bootstrap</h3>
                </Box>
                <Box>
                  <h3>React</h3>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default AboutMe;
