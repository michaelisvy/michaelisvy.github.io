import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import "../styles/ClimateFresk.css";

export const ClimateFresk = (props) => {
  const images = [
    {
      imageUrl: "/src/images/cf/cf1.jpeg",
      caption: "Image 1",
    },
    {
      imageUrl: "/src/images/cf/cf2.jpeg",
      caption: "Image 2",
    },
    {
      imageUrl: "/src/images/cf/cf3.jpeg",
      caption: "Image 3",
    },
    {
      imageUrl: "/src/images/cf/cf4.jpeg",
      caption: "Image 4",
    },
    // Add more image objects as needed
  ];

  return (
    <Carousel className="carousel">
      {images.map((image, index) => (
        <Paper key={index}>
          <img src={image.imageUrl} alt={image.caption} />
        </Paper>
      ))}
    </Carousel>
  );
};
