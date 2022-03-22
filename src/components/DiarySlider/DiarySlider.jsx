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

export default function DiarySlider() {

  return(
    <Slider {...settings}>
      <div>
        <div>
          Now
        </div>
        <div>
          <FaCloudShowersHeavy className='inline'/>
        </div>
        <div>
          21°
        </div>
      </div>
      <div>
        <div>
          Now
        </div>
        <div>
          <FaCloudShowersHeavy className='inline'/>
        </div>
        <div>
          21°
        </div>
      </div>
      <div>
        <div>
          Now
        </div>
        <div>
          <FaCloudShowersHeavy className='inline'/>
        </div>
        <div>
          21°
        </div>
      </div>
      <div>
        <div>
          Now
        </div>
        <div>
          <FaCloudShowersHeavy className='inline'/>
        </div>
        <div>
          21°
        </div>
      </div>
      <div>
        <div>
          Now
        </div>
        <div>
          <FaCloudShowersHeavy className='inline'/>
        </div>
        <div>
          21°
        </div>
      </div>
      <div>
        <div>
          Now
        </div>
        <div>
          <FaCloudShowersHeavy className='inline'/>
        </div>
        <div>
          21°
        </div>
      </div>
    </Slider>
  )
}