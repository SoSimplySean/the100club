import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const DealCard = (props) => {
  return (
    <Grid item lg={6} xl={3}>
      <Card
        sx={{
          position: "relative",
          minHeight: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.2s ease-in-out",
          "&:hover": { transform: "scale3d(1.03, 1.03, 1)", zIndex: 1 },
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            height="350"
            src={`https://hnjiwdxlyyttjbocwpfw.supabase.co/storage/v1/object/public/partner-logo/${props.partnerLogo}`}
            alt="green iguana"
          />
          <Typography
            variant="h5"
            component="h3"
            sx={{ mt: "2rem", fontWeight: "bold" }}
          >
            {props.partnerName}
          </Typography>
          {props.partnerBenefits.map((benefit) => {
            return <Typography>• {benefit}</Typography>;
          })}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DealCard;
