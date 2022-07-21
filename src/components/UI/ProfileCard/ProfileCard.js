import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileCard = (props) => {
  let navigate = useNavigate();

  return (
    <Grid item xs={12} lg={6} xl={3}>
      <Card
        sx={{
          position: "relative",
          minHeight: 375,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.2s ease-in-out",
          "&:hover": { transform: "scale3d(1.03, 1.03, 1)", zIndex: 1 },
        }}
      >
        {props.membershipLevel !== "member" && (
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
            }}
          >
            <Button variant="contained">The 100-exclusive</Button>
          </Box>
        )}
        <CardContent>
          <Avatar
            src={
              props.avatar_url
                ? `https://hnjiwdxlyyttjbocwpfw.supabase.co/storage/v1/object/public/avatars/${props.avatar_url}`
                : "https://picsum.photos/200"
            }
            alt={props.avatar_url ? "Avatar" : "No image"}
            className="avatar image"
            style={{ height: 80, width: 80, border: "4px solid #F6F6F6" }}
          />
          <Typography
            variant="h5"
            component="h3"
            sx={{ mt: "2rem", fontWeight: "bold" }}
          >
            {props.fullName}
          </Typography>
          <Typography>{props.title}</Typography>
          <Typography variant="subtitle2" sx={{ mt: "1rem" }}>
            {props.about}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            endIcon={<DoubleArrowSharpIcon />}
            onClick={() => navigate(`/directory/${props.id}`)}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProfileCard;
