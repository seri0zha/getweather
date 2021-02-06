import React from 'react';
import CityInput from "../CityInput/CityInput";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

const Content = () => {
  return (
    <>
      <CityInput/>
      <div className="main-content__wrapper">
        <WeatherInfo/>
      </div>
    </>
  );
};

export default Content;