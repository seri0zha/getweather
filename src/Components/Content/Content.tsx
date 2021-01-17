import React, {useState} from 'react';
import CityInput from "../CityInput/CityInput";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import {apiMethods} from "../../API/api";

const Content = () => {
  const [cityInputValue, setCityInputValue] = useState('');
  const [cityName, setCityName] = useState('');
  const [forecastData, setForecastData] = useState({});

  const onCitySubmit = (e: any): void => {
    e.preventDefault();
    apiMethods.getCityCoords(cityInputValue).then(response => {
      //fetching longitude and latitude of the city
      let [lon, lat] = [response.data.coord.lon, response.data.coord.lat];
      //fetching forecast for current latitude and longitude
      setCityName(response.data.name);
      apiMethods.getForecast(lat, lon).then(response => {
        setForecastData(response.data);
        setCityInputValue('');
      });
    });
  }

  return (
    <>
      <CityInput cityInputValue={cityInputValue}
                 setCityInputValue={setCityInputValue}
                 onCitySubmit={onCitySubmit}/>
      {Object.keys(forecastData).length !== 0 ?
        <div className="main-content__wrapper">
          <WeatherInfo cityName={cityName} forecastData={forecastData}/>
        </div> : <></>}
    </>
  );
}

export default Content;