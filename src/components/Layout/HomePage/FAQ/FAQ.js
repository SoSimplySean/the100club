import Container from "../../../UI/Container/Container";

import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = (props) => {
  return (
    <Container>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: "bold", mb: "2rem" }}
      >
        FAQ
      </Typography>
      <div>
        <Accordion>
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
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              What is a mastermind group?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A mastermind group is essentially a group of entrepreneurs and
              friends getting together every 2 weeks to have a chat about their
              wins and losses. Use the opportunity to bounce ideas off each
              other, hold each other accountable on tasks to be completed and
              leverage on each other's network!
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
              How is a mastermind group formed?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can trust that we have a very robust process in place to make
              it easy for you. On our end, when a new cohort launches, we will
              first identify 4 individuals who are a good fit for each other,
              based on their niche and stage of their business. From there, we
              will organise a physical meal with all 4 individuals along with
              the founders of the club to have a vibe check. If everybody's
              happy with each other, we'll onboard the group at the end of the
              meal, identifying the meeting frequency, the group moderator, the
              agenda for meetings, and so on. All grey area will be removed so
              that you can just go into biweekly catchups and talk business!
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
              updated and ensure you don't miss applications,{" "}
              <strong>
                <Link to={"/join"}>join our waitlist</Link>
              </strong>{" "}
              by creating a free account and check out our{" "}
              <strong>
                <a
                  target="_blank"
                  href="https://t.me/JoinThe100Club"
                  rel="noreferrer"
                >
                  Telegram channel for more general updates
                </a>
              </strong>
              .
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
