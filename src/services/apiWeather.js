import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/onecall";
const API_KEY = "1be38c6f4163fda1fc0a2bb2b035459b";

export const apiWeather = async (coords) => {
  const URL_LOCATION = `${URL}?${coords}&units=metric&APPID=${API_KEY}`;
  
  const { data } = await axios.get(URL_LOCATION);
  return data;
};
