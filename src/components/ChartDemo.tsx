import React from 'react'
import {Chart as ChartJS , ArcElement, Tooltip,Legend} from "chart.js"
import { Doughnut } from "react-chartjs-2"
import {chart} from "@/src/constants/data"

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const ChartDemo = ({className}:{className:string}) => {
    const option = {
      
    }
  return (
    <div className={`${className}`}>
        <Doughnut data={chart} options={option} ></Doughnut>
    </div>
  )
}

export default ChartDemo