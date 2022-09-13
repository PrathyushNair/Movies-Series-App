import React from "react";
import style from "./Funspace.module.css";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link, useNavigate } from "react-router-dom";
import Fade from "@mui/material/Fade";

export const Funspace = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    let route = e.target.innerText;
    console.log(route);
    switch (route) {
      case "Trending": {
        console.log("in case", route);
        navigate("/");
        break;
      }
      case "Movies": {
        console.log("in case", route);
        navigate("/movies");
        break;
      }
      case "Series": {
        console.log("in case", route);
        navigate("/series");
        break;
      }
      case "Search": {
        console.log("in case", route);
        navigate("/search");
        break;
      }
      default:
        {
          navigate("/")
        }
    }
    setAnchorEl(null);
  };

  return (
    <div className={style.funContainer}>
      <div
        className={style.logo}
      >
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          FunSpace
        </Link>
      </div>
      <div className={style.optionContainer}>
        <div>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            <div>
              <WhatshotIcon />
            </div>
            <b>Trending</b>
          </Link>
        </div>
        <div>
          <Link style={{ color: "white", textDecoration: "none" }} to="/movies">
            <div>
              <MovieIcon />
            </div>
            <b>Movies</b>
          </Link>
        </div>
        <div>
          <Link style={{ color: "white", textDecoration: "none" }} to="/series">
            <div>
              <TvIcon />
            </div>
            <b>Series</b>
          </Link>
        </div>
        <div>
          <Link style={{ color: "white", textDecoration: "none" }} to="/search">
            <div>
              <SearchIcon />
            </div>
            <b>Search</b>
          </Link>
        </div>
      </div>

      
      <div
       className={style.menuContainer}
      >
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ backgroundColor: "transparent", color: "white" }}
        >
          <MenuIcon style={{height:"40px",width:"40px"}}/>
        </Button>

        <Menu
          id="fade-menu"
          className={style.menu}
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
         
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem
         
            sx={{
              "&:hover": { bgcolor: "#131927" },
              bgcolor: "#131927",
              color: "white",
              display: "flex",
              gap: "15px",
            }}
            onClick={handleClose}
          >
            {" "}
            <WhatshotIcon />
            Trending
          </MenuItem>
          <MenuItem
            sx={{
              "&:hover": { bgcolor: "#131927" },
              bgcolor: "#131927",
              color: "white",
              display: "flex",
              gap: "15px",
            }}
            onClick={handleClose}
          >
            {" "}
            <MovieIcon />
            Movies
          </MenuItem>
          <MenuItem
            sx={{
              "&:hover": { bgcolor: "#131927" },
              bgcolor: "#131927",
              color: "white",
              display: "flex",
              gap: "15px",
            }}
            onClick={handleClose}
          >
            <TvIcon />
            Series
          </MenuItem>
          <MenuItem
            sx={{
              "&:hover": { bgcolor: "#131927" },
              bgcolor: "#131927",
              color: "white",
              display: "flex",
              gap: "15px",
            }}
            onClick={handleClose}
          >
            {" "}
            <SearchIcon />
            Search
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};
