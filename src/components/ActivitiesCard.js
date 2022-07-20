import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import PickupCard from "./PickupCard";
import TimelineLeft from "./TimelineLeft";
import HotelCard from "./HotelCard";
import HotelIcon from '@mui/icons-material/Hotel';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingCard from "./ShoppingCard";
import ResturantCard from "./ResturantCard";

export default function ActivitiesCard() {
  return (
    <>
      <Card sx={{ minWidth: 275, marginTop: 1 }}>
        <CardContent>
          <Timeline>
            <TimelineItem>
              <TimelineLeft
                date="10/9"
                time="11:30AM PDT"
                day="Friday"
                icon={<DirectionsCarIcon sx={{ color:"#F2A818" }} />}
              />
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <PickupCard />
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineLeft
                date="10/9"
                time="11:30AM PDT"
                day="Friday"
                icon={<HotelIcon sx={{ color:"#fa6060" }} />}
              />
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <HotelCard />
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineLeft
                date="10/9"
                time="11:30AM PDT"
                day="Friday"
                icon={<LocationOnIcon sx={{ color:"#8861D4" }} />}
              />
              <TimelineContent sx={{ py: "12px", px: 2,marginLeft:"4.5%" }}>
                <ShoppingCard />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineLeft
                date="10/9"
                time="11:30AM PDT"
                day="Friday"
                icon={<LocationOnIcon sx={{ color:"#8861D4" }} />}
              />
              <TimelineContent sx={{ py: "12px", px: 2,marginLeft:"4.5%" }}>
                <ResturantCard />
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </CardContent>
      </Card>
    </>
  );
}
