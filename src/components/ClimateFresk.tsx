import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "../styles/ClimateFresk.css";
import { useState, useEffect } from "react";
import cf1ImagePath from "../images/cf/cf1.jpeg";
import cf2ImagePath from "../images/cf/cf2.jpeg";
import cf3ImagePath from "../images/cf/cf3.jpeg";
import cf4ImagePath from "../images/cf/cf4.jpeg";

export const ClimateFresk = () => {
  const [stopAutoplay, setStopAutoplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStopAutoplay(true);
    }, 20000); // Stop autoplay after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const images = [
    {
      imageUrl: cf1ImagePath,
      caption: "Image 1",
    },
    {
      imageUrl: cf2ImagePath,
      caption: "Image 2",
    },
    {
      imageUrl: cf3ImagePath,
      caption: "Image 3",
    },
    {
      imageUrl: cf4ImagePath,
      caption: "Image 4",
    },
    // Add more image objects as needed
  ];

  return (
    <>
      <Carousel autoPlay={!stopAutoplay} className="carousel">
        {images.map((image, index) => (
          <Paper key={index}>
            <img
              src={image.imageUrl}
              alt={image.caption}
              className="carousel-image"
            />
          </Paper>
        ))}
      </Carousel>
      <div id="description">
        {" "}
        <h2>The Climate Fresk</h2>
        <a href="http://climatefresk.org/">The Climate Fresk</a> is a science
        based Workshop that aims to educate and raise awareness of climate
        change worldwide. Based on the IPCC reports, it explains how and why
        climate is changing at the current pace and the consequences of its
        disruption. Participants use a deck of 42 cards and lay them in a cause
        to effect way using collective intelligence. Guided by a Facilitator,
        participants gain a rich understanding of the complexity of climate
        science and consequence of global warming in a short span of 3 hours.
        Over 1,000,000 people have participated in the Workshop worldwide and
        over 4000 in Singapore.
        <h2>2 Tonnes workshop</h2>
        <a href="https://en.2tonnes.org/">2 Tonnes</a> is the amount of
        greenhouse gases emitted per person in a CO2 neutral world. It is also
        the objective to be reached by 2050 in order to respect the commitments
        of the Paris Agreement: to keep the increase in global temperature at a
        level below 2 degrees. The 2 Tonnes workshop allows participants to
        explore the future as a team and try to limit climate change by reaching
        these famous 2 tons per year and per person, by 2050. To allow a
        systemic understanding of the issues, the workshop takes into account
        both individual and collective sides of the subject, without forgetting
        the role of influence, a key issue in the transformation of society.
        Aimed at both novices and experts on the subject of climate change, it
        is also a real serious games, designed to bring together and debate
        together, so that everyone can have fun and express their opinion.
        <h2>The Biodiversity Collage</h2>
        <a href="https://www.fresquedelabiodiversite.org/en.html">
          The Biodiversity Collage
        </a>{" "}
        is a workshop that allows to understand the challenges around
        biodiversity, through a fun, collaborative, visual and accessible
        workshop, based on the IPBES report.
        <h2>The Digital Collage</h2>
        <a href="https://digitalcollage.org/">The Digital Collage</a> is a
        workshop workshop to understand the impact of digital technology on the
        environment. The aim of this serious game is to raise awareness and
        train participants to the environmental issues linked to digital
        technology. The workshop also aims to lay down the key solutions to
        reach more sustainable practices in digital, and encourages discussions
        between the participants on the topic. This workshop is a real team
        building tool allowing participants to come and learn together how to
        reach sustainability in the digital sector.
      </div>
    </>
  );
};
