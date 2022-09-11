import React from "react";
import Grid from "@mui/material/Grid";
import style from "./Cards.module.css";
import { CustomPagination } from "./Pagination";

export const Cards = ({ list, setCurrentPage, totalPage }) => {
  return (
    <>
    
      <div className={style.mainContainer}>
      
        {list.map((el, index) => (
          <Grid
            className={style.individual}
            item
            xs={4}
            sm={4}
            md={3}
            key={index}
           fontSize="18px"
          >
            <div>
              <img
                alt={el.title || el.name}
                src={el.poster_path?"https://image.tmdb.org/t/p/w300/" + el.poster_path:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}
              ></img>
            </div>
            <div>{el.title || el.name}</div>
            <div
              className={style.rating}
              style={
                el.vote_average < 6
                  ? { backgroundColor: "#e61c5d" }
                  : { backgroundColor: "#217867" }
              }
            >
              Rating: {el.vote_average}
            </div>
            <div>{el.release_date || el.first_air_date}</div>
          </Grid>
        ))}
      </div>
      <CustomPagination setCurrentPage={setCurrentPage} totalPage={totalPage} />
    </>
  );
};
