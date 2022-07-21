import { useEffect, useState } from "react";

import { supabase } from "../../../api";
import SwagImage from "./SwagImage";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import {
  Grid,
  Typography,
  Paper,
  Chip,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";

const SwagPage = (props) => {
  let [size, setSize] = useState("S");
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
        mt: "4rem",
        mx: "auto",
        textAlign: "center",
        justifyContent: "space-between",
      }}
    >
      <Grid item xs={12} lg={5.5}>
        <Carousel>
          <SwagImage
            img={`https://hnjiwdxlyyttjbocwpfw.supabase.co/storage/v1/object/public/swag/${item.itemImg}`}
          />
          <SwagImage
            img={`https://hnjiwdxlyyttjbocwpfw.supabase.co/storage/v1/object/public/swag/${item.itemImg}`}
          />
          <SwagImage
            img={`https://hnjiwdxlyyttjbocwpfw.supabase.co/storage/v1/object/public/swag/${item.itemImg}`}
          />
        </Carousel>
      </Grid>
      <Grid item xs={12} lg={5.5} sx={{ textAlign: "left" }}>
        <Paper
          elevation={4}
          sx={{
            padding: "2rem",
            textAlign: "left",
          }}
        >
          <Chip
            label={`${item.itemCredit} credits`}
            sx={{ fontWeight: "bold" }}
          />
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", mt: "2rem" }}
          >
            {item.itemName}
          </Typography>

          <Typography variant="body1" sx={{ mt: "1rem" }}>
            {item.itemDetails}
          </Typography>
          <FormControl fullWidth sx={{ mt: "2.5rem" }}>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              fullWidth
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={size}
              label="Size"
              onChange={(e) => setSize(e.target.value)}
            >
              <MenuItem value={"S"}>S</MenuItem>
              <MenuItem value={"M"}>M</MenuItem>
              <MenuItem value={"L"}>L</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            sx={{ backgroundColor: "primary", mt: "2rem" }}
            disabled
          >
            Add to cart
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SwagPage;
