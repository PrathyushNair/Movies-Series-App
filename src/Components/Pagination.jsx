import React from "react";
import Pagination from "@mui/material/Pagination";
import style from "./Pagination.module.css";
export const CustomPagination = ({ totalPage, setCurrentPage }) => {
  let handlePageChange = (value) => {
    setCurrentPage(value);
    window.scroll(0, 0);
  };
  return (
    <div className={style.pageContainer}>
      <Pagination
        onChange={(e) => handlePageChange(e.target.innerText)}
        count={totalPage}
        color="primary"
      />
    </div>
  );
};
