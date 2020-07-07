import React, { Fragment } from "react";
import Landing from "./components/landing/Landing";
import { CssBaseline } from "@material-ui/core";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import "./App.css";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Landing />
      <AboutMe />
      <Projects />
    </Fragment>
  );
}

export default App;
