import React, { Fragment } from "react";
import { Box, Grid, makeStyles, Button } from "@material-ui/core";
import project1 from "./project-images/github-finder.jpg";
import project2 from "./project-images/rocketContacts.jpg";
import project3 from "./project-images/todo.jpg";
import project4 from "./project-images/tkinter.jpg";
import project5 from "./project-images/tkinter2.jpg";
import project6 from "./project-images/axiom.jpg";
import project7 from "./project-images/project7.jpg";
import tkinter from "./pyprojects/tkinter_add_numbers.exe";
import tkinter2 from "./pyprojects/tkinter_convert_temperature.exe";
import "../../App.css";
import "./Projects.css";

const Projects = () => {
  const useStyles = makeStyles({
    img: {
      border: "2px solid black",
      width: "100%",
      height: "150px",
    },
    button: {
      color: "#c6cccf",
      backgroundColor: "#041423",
      width: "48%",
    },
    repo: {
      color: "#c6cccf",
      backgroundColor: "#131617",
      width: "48%",
      float: "right",
    },
    title: {
      color: "#64b8ec",
    },
    description: {
      color: "#c6cccf",
      fontFamily: '"Roboto", sans-serif',
      padding: "5px",
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <span id="projects"></span>
      <h1 className="header">Projects</h1>
      <Box>
        <Box className="background projects-background">
          <Grid container spacing={3}>
            <Grid item md={4}>
              <Box className="box">
                <img
                  src={project1}
                  alt="Github Account Finder"
                  className={classes.img}
                />
                <h3 className={classes.title}>Github Account Finder</h3>
                <p className={classes.description}>
                  Search for any github account and find out more about it.
                </p>
                <a
                  href="https://stupefied-nobel-fbfedb.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="medium"
                    className={classes.button}
                  >
                    View Site
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
                <h3 className={classes.title}>Contact Keeper</h3>
                <p className={classes.description}>
                  Log in to store and protect all your contacts.
                </p>
                <a
                  href="https://cryptic-plains-10912.herokuapp.com/login#!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="medium"
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
                <h3 className={classes.title}>Todo List</h3>
                <p className={classes.description}>
                  Schedule your tasks for the day with a handy todo list.
                </p>
                <a
                  href="https://infallible-ritchie-0d3486.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="medium"
                    className={classes.button}
                  >
                    View Site
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
                    className={classes.repo}
                  >
                    View Repo
                  </Button>
                </a>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className="box">
                <img src={project6} alt="Axiom" className={classes.img} />
                <h3 className={classes.title}>Online courses - Axiom</h3>
                <p className={classes.description}>
                  Learn to draw with existing courses or add your own.
                </p>
                <a
                  href="https://still-river-30232.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="medium"
                    className={classes.button}
                  >
                    View Site
                  </Button>
                </a>
                <a
                  href="https://github.com/JamBro22/lms-axiom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="medium"
                    className={classes.repo}
                  >
                    View Repo
                  </Button>
                </a>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className="box">
                <img src={project7} alt="King James" className={classes.img} />
                <h3 className={classes.title}>King James Challenge</h3>
                <p className={classes.description}>
                  Challenge designed by King James Digital. Single page html and
                  scss.
                </p>
                <a
                  href="https://vibrant-dijkstra-21e2bd.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="medium"
                    className={classes.button}
                  >
                    View Site
                  </Button>
                </a>
                <a
                  href="https://github.com/JamBro22/king-james-challenge.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="medium"
                    className={classes.repo}
                  >
                    View Repo
                  </Button>
                </a>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className="box">
                <img src={project4} alt="Add Numbers" className={classes.img} />
                <h3 className={classes.title}>Tkinter Add Numbers</h3>
                <p className={classes.description}>
                  A python GUI app using tkinter. Add two numbers.
                </p>
                <a href={tkinter} download>
                  <Button
                    variant="outlined"
                    size="medium"
                    className={classes.button}
                  >
                    Download
                  </Button>
                </a>
                <a
                  href="https://github.com/JamBro22/TKINTER_FIRST_EXERCISES"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="medium"
                    className={classes.repo}
                  >
                    View Repo
                  </Button>
                </a>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className="box">
                <img src={project5} alt="Temperature" className={classes.img} />
                <h3 className={classes.title}>Tkinter Convert Temperature</h3>
                <p className={classes.description}>
                  A python/tkinter GUI app. Convert temperature from degrees
                  Celsius to Fahrenheit and vice versa.
                </p>
                <a href={tkinter2} download>
                  <Button
                    variant="outlined"
                    size="medium"
                    className={classes.button}
                  >
                    Download
                  </Button>
                </a>
                <a
                  href="https://github.com/JamBro22/TKINTER_FIRST_EXERCISES"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="medium"
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
