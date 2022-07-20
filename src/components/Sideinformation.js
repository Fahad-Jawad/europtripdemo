import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Chart from "./Chart";

export default function Sideinformation() {
  let [loc1, updateloc1] = useState(0);
  let [loc2, updateloc2] = useState(0);

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item sx={10}>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                <PersonIcon
                  sx={{ fontSize: 19, marginRight: 1, verticalAlign: "sub" }}
                />
                Travellers
              </Typography>
            </Grid>

            <Grid item sx={2}>
              <Button
                variant="text"
                sx={{ fontSize: 12, padding: 0, color: "#333333" }}
                endIcon={
                  <ArrowDropDownIcon
                    sx={{ fontSize: 20, verticalAlign: "sub" }}
                  />
                }
              ></Button>
            </Grid>
          </Grid>
          <Typography variant="h6" sx={{ fontWeight: 600, marginTop: 1 }}>
            3 Adults - 1 Room
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275, marginTop: 3 }}>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item sx={10}>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                <FlightTakeoffIcon
                  sx={{ fontSize: 19, marginRight: 1, verticalAlign: "sub" }}
                />
                Trip Dates
              </Typography>
            </Grid>

            <Grid item sx={2}>
              <Button
                variant="text"
                sx={{ fontSize: 12, padding: 0, color: "#333333" }}
                endIcon={
                  <ArrowDropDownIcon
                    sx={{ fontSize: 20, verticalAlign: "sub" }}
                  />
                }
              ></Button>
            </Grid>
          </Grid>
          <Typography
            sx={{
              fontSize: 13,
              width: "75%",
              color: "white",
              backgroundColor: "#E44E4ECC",
              borderRadius: "0.5rem",
              padding: 0.5,
              textAlign: "center",
            }}
          >
            Cheaper departure date available
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, marginTop: 1 }}>
            9th Sep - 4th Oct 2021
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275, marginTop: 3 }}>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item sx={12}>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                <LocationOnIcon
                  sx={{ fontSize: 19, marginRight: 1, verticalAlign: "sub" }}
                />
                Destinations
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5}>
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: 1 }}>
                {" "}
                Madrid:
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ display: "flex" }}>
              <Button
                onClick={() => updateloc1(loc1 - 1)}
                sx={{ color: "black" }}
              >
                <RemoveIcon />
              </Button>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                defaultValue="0"
                value={loc1}
                label=""
                InputProps={{ readOnly: true }}
              />
              <Button
                onClick={() => updateloc1(loc1 + 1)}
                sx={{ color: "black" }}
              >
                <AddIcon />
              </Button>
            </Grid>
          </Grid>

          <Grid container sx={{ marginTop: 2 }}>
            <Grid item xs={5}>
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: 1 }}>
                {" "}
                Rome:
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ display: "flex" }}>
              <Button
                onClick={() => updateloc2(loc2 - 1)}
                sx={{ color: "black" }}
              >
                <RemoveIcon />
              </Button>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                defaultValue="0"
                value={loc2}
                label=""
                InputProps={{ readOnly: true }}
              />
              <Button
                onClick={() => updateloc2(loc2 + 1)}
                sx={{ color: "black" }}
              >
                <AddIcon />
              </Button>
            </Grid>
          </Grid>
          <Button
            variant="text"
            sx={{ color: "#18204E", marginTop: 1 }}
            startIcon={
              <AddIcon
                sx={{
                  fontSize: 19,
                  marginRight: 0.5,
                  verticalAlign: "sub",
                  color: "black",
                }}
              />
            }
          >
            Add third destination
          </Button>
          <Typography
            sx={{ fontSize: 15 }}
            color="#18204E"
            gutterBottom
          ></Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275, marginTop: 3 }}>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item sx={10}>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                <AccountBalanceWalletIcon
                  sx={{ fontSize: 19, marginRight: 0.5, verticalAlign: "sub" }}
                />
                Trip Budget
              </Typography>
            </Grid>

            <Grid item sx={2}>
              <Button
                variant="text"
                sx={{ fontSize: 12, padding: 0, color: "#3546AB" }}
                endIcon={
                  <ArrowForwardIcon
                    sx={{ fontSize: 20, verticalAlign: "sub" }}
                  />
                }
              >
                Budget planner
              </Button>
              <Typography
                sx={{ fontSize: 16 }}
                color="#3546AB"
                cursor="pointer"
                gutterBottom
              ></Typography>
            </Grid>
          </Grid>
          <Typography
            variant="h5"
            sx={{
              border: "1px solid #E6E6E6",
              width: "35%",
              borderRadius: "0.5rem",
              padding: 1,
              margin: "2% 0",
            }}
          >
            $10,000
          </Typography>
          <Chart />
        </CardContent>
      </Card>
    </>
  );
}
