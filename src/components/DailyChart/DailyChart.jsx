import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { TooltipCustom } from './../../styles/styles';

import { BiUpArrow, BiDownArrow } from 'react-icons/bi';

import { isMobile } from 'react-device-detect';

export default function DailyChart(props) {

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

	const getYear = () => {
		const d = new Date();
		const year = d.getYear();
		return year;
	}

	const daysInMonth = (month, year) => {
		return new Date(getYear(), getMounth(), 0).getDate();
	}

	const CustomTooltip = (active) => {
		const monthDays = daysInMonth();
		const dateLabel = getDate() + active.label;
		const dateTemp = active.payload[0]?.payload;
		const dateMinTemp = dateTemp?.temp?.min;
		const dateMaxTemp = dateTemp?.temp?.max;
		const dateIconTemp = dateTemp?.weather[0]?.icon;
		const dateIconDescription = dateTemp?.weather[0]?.description;

		return <TooltipCustom>
				<div className="flex justify-around items-center">
				{(dateTemp)? 
					<>
						<div className="flex flex-col text-lg">
							<h4 className="font-bold">
								{(dateLabel <= monthDays) 
									? `${dateLabel}/${getMounth()}`
									: `${(dateLabel-1).toString().substring(1)}/${(getMounth()+1)}`
								}
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
					<span>
						{(isMobile) ? 
							'Click in line above, to see day details'
							: 
							'Click or hover in line above,  to see day details'
						}
					</span>
				} 
				</div>
			</TooltipCustom>
		;
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