import { useState,useEffect } from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { TooltipCustom } from './../../styles/styles';

import { BiUpArrow, BiDownArrow } from 'react-icons/bi';

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

	const CustomTooltip = (active) => {
		const dateLabel = getDate() + active.label;
		const dateTemp = active.payload[0]?.payload;
		const dateMinTemp = dateTemp?.temp?.min;
		const dateMaxTemp = dateTemp?.temp?.max;
		const dateIconTemp = dateTemp?.weather[0]?.icon;
		const dateIconDescription = dateTemp?.weather[0]?.description;

		return <>
			<TooltipCustom>
				<div className="flex justify-around items-center">
				{(dateTemp)? 
					<>
						<div className="flex flex-col text-lg">
							<h4 className="font-bold">
								{dateLabel}/{getMounth()}
							</h4>
							<div>
								<img 
									src={`http://openweathermap.org/img/w/${dateIconTemp}.png`} 
									alt={dateIconDescription} 
									className="!inline grayscale max-w-[45px]"
								/>
							</div>
						</div>
						<div className="flex flex-col">
							<div className="font-bold">
								{Math.round(dateMaxTemp)}°C  <BiUpArrow className="inline"/>
							</div>
							<div className="mt-3 font-bold">
								{Math.round(dateMinTemp)}°C <BiDownArrow className="inline"/>
							</div>
						</div>
					</>
					:
					<div className="mt-4">
						Click in line above, to see day details
					</div>
				} 
				</div>
				

				
			
			</TooltipCustom>
		</>;
	}

    return(
        <ResponsiveContainer width={'100%'} height={150}>
            <LineChart width={500} height={100} data={props.data}>
            <Tooltip content={<CustomTooltip/>} />
            <Line type="monotone" dataKey="temp.day" stroke="#000" strokeWidth={0.5} />
            </LineChart>
        </ResponsiveContainer>
    )
}