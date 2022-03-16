import axios from "axios";

export const apiGeoLocation = async () => {


    const URL_LOCATION = `https://geolocation-db.com/jsonp/`;
  
    const { data } = await axios.get(URL_LOCATION);
    return JSON.parse(data.replace('callback(','').replace(')',''));

    // axios.get('https://geolocation-db.com/jsonp/')
    // .then(function (res) {
    //   const geoData = JSON.parse(res.data.replace('callback(','').replace(')',''));

    //   return geoData;
    // //   setDataUser(geoData);
    // //   setLong(geoData.longitude);
    // //   setLat(geoData.latitude);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .then(function () {
    //   // always executed
    // });
};
