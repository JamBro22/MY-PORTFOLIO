import React, { Fragment } from "react";
import { Box, Grid, Paper, makeStyles } from "@material-ui/core";
import "./AboutMe.css";
import profile from "./profile.jpg";

const AboutMe = () => {
  const useStyles = makeStyles({
    paper: {
      backgroundColor: "rgba(31, 35, 37, 0.5)",
      border: "1px solid black",
      height: "100%",
      textAlign: "center",
      fontFamily: '"Roboto", sans-serif',
      color: "#c6cccf",
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
      marginBottom: "10px",
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <h1 className="header">About Me</h1>
      <Box className="background about-background" id="about">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid item sm={6}>
                  <img
                    src={profile}
                    alt="Jamie Brown"
                    className={classes.profile}
                  />
                </Grid>
                <Grid item sm={6}>
                  <h2 className="details">Full Name: Jamie Brown</h2>
                  <h2 className="details">Age: 23 years</h2>
                  <h2 className="details">
                    Location: Steenberg/Retreat, Cape town
                  </h2>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <h2 className="details">Bio</h2>
              <p>
                "I am a dedicated individual who values integrity, honesty and
                pure passion. Creativity is the fuel that powers me to produce
                the best works within everything that I do. My motto is: 'Dont
                doubt yourself', through which it should be known that I'll
                never give up, never surrender."
              </p>
              <h2 className="details">Hobbies</h2>
              <p>Reading and writing</p>
              <p>Drawing</p>
              <p>Doing various puzzles</p>
              <p>Playing board games</p>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <h2 className="details">Skills</h2>
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
