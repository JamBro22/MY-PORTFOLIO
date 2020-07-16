import React, { Fragment } from "react";
import { Box, Grid } from "@material-ui/core";
import { Parallax } from "react-parallax";
import image from "./cactus.jpg";
import "./ContactMe.css";
import "../../App.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Fragment>
        <h1 className="header">Contact Me</h1>
        <Parallax bgImage={image} strength={500}>
          <Box className="contact-background form" id="contact">
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/mgennpvd"
              method="POST"
            >
              <Grid container spacing={2} className="grid">
                <Grid item md={12}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input"
                  />
                </Grid>
                <Grid item md={12}>
                  <input
                    type="text"
                    name="organisation"
                    placeholder="Organisation"
                    className="input"
                  />
                </Grid>
                <Grid item md={12}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input"
                  />
                </Grid>
                <Grid item md={12}>
                  <input
                    type="text"
                    name="message"
                    placeholder="Message"
                    className="input msg"
                  />
                </Grid>
                <Grid item md={12}>
                  {status === "SUCCESS" ? (
                    <p className="input">Thanks!</p>
                  ) : (
                    <button className="btn">Submit</button>
                  )}
                  {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </Grid>
              </Grid>
            </form>
          </Box>
        </Parallax>
      </Fragment>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
