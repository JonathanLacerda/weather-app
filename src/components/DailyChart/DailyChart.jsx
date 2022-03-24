import { useState,useEffect } from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { TooltipCustom } from './../../styles/styles';

export default function DailyChart(props) {

	const [labelLaste, setLabelLast] = useState(0);

	const getDate = () => {
		const d = new Date();
		const date = d.getDate();

		return date;
	}

	const getMounth = () => {
		const d = new Date();
		const month = d.getMonth() + 1;

		return month;
	}

	const CustomTooltip = (active, payload) => {
		const dateLabel = getDate() + active.label;
		const dateMaxTemp = active.payload[0]?.payload?.temp?.max;


		return <>
			<TooltipCustom>
				<h4>
					{dateLabel}/{getMounth()}
				</h4>
				<div>
					{Math.round(dateMaxTemp)}°C
				</div>
			
			</TooltipCustom>
		</>;
	}

    return(
        <ResponsiveContainer width={'100%'} height={150}>
            <LineChart width={500} height={100} data={props.data}>
            <Tooltip content={<CustomTooltip/>} />
            <Line type="monotone" dataKey="temp.day" stroke="#000" strokeWidth={1.5} />
            </LineChart>
        </ResponsiveContainer>
    )
}