import React from "react";
import axios from "axios";
import { Cards } from "../../Components/Cards";

import Box from '@mui/material/Box';
export const Trending = () => {
  let [trendList, setTrendList] = React.useState([]);
  let [totalPage, setTotalPage] = React.useState(10);
  let [currentPage, setCurrentPage] = React.useState(1);
  React.useEffect(() => {
    console.log("in useEffect");
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}`
      )
      .then((resp) => {
        setTrendList([...resp.data.results]);
        setTotalPage(resp.data.total_pages);
      });
  }, [currentPage]);
  return (
    <>
    <Box style={{color:"white"}} component="span" sx={{ fontSize:50,fontFamily:'BlinkMacSystemFont'  }}>
     TRENDING TODAY
    </Box>
      <Cards
        list={trendList}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
    </>
  );
};
