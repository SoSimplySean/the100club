import { useEffect } from "react";

import usePagination from "./usePagination";

import { Box, Pagination as ReactPagination } from "@mui/material";

const Pagination = (props) => {
  const count = Math.ceil(props.data.length / props.pageSize);
  const pageData = usePagination(props.data, props.pageSize);

  useEffect(
    () => {
      props.passPageData(pageData);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleChange = (e, p) => {
    props.passPage(p);
    pageData.jump(p);
    props.passPageData(pageData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "4rem",
      }}
    >
      <ReactPagination
        count={count}
        size={props.size}
        page={props.page}
        color={props.color}
        onChange={handleChange}
      />
    </Box>
  );
};

export default Pagination;
