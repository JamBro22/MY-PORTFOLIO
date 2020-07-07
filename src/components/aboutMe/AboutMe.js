import React, { Fragment } from "react";
import { Box, Grid, Paper, makeStyles } from "@material-ui/core";
import { Parallax } from "react-parallax";
import "./AboutMe.css";
import image from "./dark-sky.jpg";
import profile from "./profile.jpg";

const AboutMe = () => {
  const useStyles = makeStyles({
    paper: {
      backgroundColor: "rgba(255,254,234,0.7)",
      border: "1px solid black",
      height: "100%",
      textAlign: "center",
      color: "#191970",
      padding: "20px",
    },
    profile: {
      height: "150px",
      width: "120px",
      borderRadius: "50%",
      border: "2px solid black",
      marginBottom: "10px",
    },
    skill: {
      backgroundColor: "grey",
      borderRadius: "20px",
      opacity: "0.8",
      height: "30px",
      textAlign: "left",
      padding: "4px",
      marginLeft: "auto",
      marginBottom: "8px",
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <h1 className="header">About Me</h1>
      <Parallax bgImage={image} strength={700}>
        <Box className="about-background">
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Paper className={classes.paper}>
                <img
                  src={profile}
                  alt="Jamie Brown"
                  className={classes.profile}
                />
                <h2>Full Name: Jamie Brown</h2>
                <h2>Age: 23 years</h2>
                <h2>Location: Steenberg/Retreat, Cape town</h2>
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper className={classes.paper}>
                <h2>Bio</h2>
                <p>
                  "I am a dedicated individual who values integrity, honesty and
                  pure passion. Creativity is the fuel that powers me to produce
                  the best works within everything that I do. My motto is: 'Dont
                  doubt yourself', through which it should be known that I'll
                  never give up, never surrender."
                </p>
                <h2>Hobbies</h2>
                <p>Reading and writing</p>
                <p>Drawing</p>
                <p>Doing various puzzles</p>
                <p>Playing board games</p>
              </Paper>
            </Grid>
            <Grid item md={12}>
              <Paper className={classes.paper}>
                <h2>Skills</h2>
                <Box className={classes.skill}>
                  <Box className="bar html">
                    <h3>HTML</h3>
                  </Box>
                </Box>
                <Box className={classes.skill}>
                  <Box className="bar css">
                    <h3>CSS</h3>
                  </Box>
                </Box>
                <Box className={classes.skill}>
                  <Box className="bar javascript">
                    <h3>JavaScript</h3>
                  </Box>
                </Box>
                <Box className={classes.skill}>
                  <Box className="bar python">
                    <h3>Python</h3>
                  </Box>
                </Box>
                <Box className={classes.skill}>
                  <Box className="bar react">
                    <h3>React</h3>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Parallax>
    </Fragment>
  );
};

export default AboutMe;
