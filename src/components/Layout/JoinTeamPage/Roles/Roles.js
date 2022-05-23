import { Typography, Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Roles = (props) => {
  return (
    <Box sx={{ mt: "8rem" }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: "bold", mb: "2rem" }}
      >
        Our Roles
      </Typography>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>The Scout</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Join our Scout Regiment to search far and wide for talent worthy
              of becoming 1 of the 100. A pretty fun networking role where you
              help find entrepreneurs for our upcoming cohorts.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              The Party Monster
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Do you like bringing people together? This is the role for you.
              We're hoping to run a get together for our entire community once
              every quarter. You'll own it.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              The Partner Hunter
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Do you like building bridges between organisations? If so, join us
              as a Partner Hunter, where you will be able to form relationships
              and directly support the community by supplying us with resources
              from sponsors.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
};

export default Roles;
