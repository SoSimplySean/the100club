import { useState, useEffect } from "react";

import Pagination from "../../UI/Pagination/Pagination";
import SwagItem from "../../UI/SwagItem/SwagItem";
import { supabase } from "../../../api";

import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Grid,
  Paper,
  InputBase,
  IconButton,
  Typography,
} from "@mui/material";

const Body = ({ session, membershipLevel }) => {
  let [page, setPage] = useState(1);
  let [pageData, setPageData] = useState("");
  let [items, setItems] = useState();

  useEffect(
    () => {
      fetchItems();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const fetchItems = async () => {
    let { data: swagItems, error } = await supabase.from("swag").select("*");
    if (error) console.log(error);
    else setItems(swagItems);
  };

  const passPageData = (data) => {
    setPageData(data);
  };

  if (items === undefined) {
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
        {" "}
        {membershipLevel !== "member" && (
          <Link
            to={"/dashboard/application"}
            style={{
              width: "100%",
              textDecoration: "none",
            }}
          >
            <Paper
              elevation={4}
              sx={{
                p: "2px 4px",
                mb: "2rem",
                width: "100%",
                backgroundColor: "primary.main",
              }}
            >
              <Typography
                sx={{
                  ml: 1,
                  p: "10px",
                  color: "white",
                }}
              >
                Create an account and apply to become a member of The 100 Club
                for access
              </Typography>
            </Paper>
          </Link>
        )}
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
            pageData.currentData().map((item) => {
              return (
                <SwagItem
                  session={session}
                  membershipLevel={membershipLevel}
                  key={item.id}
                  itemName={item.itemName}
                  itemBrief={item.itemBrief}
                  itemImg={item.itemImg}
                  id={item.id}
                />
              );
            })}
        </Grid>
        <Pagination
          data={items}
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
