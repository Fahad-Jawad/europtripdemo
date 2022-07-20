import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { borderRadius } from '@mui/system';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { Button } from '@mui/material';

export default function ResturantCard() {
    let [colDisplay,updatecol]=useState({display:"flex",flexDirection:"column"});
let cardheight="auto";
let cardwidth="650px";
  return (
    <>
    
   <Card sx={{width:cardwidth ,borderRadius:"0.7rem",minHeight:126}}>
        <CardContent sx={{width:"100%",height:cardheight,padding:"0",paddingBottom:"0px !important"}}>
        <Grid container spacing={0.4} sx={{width:"100%",height:"100%"}} >
            <Grid item xs={0.3} >
                <Card sx={{backgroundColor:"#8861D4",width:"100%",height:"100%",borderTopRightRadius:0,borderBottomRightRadius:0}}>
                <CardContent></CardContent>
                </Card>
            </Grid>
            <Grid item xs={7.2}>
                <Grid container spacing={1}>
                    <Grid item xs={4.2} sx={{paddingLeft:"5px !important"}}>
                    <CardMedia
                    component="img"
                    style={{
                      width: "100%",
                      height:"100%",
                      maxHeight: "200px",
                    }}
                    image="images/Rectangle 146 (1).png"
                    alt="green iguana"
                  />
                </Grid>
        
        <Grid item xs={7} sx={{colDisplay,lineHeight:"2rem"}} >
        <Typography variant="p" sx={{backgroundColor:"#DED1F7",fontSize:"12px",color:"#6F43C4",padding:"2%",borderRadius:"0.5rem"}}>Resturant</Typography>
      
         <br />
        <Typography variant="h6" component="span" className='heading'>
        La Latina
          </Typography>
          <br />
        <Typography variant="p" component="span" className='subheading'>
        13 Madrid Road, Madrid, 20175, Spain
          </Typography>

        </Grid>
        </Grid>
            </Grid>
            <Grid item xs={4.5} sx={{colDisplay,textAlign:"end"}}>
            <Typography  variant="h5" component="span">
    <Typography  className='graytext' variant="h6" component="span">
          $
          </Typography> 180
          </Typography>
          <br />
          <Typography  className='graytext' variant="p">
          Avg. spend for 3 people
          </Typography> 
          
          <Grid container sx={{marginTop:4.7}} >
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
                      marginLeft:3
                    }}
                  >
                    Swap experience
                  </Button></Grid>
                
                  </Grid>
            </Grid>
        </Grid>

        </CardContent>

    </Card>
      
    </>
  )
}
