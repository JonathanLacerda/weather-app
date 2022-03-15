import { useEffect, useState, useRef } from 'react';
import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';

import {TiWeatherCloudy} from 'react-icons/ti';
import {ImLocation} from 'react-icons/im';
import {FaLongArrowAltUp, FaLongArrowAltDown,FaWind,FaCloudShowersHeavy} from 'react-icons/fa';
import {GiWaterDrop} from 'react-icons/gi';

import rain from './imgs/rain.gif';

import {api} from './services/api'

import axios from 'axios';

import './index.css';

import ReactPlayer from 'react-player'

import Slider from "react-slick";

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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
};

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const dataChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];


const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
  }
  body {
    background: #f7f7f7;
    font-family: 'Quicksand';
  }
`

const Wrapper = styled.section`
  padding: 1.5em 1.5em 3.5em;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 5px 0 rgb(0 0 0 / 17%);
  backdrop-filter: blur( 10px );
  -webkit-backdrop-filter: blur( 10px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  @media(min-width: 680px) {

  padding: 4em;
    flex-direction: column;
    position: relative;
  }
`;

const ImageBackground = styled.div`
  position: fixed;
  background-image: url(${rain});
  padding: 4em;
  width: 100%;
  background-size: cover;
  height: 100%;
`;

const VideoBackground = styled.div`
  position: fixed;
  height: 100vh;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;   
  }
`;

const WindHumContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 150px;
  margin: 0 auto;
  align-items: baseline;
  margin-top: 10px;
`;

const GraphicContainer = styled.div`
  margin: 16px 0 8px;
`;

const MinMaxContainer = styled.div`

`;


function App() {

  const didMount = useRef(false);
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [data, setData] = useState({});
  
  useEffect(() =>{

    axios.get('https://geolocation-db.com/jsonp/')
    .then(function (response) {
      // handle success
      console.log(JSON.parse(response.data.replace('callback(','').replace(')','')));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

    // navigator.geolocation.getCurrentPosition(function(position) {
    //   setLong(position.coords.longitude);
    //   setLat(position.coords.latitude);

    //   console.log(position);
    // });

  },[]);

  useEffect(() =>{

    if (didMount.current) {

      api(`lat=${lat}&lon=${long}`).then((res) => {
        setData(res);
      });
    } else {
      didMount.current = true;
    }
  },[lat]);


  useEffect(() =>{

    if(Object.keys(data).length > 1){
      console.log(data);
    }
  
  },[data]);

  return (
  <>
    <GlobalStyle/>

    <ImageBackground>
      <Wrapper className="container container-wind mx-auto text-center font-bold">
          <h2 className='text-3xl'>
            Florianópolis  <ImLocation className='inline'/>
          </h2>
          <span className='text-5xl m-4 block'>
            21°
          </span>
          <span className='m-2 block'>
             Feels like 19°
          </span>
          <MinMaxContainer>
            <span>
                <FaLongArrowAltUp className='inline'/> 29°
            </span>
            <span>
                <FaLongArrowAltDown className='inline'/> 17°
            </span>
          </MinMaxContainer>
          <WindHumContainer>
            <div>
                <FaWind className='inline'/> Wind 5.14 km/h
            </div>
            <div>
                <GiWaterDrop className='inline'/> Hum 75 %
            </div>
          </WindHumContainer>

          <GraphicContainer>
            <ResponsiveContainer width={'100%'} height={150}>
              <LineChart width={500} height={100} data={dataChart}>
                <Tooltip/>
                <Line type="monotone" dataKey="pv" stroke="#000" strokeWidth={1.5} />
              </LineChart>
            </ResponsiveContainer>
          </GraphicContainer>
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
      </Wrapper>
    </ImageBackground>
  </>
  
  )
}

export default App
