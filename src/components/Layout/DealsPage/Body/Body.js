import { useState, useEffect } from "react";

import Pagination from "../../../UI/Pagination/Pagination";
import DealCard from "../../../UI/DealCard/DealCard";
import { supabase } from "../../../../api";

import { Box, Grid, Typography } from "@mui/material";

const Body = ({ session, user }) => {
  let [page, setPage] = useState(1);
  let [pageData, setPageData] = useState("");
  let [deals, setDeals] = useState();

  useEffect(
    () => {
      fetchDeals();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const fetchDeals = async () => {
    let { data: deals, error } = await supabase.from("deals").select("*");
    if (error) console.log(error);
    else setDeals(deals);
  };

  const passPageData = (data) => {
    setPageData(data);
    console.log(pageData);
  };

  if (deals === undefined) {
    return <Typography>Still loading...</Typography>;
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
        <Grid container spacing={2} sx={{ mt: "3rem" }}>
          {pageData &&
            pageData.currentData().map((deal) => {
              return (
                <DealCard
                  key={deal.id}
                  partnerLogo={deal.partnerLogo}
                  partnerName={deal.partnerName}
                  partnerBenefits={deal.partnerBenefits}
                  id={deal.id}
                />
              );
            })}
        </Grid>
        <Pagination
          data={deals}
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
