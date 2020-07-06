import React, { Fragment } from "react";
import Landing from "./components/landing/Landing";
import { CssBaseline } from "@material-ui/core";
import Navbar from "./components/layout/Navbar";
import AboutMe from "./components/aboutMe/AboutMe";
import "./App.css";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Landing />
      <Navbar />
      <AboutMe />
    </Fragment>
  );
}

export default App;
