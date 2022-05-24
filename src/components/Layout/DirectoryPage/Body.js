import { useState } from "react";

import { default as rawData } from "./UserData.json";
import Pagination from "../../UI/Pagination/Pagination";
import ProfileCard from "../../UI/ProfileCard/ProfileCard";

import { Box, Typography, Grid } from "@mui/material";

const Body = () => {
  let [page, setPage] = useState(1);
  let [pageData, setPageData] = useState("");

  return (
    <Box sx={{ mt: "5rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "3rem",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          Seach Bar
        </Typography>
        <Grid container spacing={2} sx={{ mt: "3rem" }}>
          {pageData &&
            pageData.currentData().map((user) => {
              return (
                <ProfileCard
                  personName={user.personName}
                  companyName={user.companyName}
                  companyDesc={user.companyDesc}
                  id={user.id}
                />
              );
            })}
        </Grid>
        <Pagination
          data={rawData}
          passPageData={setPageData}
          page={page}
          passPage={setPage}
          size="large"
          color="primary"
          pageSize={4}
        />
      </Box>
    </Box>
  );
};

export default Body;
