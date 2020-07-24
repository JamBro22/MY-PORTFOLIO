import React, { Fragment } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box } from "@material-ui/core";
import "./Testimonials.css";
import "../../App.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jason Wandrag",
      title: "Lifechoices Lecturer",
      msg:
        '"Jamie has shown a consistent passion and understanding of programming concepts, and has a very altruistic approach to his work, home and social life. Jamie will excel through any environment. Jamie also maintains a unique perspective to approaching problems, which has broadened my views, and helped me in turn to grow."',
    },
    {
      name: "Joshua Davids",
      title: "Peer/Frontend Developer",
      msg:
        '"A logical individual who is both hardworking and curious. He has the ability to create clean designs and solve complex problems. He has shown perseverance by sticking to every schedule and delivering his work on time, no matter the problem. By working and delivering great work from home and at the academy, he can work and excel in any environment. Coupled with the will to never give up and an active imagination, I\'m sure Jamie will deliver promising work to any Company"',
    },
    {
      name: "Lukhanyo Vakele",
      title: "Lifechoices student/Peer",
      msg:
        '"JamJam is a hardworking individual, who tackles every challenge with a smile on the face. JamJam is a dedicated problem solver who stays focused on the task at hand. JamJam has good communication skills and can work independently as well as with others. JamJam is my personal favourite human because JamJam has the mind for learning whatever comes along the way."',
    },
    {
      name: "Godwin Dzvapatsva",
      title: "Head of Curriculum and Learning at Lifechoices",
      msg:
        '"I had the pleasure of teaching Jamie during Python programming sessions at Lifechoices Coding Academy. He is one person who is detail oriented and self-organised. I recommend him without hesitation."',
    },
  ];
  return (
    <Fragment>
      <span id="testimonials"></span>
      <h1 className="header">Testimonials</h1>
      <Box className="background testimonials-background">
        <CarouselProvider
          className="carousel"
          naturalSlideWidth={100}
          naturalSlideHeight={300}
          totalSlides={4}
          isIntrinsicHeight="true"
          isPlaying="true"
          interval="5000"
          infinite="true"
          touchEnabled
        >
          <ButtonBack className="t-btn">
            <i className="far fa-arrow-alt-circle-left arrow"></i>
          </ButtonBack>
          <Box>
            <Slider className="slider">
              {testimonials.map((t, i) => {
                return (
                  <Slide index={i} key={t.name}>
                    <h3 className="t-head">{t.name}</h3>
                    <h3 className="t-title">- {t.title}</h3>
                    <p className="msg">{t.msg}</p>
                  </Slide>
                );
              })}
            </Slider>
            <DotGroup />
          </Box>
          <ButtonNext className="t-btn">
            <i className="far fa-arrow-alt-circle-right arrow"></i>
          </ButtonNext>
        </CarouselProvider>
      </Box>
    </Fragment>
  );
};

export default Testimonials;
