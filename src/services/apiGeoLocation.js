import axios from "axios";

export const apiGeoLocation = async () => {
    const URL_LOCATION = `https://geolocation-db.com/jsonp/`;
  
    const { data } = await axios.get(URL_LOCATION);
    return JSON.parse(data.replace('callback(','').replace(')',''));
};
