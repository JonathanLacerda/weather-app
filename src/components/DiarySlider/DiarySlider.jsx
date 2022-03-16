import Slider from "react-slick";

import {FaCloudShowersHeavy} from 'react-icons/fa';

const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToShow: 1,
          slidesToScroll: 1
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