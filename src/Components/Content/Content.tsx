import React from 'react';
import CityInput from "../CityInput/CityInput";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({
  forecastData: state.forecastData,

});

const Content = (props: any) => {
  return (
    <>
      <CityInput />
      <div className="main-content__wrapper">
        <WeatherInfo />
      </div>
    </>
  );
}

export default connect(mapStateToProps, null)(Content);