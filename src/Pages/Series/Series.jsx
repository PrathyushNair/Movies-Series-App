import React from 'react'
import { Cards } from '../../Components/Cards';
import axios from 'axios';
import { Genre } from "../../Components/Genre";
import useGenre from "../../Customhook/useGenre.js";
export const Series = () => {
    let [seriesList, setSeriesList] = React.useState([]);
    let [totalPage, setTotalPage] = React.useState(10);
    let [currentPage, setCurrentPage] = React.useState(1);
    let [selectedArr,setSelectedArr]=React.useState([])
    let selectedGenre=useGenre(selectedArr)
    React.useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}&with_genres=${selectedGenre}`
          )
          .then((resp) => {
            setSeriesList([...resp.data.results]);
            setTotalPage(resp.data.total_pages);
          });
      }, [currentPage,selectedGenre]);
  return (
    <>
    
    <Genre label={"SERIES"}type={"tv"} selectedArr={selectedArr} setSelectedArr={setSelectedArr}/>
    <Cards list={seriesList}
    setCurrentPage={setCurrentPage}
    totalPage={totalPage}/>
    </>
    
  )
}
