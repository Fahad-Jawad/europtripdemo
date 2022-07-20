import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { borderRadius } from "@mui/system";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import { Button } from "@mui/material";
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
export default function HotelCard() {
  let [colDisplay, updatecol] = useState({
    display: "flex",
    flexDirection: "column"
  });
  let cardheight = "auto";
  let cardwidth = "690px";
  return (
    <>
      <p className="graytext">5 Night Stay . Check out on 16/09 by 10:00AM PDT</p>
      <Card sx={{ width: cardwidth, borderRadius: "0.7rem", minHeight: 126 }}>
        <CardContent
          sx={{
            width: "100%",
            height: cardheight,
            padding: "0",
            paddingBottom: "0px !important",
          }}
        >
          <Grid
            container
            spacing={0.4}
            sx={{ width: "100%", height: "100%" }}
          >
            <Grid item xs={0.3}>
              <Card
                sx={{
                  backgroundColor: "#E44E4E",
                  width: "100%",
                  height: "100%",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              >
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={7.7}>
              <Grid container spacing={1}>
                <Grid item xs={4} sx={{paddingLeft:"5px !important"}}>
                  <CardMedia
                    component="img"
                    style={{
                      width: "100%",
                      height:"100%",
                      maxHeight: "200px",
                    }}
                    image="images/Rectangle 126.png"
                    alt="green iguana"
                  />
                </Grid>

                <Grid item xs={8} sx={{colDisplay,lineHeight:"2.3rem"}}>
                  <Typography variant="p" component="span" className="heading" sx={{}}>
                  Roma Cappucia Hotel 
                  <div className="rating">
                  <StarPurple500OutlinedIcon sx={{fontSize:"12px",color:"#F4B63E"}}/>
                  <StarPurple500OutlinedIcon sx={{fontSize:"12px",color:"#F4B63E"}}/>
                  <StarPurple500OutlinedIcon sx={{fontSize:"12px",color:"#F4B63E"}}/>
                  <StarPurple500OutlinedIcon sx={{fontSize:"12px",color:"#F4B63E"}}/>
                  <StarPurple500OutlinedIcon sx={{fontSize:"12px",color:"#F4B63E"}}/>
                  </div>
                  <Typography variant="p" sx={{backgroundColor:"#CFFBF2",fontSize:"14px",padding:"2%",borderRadius:"0.5rem",marginLeft:2}}>8.2</Typography>
                  </Typography>
                    <br />
                  <Typography variant="p" component="span" className="subheading">
                  13 Madrid Road, Madrid, 20175, Spain
              
                  </Typography>
                  <Grid
                    conainer
                    sx={{ display: "flex", flexDirection: "row",flexWrap:"wrap",lineHeight:"1.4rem"}}
                    className="cardicons"
                  >
                    <Grid item xs={4}>
                      <EventSeatIcon />{" "}
                      <Typography
                        className="cardtext"
                        variant="span"
                        component="span"
                      >
                        5 Seats
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <EventSeatIcon />{" "}
                      <Typography
                        className="cardtext"
                        variant="span"
                        component="span"
                      >
                        Air-con
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <EventSeatIcon />{" "}
                      <Typography
                        className="cardtext"
                        variant="span"
                        component="span"
                      >
                        4 Doors
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <EventSeatIcon />{" "}
                      <Typography
                        className="cardtext"
                        variant="span"
                        component="span"
                      >
                        Automatic
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <EventSeatIcon />{" "}
                      <Typography
                        className="cardtext"
                        variant="span"
                        component="span"
                      >
                        Automatic
                      </Typography>
                    </Grid>
                 
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={12} sx={{colDisplay,textAlign:"right"}}>
                    <Grid container>
                      <Grid item xs={12} sx={{colDisplay,textAlign:"end"}}>
                      <Typography  variant="h5" component="span">
    <Typography  className='graytext' variant="h6" component="span">
          $
          </Typography> 2080
          </Typography>
          <br />
          <Typography  className='graytext' variant="p">
          for a 5 night stay
with 1 room
          </Typography> 
                 
                  </Grid>
                  </Grid>
                  <Grid container sx={{marginTop:5}}>
                    <Grid item xs={5}>  
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      borderRadius: "1rem",
                      color: "#7F7C88",
                      fontSize: 9,
                      borderColor: "#7F7C88",
                      width: "100%",
                      height: "100%",
                      fontWeight:700
                    }}
                  >
                    View details
                  </Button></Grid>
                    <Grid item xs={7}><Button
                    size="small"
                    sx={{
                      color: "#3546AB",
                      fontSize: 9,
                      fontWeight: 700,
                    }}
                  >
                    Swap accomodation
                  </Button></Grid>
                
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
