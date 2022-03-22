import { 
    useEffect, 
    useState
} from 'react';

import Slider from "react-slick";

import { FaCloudShowersHeavy } from 'react-icons/fa';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'

const ArrowRight = (props) => {
  const { onClick } = props;

  return (
    <>
      <span
        className="opacity-50"
        onClick={onClick}
      >
        <BiRightArrow />
      </span>
    </>
  )
};

const ArrowLeft = (props) => {
  const { onClick } = props;

  return (
    <>
      <span
        className="opacity-50"
        onClick={onClick}
      >
        <BiLeftArrow />
      </span>
    </>
  )
};

const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  

export default function HourSlider(props) {
	const date = new Date();
	const hour = date.getHours();
	const remeiningHours = 24 - hour;

	console.log(remeiningHours);

	return(
		<Slider {...settings}>

			{
				props.data.map((item,index) => {


					if(index < remeiningHours ) {

						return (
							<div key={index}>
								<div>
									{hour + index}h
								</div>
								<div>
									<img 
										src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} 
										alt={item.weather[0].description} 
										className="!inline grayscale max-w-[45px]"
									/>
								</div>
								<div>
									{Math.round(item.temp)}°C
								</div>
							</div>
						)
					}
				})
			}
		</Slider>
	)
}