import { useState,useEffect } from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataChart = [
  {
    name: "Page F",
    pv: 20
  },
  {
    name: "Page F",
    pv: 18
  },
  {
    name: "Page F",
    pv: 18
  },
  {
    name: "Page F",
    pv: 17
  },
  {
    name: "Page F",
    pv: 19
  },
  {
    name: "Page F",
    pv: 18
  },
  {
    name: "Page F",
    pv: 22
  },
  {
    name: "Page F",
    pv: 18
  },
  {
    name: "Page F",
    pv: 19
  },
  {
    name: "Page F",
    pv: 24
  }
];


export default function HourlyChart(props) {

	const [hoursToChart , sethoursToChart] = useState([]);

	const getHour = () => {
		const d = new Date();
		const hour = d.getHours();
		
		return hour
	}

	const getRemainingHours = (hourNow) => {
		return 24 - hourNow;
	} 

	const returnRemainingHoursArray = () => {
		const remainingHour = getRemainingHours(getHour()) - 1;
		const remainingHourData = [];
		
	
		for (let index = 0; index < 24; index++) {
			remainingHourData.push(props.data[index]);
		}

		sethoursToChart(remainingHourData);

	}

	useEffect(() => {
		returnRemainingHoursArray();
	},[]);

	useEffect(() => {
		console.log(hoursToChart);
	},[hoursToChart]);

    return(
        <ResponsiveContainer width={'100%'} height={150}>
            <LineChart width={500} height={100} data={hoursToChart}>
            <Tooltip/>
            <Line type="monotone" dataKey="temp" stroke="#000" strokeWidth={1.5} />
            </LineChart>
        </ResponsiveContainer>
    )
}