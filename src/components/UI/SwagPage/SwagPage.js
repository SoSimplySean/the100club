import { useEffect, useState } from "react";

import { supabase } from "../../../api";

import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const SwagPage = (props) => {
  let [item, setItem] = useState({});
  let { id } = useParams();

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  const getUser = async () => {
    const { data: item, error } = await supabase
      .from("swag")
      .select("*")
      .eq("id", id)
      .single();
    if (error) console.log(error);
    else {
      setItem(item);
    }
  };

  if (item === undefined) {
    return <Typography>Still loading...</Typography>;
  }

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "4rem",
        mx: "auto",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{ fontWeight: "bold", mt: "2rem" }}
      >
        {item.itemName}
      </Typography>
    </Grid>
  );
};

export default SwagPage;
