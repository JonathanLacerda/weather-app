import { 
    useEffect, 
    useState, 
    useRef 
} from 'react';

import { 
  GlobalStyle ,
  Wrapper,
  BackgroundAppContainer,
  WindHumContainer,
  GraphicContainer,
  MinMaxContainer,
  DiarySliderConteiner,
  Title,
  Loader
} from './styles/styles';
import './index.css';

import HourSlider from './components/HourSlider/HourSlider';
import DailyChart from './components/DailyChart/DailyChart';
import MaxMin from './components/MaxMin/MaxMin';

import { BsDropletHalf } from 'react-icons/bs';

import {WiStrongWind} from 'react-icons/wi';

import { apiWeather } from './services/apiWeather'
import { apiGeoLocation } from './services/apiGeoLocation'


function App() {
  const didMount = useRef(false);
  const [dataWeather, setDataWeather] = useState({});
  const [dataUser, setDataUser] = useState({});
  const load = Object.keys(dataWeather).length > 1;
  
    useEffect(() => {
        apiGeoLocation().then((res) => {
            setDataUser(res);
        });
    },[]);

    useEffect(() => {
        if (didMount.current) {
            apiWeather(`lat=${dataUser.latitude}&lon=${dataUser.longitude}`).then((res) => {
                setDataWeather(res);
            });
        } else {
            didMount.current = true;
        }
    },[dataUser]);

  return (
  <>
    <GlobalStyle/>
    <BackgroundAppContainer>
        <Wrapper className={`container container-wind mx-auto text-center font-bold ${!load ? 'flex items-center' : ''}`}>
            { load ? 
                <>
                    <h2 className='text-4xl font-thin2'>
                        {dataUser.city} 
                    </h2>
                    <span className='text-6xl m-4 block text-condensed font-thin'>
                        {Math.round(dataWeather.current.temp)}°
                    </span>
                    <span className='m-2 block'>
                        Feels like {Math.round(dataWeather.current.feels_like)}°
                    </span>
                    <MinMaxContainer>
                        <MaxMin data={dataWeather.daily[0]}/>
                    </MinMaxContainer>
                    <WindHumContainer>
                        <div>
                            <WiStrongWind className='inline wind-font'/> {dataWeather.current.wind_speed} km/h
                        </div>
                        <div>
                            <BsDropletHalf className='inline'/> {Math.round(dataWeather.current.humidity)} %
                        </div>
                    </WindHumContainer>
                    <Title>
                        Next Hours
                        <span></span>
                    </Title>
                    <DiarySliderConteiner>
                        <HourSlider data={dataWeather.hourly}/>
                    </DiarySliderConteiner>
                    <Title>
                        Next 7 Days
                        <span></span>
                    </Title>
                    <GraphicContainer>
                        <DailyChart data={dataWeather.daily}/>
                    </GraphicContainer>
                </>
            : 
                <Loader />
            }
        </Wrapper>
    </BackgroundAppContainer>
  </>
  )
}

export default App
