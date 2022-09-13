import axios from "axios";
import React from "react";
import Slider from "react-slick";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
export const Carousel = ({ media_type, id }) => {
  let [cast, setCast] = React.useState([]);
  const handleDragStart = (e) => e.preventDefault();
  ////////
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  let items = cast.map((el) => (
    <div style={{  display: "flex",flexDirection: "column",objectFit: "contain",padding: "10px"}}>
      <img
        alt={el.name}
        onDragStart={handleDragStart}
        src={
          el.profile_path
            ? "https://image.tmdb.org/t/p/w300/" + el.profile_path
            : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
      />

      <p>{el.name}</p>
    </div>
  ));
  ////////

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((resp) => {
        setCast([...resp.data.cast]);
      });
  }, []);
  console.log("items", items);
  return (
  
      <AliceCarousel
        mouseTracking
        infinite
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
        autoPlayInterval={3000}
      />
   
  );
};
