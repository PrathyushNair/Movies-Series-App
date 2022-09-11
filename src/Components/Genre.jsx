import React from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";
import style from "./Genre.module.css"
import Box from '@mui/material/Box';
export const Genre = ({ type, selectedArr, setSelectedArr,label }) => {
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

  return (
    <div className={style.genreContainer}>
      {/* <h1 className={style.heading}>DISCOVER {label}</h1> */}
      <Box style={{color:"white"}} component="span" sx={{ fontSize:50,fontFamily:'BlinkMacSystemFont'  }}>
     DISCOVER {label}
    </Box>
      <div >
        {genreArr.map((el) => (
          <Chip
            label={el.name}
            variant="outlined"
          
            style={{backgroundColor:"#544d4f",color:"white"}}
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
            style={{backgroundColor:"#544d4f",color:"white"}}
            onDelete={() => handleDelete(el)}
          />
        ))}
      </div>
    </div>
  );
};
