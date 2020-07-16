import React, { Fragment } from "react";
import { Parallax } from "react-parallax";
import { Box, Grid, Paper, makeStyles } from "@material-ui/core";
import image from "./purple-galaxy.jpg";
import "./Testimonials.css";
import "../../App.css";

const Testimonials = () => {
  const useStyles = makeStyles({
    paper: {
      backgroundColor: "rgba(255,254,234,0.7)",
      border: "1px solid black",
      height: "100%",
      textAlign: "center",
      color: "#191970",
      padding: "20px",
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <h1 className="header" id="testimonials">
        Testimonials
      </h1>
      <Parallax bgImage={image} strength={700}>
        <Box className="testimonials-background">
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Paper className={classes.paper}>
                <h2>Jason Wandrag</h2>
                <h4>Lecturer</h4>
                <p>
                  "Jamie has shown a consistent passion and understanding of
                  programming concepts, and has a very altruistic approach to
                  his work, home and social life. Jamie will excel through any
                  environment. Jamie also maintains a unique perspective to
                  approaching problems, which has broadened my views, and helped
                  me in turn to grow."
                </p>
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper className={classes.paper}>
                <h2>Lukhanyo Vakele</h2>
                <h4>Lifechoices student</h4>
                <p>
                  "JamJam is a hardworking individual, who tackles every
                  challenge with a smile on the face. JamJam is a dedicated
                  problem solver who stays focused on the task at hand. JamJam
                  has good communication skills and can work independently as
                  well as with others. JamJam is my personal favourite human
                  because JamJam has the mind for learning whatever comes along
                  the way."
                </p>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Parallax>
    </Fragment>
  );
};

export default Testimonials;
