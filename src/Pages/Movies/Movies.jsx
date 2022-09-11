import React from "react";
import axios from "axios";
import { Cards } from "../../Components/Cards";
import { Genre } from "../../Components/Genre";
import useGenre from "../../Customhook/useGenre.js";


export const Movies = () => {
  let [movieList, setMovieList] = React.useState([]);
  let [totalPage, setTotalPage] = React.useState(10);
  let [currentPage, setCurrentPage] = React.useState(1);
  let [selectedArr,setSelectedArr]=React.useState([])
  let selectedGenre=useGenre(selectedArr)
  // console.log(process.env.REACT_APP_API_KEY);
  // console.log(currentPage);
  React.useEffect(() => {
    console.log("in useEffect")
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}&with_genres=${selectedGenre}`
      )
      .then((resp) => {
        setMovieList([...resp.data.results]);
        setTotalPage(resp.data.total_pages);
      });
  }, [currentPage,selectedGenre]);
 
  return (
    <>
    
     <Genre label={"MOVIES"}type={"movie"} selectedArr={selectedArr} setSelectedArr={setSelectedArr}/>
     <Cards
      list={movieList}
      setCurrentPage={setCurrentPage}
      totalPage={totalPage}
    />
    </>
  );
};
