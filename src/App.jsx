import { 
    useEffect, 
    useState, 
    useRef 
} from 'react';

import { 
  GlobalStyle ,
  Wrapper,
  ImageBackground,
  WindHumContainer,
  GraphicContainer,
  MinMaxContainer
} from './styles/styles';
import './index.css';

import DiarySlider from './components/DiarySlider/DiarySlider';
import HourlyChart from './components/HourlyChart/HourlyChart';
import MaxMin from './components/MaxMin/MaxMin';

import { ImLocation } from 'react-icons/im';
import { FaWind } from 'react-icons/fa';    
import { GiWaterDrop } from 'react-icons/gi';

import { apiWeather } from './services/apiWeather'
import { apiGeoLocation } from './services/apiGeoLocation'


function App() {
  const didMount = useRef(false);
  const [dataWeather, setDataWeather] = useState({});
  const [dataUser, setDataUser] = useState({});
  
    useEffect(() =>{
        apiGeoLocation().then((res) => {
            setDataUser(res);
        });
    },[]);

    useEffect(() =>{
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
    <ImageBackground>
        <Wrapper className="container container-wind mx-auto text-center font-bold">
            {Object.keys(dataWeather).length > 1 ? 
                <>
                    <h2 className='text-3xl'>
                        {dataUser.city}  <ImLocation className='inline'/>
                    </h2>
                    <span className='text-5xl m-4 block'>
                        {Math.round(dataWeather.current.temp)}°
                    </span>
                    <span className='m-2 block'>
                        Feels like {Math.round(dataWeather.current.feels_like)}°
                    </span>
                    <MinMaxContainer>
                        <MaxMin />
                    </MinMaxContainer>
                    <WindHumContainer>
                        <div>
                            <FaWind className='inline'/> Wind {dataWeather.current.wind_speed} km/h
                        </div>
                        <div>
                            <GiWaterDrop className='inline'/> Hum {Math.round(dataWeather.current.humidity)} %
                        </div>
                    </WindHumContainer>
                    <GraphicContainer>
                        <HourlyChart />
                    </GraphicContainer>
                    <DiarySlider />
                </>
            : 
                'CARREGANDO'
            }

        </Wrapper>
    </ImageBackground>
  </>
  )
}

export default App
