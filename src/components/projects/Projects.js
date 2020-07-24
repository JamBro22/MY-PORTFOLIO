import React, { Fragment } from "react";
import { Box, Grid, makeStyles, Button } from "@material-ui/core";
import project1 from "./project-images/github-finder.jpg";
import project2 from "./project-images/rocketContacts.jpg";
import project3 from "./project-images/todo.jpg";
import "../../App.css";
import "./Projects.css";

const Projects = () => {
  const useStyles = makeStyles({
    img: {
      border: "1px solid black",
      width: "100%",
      height: "77%",
    },
    button: {
      color: "aliceblue",
      backgroundColor: "#041423",
      marginTop: "5px",
    },
    repo: {
      color: "aliceblue",
      backgroundColor: "#131617",
      marginTop: "5px",
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <h1 className="header">Projects</h1>
      <Box>
        <Box className="background projects-background" id="projects">
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
                <a
                  href="https://github.com/JamBro22/github_project_finder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="medium"
                    fullWidth
                    className={classes.repo}
                  >
                    View Repo
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
                <a
                  href="https://cryptic-plains-10912.herokuapp.com/login#!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="medium"
                    fullWidth
                    className={classes.button}
                  >
                    View Site
                  </Button>
                </a>
                <a
                  href="https://github.com/JamBro22/Contact-Keeper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="medium"
                    fullWidth
                    className={classes.repo}
                  >
                    View Repo
                  </Button>
                </a>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className="box">
                <img src={project3} alt="Todo List" className={classes.img} />
                <a
                  href="https://suspicious-wing-b19024.netlify.app/"
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
                <a
                  href="https://github.com/JamBro22/TODO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="medium"
                    fullWidth
                    className={classes.repo}
                  >
                    View Repo
                  </Button>
                </a>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Projects;
