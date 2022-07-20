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
export default function PickupCard() {
    let [colDisplay,updatecol]=useState({display:"flex",flexDirection:"column"});
    let cardheight="130px";
    let cardwidth="690px";
  return (
    
    
    <>
    
   <Card sx={{width:cardwidth ,borderRadius:"0.7rem",minHeight:126}}>
        <CardContent sx={{width:"100%",height:cardheight,padding:"0",paddingBottom:"0px !important"}}>
        <Grid container spacing={0.4} sx={{width:"100%",height:"100%"}} >
            <Grid item xs={0.3} >
                <Card sx={{backgroundColor:"#F2A818",width:"100%",height:"100%",borderTopRightRadius:0,borderBottomRightRadius:0}}>
                <CardContent></CardContent>
                </Card>
            </Grid>
            <Grid item xs={7.7}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
            <CardMedia
          component="img"
          style={{
            width: "auto",
            maxHeight: "200px"
          }}
          image="images/Rectangle 6.png"
          alt="green iguana"
        />
        </Grid>
        
        <Grid item xs={8} sx={{colDisplay,lineHeight:"2.3rem"}} >
        <Typography variant="h6" component="span" className='heading'>
        Car Hire Pickup
          </Typography>
          <br />
          
        <Typography variant="p" component="span" className='subheading'>
        Pickup: 15 Terrase Road, Madrid, 20175, Spain
          </Typography>
          <Grid conainer sx={{display:"flex",flexDirection:"row"}} className='cardicons'>
            <Grid item xs={4}>
            <EventSeatIcon/> <Typography  className='cardtext' variant="span" component="span">
        5 Seats
          </Typography>
            </Grid>
            <Grid item xs={4}>
            <EventSeatIcon/> <Typography  className='cardtext' variant="span" component="span">
            Air-con
          </Typography>
            </Grid>
            <Grid item xs={4}>
            <EventSeatIcon/> <Typography  className='cardtext' variant="span" component="span">
            4 Doors
          </Typography>
            </Grid>
            <Grid item xs={4}>
            <EventSeatIcon/> <Typography  className='cardtext' variant="span" component="span">
            Automatic
          </Typography>
            </Grid>
        
           
          </Grid>

        </Grid>
        </Grid>
            </Grid>
            <Grid item xs={4}>
<Grid container>
    <Grid item xs={6} sx={colDisplay}>
    <Typography  className='graytext' variant="span" component="span">
    Vehicle type: 
          </Typography>
          <Typography  className='' variant="span" component="span">
          Compact
          </Typography>
          <Button size="small" variant="outlined" sx={{borderRadius:"1rem",color:"#7F7C88",fontSize:9,borderColor:"#7F7C88",marginTop:5,width:"85%",height:"23%",fontWeight:800}}>View details</Button>
       
    </Grid>
    <Grid item xs={6} sx={{colDisplay,textAlign:"end"}}>
    
    <Typography  variant="h5" component="span">
    <Typography  className='graytext' variant="h6" component="span">
          $
          </Typography> 1080
          </Typography>
          <br />
          <Typography  className='graytext' variant="p" component="span">
          for 4 days
          </Typography> 
          
          <Button size="small"  sx={{color:"#3546AB",marginTop:4,fontSize:9,fontWeight:700}}>Swap transport</Button>
       
    </Grid>
</Grid>

            </Grid>
        </Grid>

        </CardContent>

    </Card>
      
    </>
  )
}
