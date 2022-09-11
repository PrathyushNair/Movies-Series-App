import React from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import style from "./Search.module.css";
import axios from "axios";
import { Cards } from "../../Components/Cards";
export const Search = () => {
  const [type, setType] = React.useState(0);
const[text,setText]=React.useState({text:""})
let[trig,setTrig]=React.useState(false)
const [searchArr,setSetArr]=React.useState([])
let [totalPage, setTotalPage] = React.useState();
let [currentPage, setCurrentPage] = React.useState(1);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });

  const handleChange = (event, newValue) => {
   setType(newValue);
  };
const handleSearchChange=(e)=>{
    setText({...type,[e.target.name]:e.target.value})
    
}
  let handleSearch = () => {
      setTrig(!trig)
  };
  React.useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/search/${type===1 ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${text.text}`)
      .then((resp)=>{
        console.log(resp.data.results)
        setSetArr([...resp.data.results])
        setTotalPage(resp.data.total_pages);
      })
  },[trig,type])
 
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={style.searchBarContainer}>
          <TextField
            value={text.text}
            onChange={handleSearchChange}
            name="text"
            className={style.searchBox}
            sx={{ input: { color: "white" } }}
            label="Search"
            variant="filled"
          />

          <IconButton color="primary" aria-label="search button">
            <SearchIcon onClick={handleSearch} fontSize="large" />
          </IconButton>
        </div>
        <Tabs value={type} onChange={handleChange} indicatorColor="primary" textColor="primary">
          <Tab color="primary" label="Movies"  />
          <Tab color="primary" label="Series" />
        </Tabs>
      </ThemeProvider>
      {searchArr.length>0? <Cards
      list={searchArr}
      setCurrentPage={setCurrentPage}
      totalPage={totalPage}
    />:<h1>No data available</h1>}
    </>
  );
};
