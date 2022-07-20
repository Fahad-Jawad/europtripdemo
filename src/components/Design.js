import React from "react";
import Grid from "@mui/material/Grid";
import ActivityDisplay from "./ActivityDisplay";
import Chart from "./Chart";
import Header from './Header';
import Sideinformation from "./Sideinformation";
export default function Design() {
  return (
    <>
    <Header/>
      <Grid container spacing={3} className="left-grid">
        <Grid item xs={10} lg={3} sx={{ marginLeft: 4 }}>
          <Sideinformation/>
        </Grid>

        <Grid item xs={12} lg={8}>
        
          <ActivityDisplay />
        </Grid>
      </Grid>
    </>
  );
}
