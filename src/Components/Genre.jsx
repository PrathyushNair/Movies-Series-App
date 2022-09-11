import React from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";
import style from "./Genre.module.css"
export const Genre = ({ type, selectedArr, setSelectedArr }) => {
  let [genreArr, setGenreArr] = React.useState([]);

  const handleClick = (el) => {
    setSelectedArr([...selectedArr, el]);
  };
  const handleDelete = (element) => {
    let newarr = selectedArr.filter((el) => {
      return el.id !== element.id;
    });
    setSelectedArr(newarr);
  };
  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((resp) => {
        setGenreArr(resp.data.genres);
      });
  }, [type]);
  console.log("selected arr", selectedArr);
  return (
    <div >
      <div className={style.genreContainer}>
        {genreArr.map((el) => (
          <Chip
            label={el.name}
            variant="outlined"
            color="success"
            onClick={() => handleClick(el)}
            clickable
          />
        ))}
      </div>
      <div className={style.Container}>
        {selectedArr.map((el) => (
          <Chip
            label={el.name}
            variant="outlined"
            color="success"
            onDelete={() => handleDelete(el)}
          />
        ))}
      </div>
    </div>
  );
};
