import React, { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import { CssBaseline } from "@material-ui/core";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import ContactMe from "./components/contact/ContactMe";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Landing />
      <Navbar />
      <Projects />
      <AboutMe />
      <Testimonials />
      <ContactMe />
      <Footer />
    </Fragment>
  );
}

export default App;
