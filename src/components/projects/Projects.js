import React, { Fragment } from "react";
import { Box, Grid, makeStyles, Button } from "@material-ui/core";
import { Parallax } from "react-parallax";
import image from "./project-images/northern-lights.jpg";
import project1 from "./project-images/github-finder.jpg";
import project2 from "./project-images/rocketContacts.jpg";
import project3 from "./project-images/logging.jpg";
import "../../App.css";
import "./Projects.css";

const Projects = () => {
  const useStyles = makeStyles({
    img: {
      border: "1px solid black",
      width: "100%",
    },
    button: {
      color: "aliceblue",
      backgroundColor: "#041423",
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <h1 className="header">Projects</h1>
      <Parallax bgImage={image} strength={500}>
        <Box className="projects-background">
          <Grid container spacing={2}>
            <Grid item md={4}>
              <Box className="box">
                <img
                  src={project1}
                  alt="Github Account Finder"
                  className={classes.img}
                />
                <a
                  href="https://githubfinder895.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="medium"
                    fullWidth
                    className={classes.button}
                  >
                    View
                  </Button>
                </a>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className="box">
                <img
                  src={project2}
                  alt="Rocket Contact Keeper"
                  className={classes.img}
                />
                <Button
                  variant="outlined"
                  size="medium"
                  fullWidth
                  className={classes.button}
                >
                  View
                </Button>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className="box">
                <img
                  src={project3}
                  alt="Logging System"
                  className={classes.img}
                />
                <Button
                  variant="outlined"
                  size="medium"
                  fullWidth
                  className={classes.button}
                >
                  View
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Parallax>
    </Fragment>
  );
};

export default Projects;
