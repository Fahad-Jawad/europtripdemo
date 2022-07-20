import React from 'react'
import Grid from "@mui/material/Grid";
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import LockIcon from '@mui/icons-material/Lock';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Header() {
  return (
    <Grid container sx={{backgroundImage:"url('images/Rectangle 137.png')",padding:"1% 3%",paddingBottom:2}}>
        <Grid item xs={12} lg={12}>
    <Grid container>
    <Grid item xs={4} lg={3}>
    <CardMedia
                    component="img"
                    style={{
                      width: "80%",
                      height:"100%",
                      maxHeight: "200px",
                    }}
                    image="images/logo.png"
                    alt="green iguana"
                  />
    </Grid>
    <Grid item xs={4} lg={9} sx={{paddingTop:1}}>
        <Grid container>
            <Grid item lg={2}>
            <Button className="nav-link active"
                    size="small"
                    sx={{
                      borderRadius: "1rem",
                      color: "#7F7C88",
                      fontSize: 13,
                      width: "100%",
                      height: "100%",
                      fontWeight:700
                    }}
                  >
                    Trip Planner
                  </Button>
            </Grid>
            <Grid item lg={2}>
            <Button className="nav-link"
                    size="small"
                
                    sx={{
                      borderRadius: "1rem",
                      color: "#7F7C88",
                      fontSize: 13,
                      width: "100%",
                      height: "100%",
                      fontWeight:700
                    }}
                  >
                    Flights
                  </Button>
            </Grid>
            <Grid item lg={2}>
            <Button className="nav-link"
                    size="small"
                
                    sx={{
                      borderRadius: "1rem",
                      color: "#7F7C88",
                      fontSize: 13,
                      width: "100%",
                      height: "100%",
                      fontWeight:700
                    }}
                  >
                    Hotels
                  </Button>
            </Grid>
            <Grid item lg={2}>
            <Button className="nav-link"
                    size="small"
                
                    sx={{
                      borderRadius: "1rem",
                      color: "#7F7C88",
                      fontSize: 13,
                      borderColor: "#7F7C88",
                      width: "100%",
                      height: "100%",
                      fontWeight:700
                    }}
                  >
                    Car Hire
                  </Button>
            </Grid>
            <Grid item lg={4} sx={{color:"white"}}>
            <Grid container sx={{}}>
            <Grid item lg={5} sx={{display:"flex",justifyContent:"space-evenly"}}>
            <SearchOutlinedIcon/>
            <NotificationsNoneOutlinedIcon/>
            </Grid>
                    <Grid item lg={7} sx={{borderLeft:"1px solid white",paddingLeft:2}}>
                    <Typography variant="p"  sx={{color:"white",fontWeight:700,fontSize:18 }} component="span" >
        Europe Trip
          </Typography>
          <AccountCircleIcon sx={{fontSize:"2rem",verticalAlign:"middle",marginLeft:2}}/>
                    </Grid>
            </Grid>
            </Grid>
        </Grid>
    
    </Grid>
    <Grid item xs={4} lg={3}></Grid>
    </Grid>
 
        </Grid>

    <Grid container sx={{marginTop:8,display:"flex"}}>
        <Grid item xs={12} lg={12}>
        <Grid container justifyContent="space-between">
        <Grid item xs={6} lg={4}>
        <Typography variant="h3"  sx={{color:"white",fontWeight:700 }} component="span" >
        Europe Trip
          </Typography>
          <br />
        <Typography variant="p" component="span" sx={{color:"#D8DCF3" }}>
        9th September 2021 - 4th October 2021 (25 days)
          </Typography>
        </Grid>
        <Grid item xs={6} lg={5}>
            <Grid container justifyContent="space-around" sx={{marginTop:2 }}>
            <Grid item xs={6} lg={5}>
            <Button variant="contained"
            sx={{
                borderRadius: "1rem",
                color: "#1A1A1A",
                fontSize: 13,
                borderColor: "#7F7C88",
                width: "90%",
                height: "100%",
                fontWeight:700,
              padding:"6% 4%",
                backgroundColor:"#E5E5E5"
              }}

            startIcon={<AddIcon sx={{marginRight:1}} />}>Invite Friends
            
            </Button>
    
                  </Grid>
                  <Grid item xs={6} lg={5}>
        <Button variant="contained"
            sx={{
                borderRadius: "1rem",
                color: "white",
                fontSize: 13,
                borderColor: "#7F7C88",
                width: "90%",
                height: "100%",
                fontWeight:700,
              padding:"6% 4%",
                backgroundColor:"#6373CF"
              }}
              
            startIcon={<LockIcon sx={{marginRight:1}} />}>Invite Friends
            
            </Button>
                  </Grid>
                  <Grid item xs={6} lg={2}>
        <Button className="nav-link"
                    size="small"
                    
                    sx={{
                      borderRadius: "1rem",
                      color: "white",
                      fontSize: 18,
                      borderColor: "#7F7C88",
                      width: "50%",
                      height: "100%",
                      fontWeight:700
                    }}
                  >
                    <SettingsRoundedIcon/>
                    
                  </Button>
                  </Grid>
                  </Grid>
        </Grid>
        </Grid>
        </Grid>
    </Grid>
    </Grid>
  )
}
