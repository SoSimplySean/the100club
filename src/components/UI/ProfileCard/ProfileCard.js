import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import { Grid } from "@mui/material";

const ProfileCard = (props) => {
  return (
    <Grid item sm={3}>
      <Card
        key={props.id}
        sx={{
          minWidth: 275,
          minHeight: 450,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
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
