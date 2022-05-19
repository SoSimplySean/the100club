import css from "./FAQ.module.css";

import Container from "../../UI/Container/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = (props) => {
  return (
    <Container>
      <h3>FAQ</h3>
      <div>
        <Accordion className={css.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              What does it cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Membership is currently free, with limits of 100 new members per
              cohort. We plan on introducing monthly pricing in the future, but
              existing members will not be required to pay.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>How can I join?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Cohorts are launched at the start of every quarter. Our next
              cohort is set to launch in Aug 2022. In the mean time, to stay
              updated and ensure you don't miss applications, join our email
              list and telegram channel for exciting content.
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
              What will I get as a member?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              On top of matching you up with a mastermind group that is aligned
              with your goals and aspirations, you will also gain access to 100
              Exclusive content like our Slack Channel, Membership Directory,
              Swag Store, Private Networking Events, and much more.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
};

export default FAQ;
