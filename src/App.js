import React, { Fragment } from "react";
import Landing from "./components/landing/Landing";
import { CssBaseline } from "@material-ui/core";
import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Landing />
      <AboutMe />
    </Fragment>
  );
}

export default App;
