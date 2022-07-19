import { useState, useEffect } from "react";

import Pagination from "../../UI/Pagination/Pagination";
import ProfileCard from "../../UI/ProfileCard/ProfileCard";
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
  InputLabel,
  MenuItem,
  FormControl,
  Select, 
  Button,
} from "@mui/material";

const Body = ({ session, user }) => {
  let [page, setPage] = useState(1);
  let [pageData, setPageData] = useState("");
  let [users, setUsers] = useState();
  let [allUsers, setAllUsers] = useState([]);
  let [industry, setIndustry] = useState('');
  let [skills, setSkills] = useState('');
  let [cohort, setCohort] = useState('');
  let [member, setMember] = useState('');

  useEffect(
    () => {
      fetchUsers();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const fetchUsers = async () => {
    let { data: users, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("membershipLevel", "member");
    if (error) console.log(error);
    else setUsers(users);
    setAllUsers(users);
  };

  const passPageData = (data) => {
    setPageData(data);
    console.log(pageData);
  };

  if (users === undefined) {
    return <Typography>Still loading...</Typography>;
  }

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.fullName}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  const filterIndustry = event => {
    const value = event.target.value;
    setIndustry(value);
    const filteredUsers = allUsers.filter(user => (`${user.industry}`.includes(value)));
    setUsers(filteredUsers);
  }

  const filterSkills = event => {
    const value = event.target.value;
    setSkills(value);
    const filteredUsers = allUsers.filter(user => (`${user.skills}`.includes(value)));
    setUsers(filteredUsers);
  }

  const filterCohort = event => {
    const value = event.target.value;
    setCohort(value);
    const filteredUsers = allUsers.filter(user => (`${user.cohort}`.includes(value)));
    setUsers(filteredUsers);
  }

  const filterMembers = event => {
    const value = event.target.value;
    setMember(value);
    const filteredUsers = allUsers.filter(user => (`${user.membershipLevel}`.includes(value)));
    setUsers(filteredUsers);
  }

  const filterClear = event => {
    setUsers(allUsers);
    setIndustry('');
    setSkills('');
    setCohort('');
    setMember('');
  }

  return (
    <Box sx={{ mt: "3rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "3rem",
        }}
      >
        {" "}
        {user.membershipLevel !== "member" && (
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

        {/* Search Bar */}
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
            onInput={filterCards}
            inputProps={{ "aria-label": "search directory" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        {/* Filter */}
        <Grid container spacing={2} sx={{ ml: "10px", mt: "1rem", display: "flex", gap: "1rem" }} justifyContent="space-between" alignItems="center">
          <Box component="span"
          m={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          style={{ minWidth: "70%"}}>
            <FormControl sx={{ width: 0.23 }}>
              <InputLabel id="select-industry">Industry</InputLabel>
              <Select
                labelId="Industry"
                id="Industry"
                label="Industry"
                value={industry}
                onChange={filterIndustry}
              >
                <MenuItem value={"Creative Agency"}>Creative Agency</MenuItem>
                <MenuItem value={"Food"}>Food</MenuItem>
                <MenuItem value={"SaaS"}>SaaS</MenuItem>
                <MenuItem value={"Medtech"}>Medtech</MenuItem>
                <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
                <MenuItem value={"eCommerce"}>eCommerce</MenuItem>
                <MenuItem value={"Marketplace"}>Marketplace</MenuItem>
                <MenuItem value={"Membership Platform"}>Membership Platform</MenuItem>
              </Select>
            </FormControl>
            
            <FormControl sx={{ width: 0.23 }}>
              <InputLabel id="select-skills">Skills & Interests</InputLabel>
              <Select
                labelId="skills"
                id="skills"
                label="Skills & Interests"
                value={skills}
                onChange={filterSkills}
              >
                <MenuItem value={"Bootstrapping"}>Bootstrapping</MenuItem>
                <MenuItem value={"Building a team"}>Building a team</MenuItem>
                <MenuItem value={"Content marketing"}>Content marketing</MenuItem>
                <MenuItem value={"Conversion rate optimization"}>Conversion rate optimization</MenuItem>
                <MenuItem value={"Copywriting"}>Copywriting</MenuItem>
                <MenuItem value={"Customer success"}>Customer success</MenuItem>
                <MenuItem value={"Data science"}>Data science</MenuItem>
                <MenuItem value={"Design / UX"}>Design / UX</MenuItem>
                <MenuItem value={"Email marketing"}>Email marketing</MenuItem>
                <MenuItem value={"Facebook ads"}>Facebook ads</MenuItem>
                <MenuItem value={"Go to market strategy"}>Go to market strategy</MenuItem>
                <MenuItem value={"Google ads"}>Google ads</MenuItem>
                <MenuItem value={"Growth marketing"}>Growth marketing</MenuItem>
                <MenuItem value={"Idea validation"}>Idea validation</MenuItem>
                <MenuItem value={"Link building"}>Link building</MenuItem>
                <MenuItem value={"Operations"}>Operations</MenuItem>
                <MenuItem value={"Marketing automation"}>Marketing automation</MenuItem>
                <MenuItem value={"No-code"}>No-code</MenuItem>
                <MenuItem value={"Performance marketing"}>Performance marketing</MenuItem>
                <MenuItem value={"PPC strategies"}>PPC strategies</MenuItem>
                <MenuItem value={"Pricing strategy"}>Pricing strategy</MenuItem>
                <MenuItem value={"Product analytics"}>Product analytics</MenuItem>
                <MenuItem value={"Product management"}>Product management</MenuItem>
                <MenuItem value={"Product market fit"}>Product market fit</MenuItem>
                <MenuItem value={"Public relations"}>Public relations</MenuItem>
                <MenuItem value={"Raising funding"}>Raising funding</MenuItem>
                <MenuItem value={"Sales"}>Sales</MenuItem>
                <MenuItem value={"SEO"}>SEO</MenuItem>
                <MenuItem value={"Social media"}>Social media</MenuItem>
                <MenuItem value={"User research"}>User research</MenuItem>
                <MenuItem value={"Web Development"}>Web Development</MenuItem>
            
              </Select>
            </FormControl>

            <FormControl sx={{ width: 0.23 }}>
              <InputLabel id="select-cohort">Cohort</InputLabel>
              <Select
                labelId="Cohort"
                id="Cohort"
                label="Cohort"
                value={cohort}
                onChange={filterCohort}
              >
                <MenuItem value={"000"}>000</MenuItem>
                <MenuItem value={"001"}>001</MenuItem>
                <MenuItem value={"002"}>002</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ width: 0.23 }}>
              <InputLabel id="select-membership">Membership</InputLabel>
              <Select
                labelId="Membership"
                id="Membership"
                label="Membership"
                value={member}
                onChange={filterMembers}
              >
                <MenuItem value={"member"}>member</MenuItem>
                <MenuItem value={"waitlist"}>waitlist</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box m={1}>
            <Button color= "primary" variant="contained" sx={{ height: 40 }} onClick={filterClear}>
              Clear All
            </Button>
          </Box>
        </Grid>
        
        
        {/* Profile cards */}
        <Grid container spacing={2} sx={{ mt: "3rem" }}>
          {users.map((profile) => {
              return (
                <ProfileCard
                  // test
                  session={session}
                  membershipLevel={user.membershipLevel}
                  key={profile.id}
                  fullName={profile.fullName}
                  title={profile.title}
                  about={profile.about}
                  id={profile.id}
                  avatar_url={profile.avatar_url}
                />
              );
            })}
        </Grid>
        <Pagination
          data={users}
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
