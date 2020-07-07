import React, { Fragment } from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
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
      width: "100%",
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
              <img
                src={project1}
                alt="Github Account Finder"
                className={classes.img}
              />
            </Grid>
            <Grid item md={4}>
              <img
                src={project2}
                alt="Rocket Contact Keeper"
                className={classes.img}
              />
            </Grid>
            <Grid item md={4}>
              <img
                src={project3}
                alt="Logging System"
                className={classes.img}
              />
            </Grid>
          </Grid>
        </Box>
      </Parallax>
    </Fragment>
  );
};

export default Projects;
