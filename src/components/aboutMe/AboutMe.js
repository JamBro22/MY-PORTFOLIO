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
      padding: "10px",
    },
    profile: {
      height: "150px",
      width: "120px",
      borderRadius: "50%",
      border: "2px solid black",
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <h1 className="about-header">About Me</h1>
      <Parallax bgImage={image} strength={500}>
        <Box className="about-background">
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Paper className={classes.paper}>
                <img
                  src={profile}
                  alt="Jamie Brown"
                  className={classes.profile}
                />
                <h2>
                  <strong>Age: </strong>23 years
                </h2>
                <h2>
                  <strong>Location: </strong>Steenberg/Retreat, Cape town
                </h2>
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
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Parallax>
    </Fragment>
  );
};

export default AboutMe;
