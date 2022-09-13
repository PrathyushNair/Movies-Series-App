import React from 'react'
import { Cards } from '../../Components/Cards';
import axios from 'axios';
import { Genre } from "../../Components/Genre";
import useGenre from "../../Customhook/useGenre.js";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const Series = () => {
    let [seriesList, setSeriesList] = React.useState([]);
    let [totalPage, setTotalPage] = React.useState(10);
    let [currentPage, setCurrentPage] = React.useState(1);
    let [selectedArr,setSelectedArr]=React.useState([])
    let selectedGenre=useGenre(selectedArr)
    const [open, setOpen] = React.useState(true);
    React.useEffect(() => {
      setOpen(true)
        axios
          .get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}&with_genres=${selectedGenre}`
          )
          .then((resp) => {
            setSeriesList([...resp.data.results]);
            setTotalPage(resp.data.total_pages);
            setOpen(false)
          });
      }, [currentPage,selectedGenre]);
  return (
    <>
   <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    <Genre label={"SERIES"}type={"tv"} selectedArr={selectedArr} setSelectedArr={setSelectedArr}/>
    <Cards 
    type={"tv"}
    list={seriesList}
    setCurrentPage={setCurrentPage}
    totalPage={totalPage}/>
    </>
    
  )
}
