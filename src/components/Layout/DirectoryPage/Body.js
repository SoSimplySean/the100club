import { useState, useEffect } from "react";

// import { default as rawData } from "./UserData.json";
import Pagination from "../../UI/Pagination/Pagination";
import ProfileCard from "../../UI/ProfileCard/ProfileCard";
import { supabase } from "../../../api";

import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Grid,
  Paper,
  InputBase,
  IconButton,
  Typography,
} from "@mui/material";

const Body = () => {
  let [page, setPage] = useState(1);
  let [pageData, setPageData] = useState("");
  let [users, setUsers] = useState();

  useEffect(
    () => {
      fetchUsers();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const fetchUsers = async () => {
    let { data: users, error } = await supabase.from("profiles").select("*");
    if (error) console.log(error);
    else setUsers(users);
  };

  const passPageData = (data) => {
    setPageData(data);
    console.log(pageData);
  };

  if (users === undefined) {
    return <Typography>Still loading...</Typography>;
  }

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
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Directory"
            inputProps={{ "aria-label": "search directory" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Grid container spacing={2} sx={{ mt: "3rem" }}>
          {pageData &&
            pageData.currentData().map((user) => {
              return (
                <ProfileCard
                  key={user.id}
                  fullName={user.fullName}
                  title={user.title}
                  about={user.about}
                  id={user.id}
                />
              );
            })}
        </Grid>
        <Pagination
          data={users}
          passPageData={passPageData}
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
