import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import { Grid, Box } from "@mui/material";

const ProfileCard = (props) => {
  return (
    <Grid item lg={6} xl={3}>
      <Card
        key={props.id}
        sx={{
          position: "relative",
          minHeight: 450,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.15s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" , zIndex: 1},
        }}
      >
        <Box
          id="overlay"
          sx={{
            position: "absolute",
            width: "100%", 
            height: "100%",
            backdropFilter: "blur(8px)",
            zIndex: "1000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" , zIndex: 1},
          }}
        >
          <Button variant="contained">The 100-exclusive</Button>
        </Box>
        <CardContent>
          <Avatar sx={{ bgcolor: "secondary.main", width: 56, height: 56 }}>
            H
          </Avatar>
          <Typography variant="h5" component="h3" sx={{ mt: "2rem" }}>
            {props.personName}
          </Typography>
          <Typography>{props.companyName}</Typography>
          <Typography variant="body1" sx={{ mt: "1rem" }}>
            {props.companyDesc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" endIcon={<DoubleArrowSharpIcon />}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProfileCard;
