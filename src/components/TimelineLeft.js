import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function TimelineLeft(props) {
  return (
    <>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="left"
        variant="body2"
        color="text.secondary"
        display="flex"
        flexDirection="column"
      >
        <Typography variant="h6" component="span">
          {props.date}
        </Typography>
        <Typography variant="p" component="span">
          {props.time}
        </Typography>
        <Typography variant="span" component="span">
          {props.day}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot variant="outlined">{props.icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
    </>
  );
}
