import React from 'react'
import { Cards } from '../../Components/Cards';
import axios from 'axios';
export const Series = () => {
    let [seriesList, setSeriesList] = React.useState([]);
    let [totalPage, setTotalPage] = React.useState(10);
    let [currentPage, setCurrentPage] = React.useState(1);
    React.useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}`
          )
          .then((resp) => {
            setSeriesList([...resp.data.results]);
            setTotalPage(resp.data.total_pages);
          });
      }, [currentPage]);
  return (
    <>
    <h1 style={{width:"40%",margin:"auto",color:"white"}}>DISCOVER SERIES</h1>
    <Cards  list={seriesList}
    setCurrentPage={setCurrentPage}
    totalPage={totalPage}/>
    </>
    
  )
}
