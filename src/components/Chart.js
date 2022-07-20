import React from 'react'
import { Doughnut  } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
export default function Chart() {
    
  return (
    <>
      <Doughnut 
  datasetIdKey='id'
  data={{
    labels: ['Flights', 'Experiences', 'Accomodation','Transport'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [8, 4, 6,3],
        backgroundColor:['#6373CF','#8861D4','#E44E4E','#F2A818']
      }
    ],
  }}
/>
    </>
  )
}
