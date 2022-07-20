import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function CountryCard() {
  return (
    <>
      <Card sx={{ minWidth: 275, height: 50 }}>
        <Grid container sx={{ padding: "1rem" }}>
          <Grid
            item
            xs={2}
            sx={{ display: "flex", borderRight: "1px solid gray" }}
          >
            <CardMedia
              component="img"
              style={{
                width: "35px",
                height: "20px",
                maxHeight: "200px",
              }}
              image="images/image 15.png"
              alt="green iguana"
            />
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                color: "black",
                marginLeft: 1,
              }}
              color="text.secondary"
              gutterBottom
            >
              Madrid
            </Typography>
          </Grid>
          <Grid item xs={9} sx={{ display: "flex" }}>
            <Grid container justifyContent="space-between">
              <Grid item xs={9} sx={{ paddingLeft: 2 }}>
                {" "}
                <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
                  6 Nights – $3050
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Typography>
                  Collapse <ArrowDropUpIcon className="icon" />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
