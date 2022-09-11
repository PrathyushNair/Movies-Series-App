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
          >
            <div>
              <img
                alt={el.title || el.name}
                src={"https://image.tmdb.org/t/p/w300/" + el.poster_path}
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
