import React from "react";
import axios from "axios";
import { Cards } from "../../Components/Cards";
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
export const Trending = () => {
  let [trendList, setTrendList] = React.useState([]);
  let [totalPage, setTotalPage] = React.useState(10);
  let [currentPage, setCurrentPage] = React.useState(1);
  const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    setOpen(true)
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}`
      )
      .then((resp) => {
        setTrendList([...resp.data.results]);
        setTotalPage(resp.data.total_pages);
        setOpen(false)
      });
  }, [currentPage]);
  return (
    <>
       <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    <Box style={{color:"white"}} component="span" sx={{ fontSize:50,fontFamily:'BlinkMacSystemFont'  }}>
     TRENDING TODAY
    </Box>
      <Cards
        type={null}
        list={trendList}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
    </>
  );
};
