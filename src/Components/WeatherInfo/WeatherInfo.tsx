import React from 'react';
import styled from "styled-components";
import GetWeatherImageId from "../../Common/WeatherImages/WeatherImages";
import WeatherImage from "../WeatherImage/WeatherImage";

const InlineDiv = styled.div`
  display: inline-block;
`;

const CelsiusDegree = styled(InlineDiv)`
  position: absolute;
  font-size: 24px;
`;

const Temperature = styled(InlineDiv)`
  color: black;
  font-size: 72px;
  position: relative;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const WeatherInfoWrapper = styled.div`
  color: #555;
`;


//function which ads '+' symbol to the temperature value if it's greater than zero
const convertTemperature = (temperature: number): string => {
  return Math.floor(temperature) > 0
    ? '+' + Math.floor(temperature) : '' + Math.floor(temperature);
};

const   WeatherInfo = (props: any) => {
  const currentTemp: string = convertTemperature(props.forecastData.current.temp);
  const feelsLike: string = convertTemperature(props.forecastData.current['feels_like']);
  const date: Date = new Date(props.forecastData.current.dt * 1000);
  const timeString: string = (date).toTimeString();
  const weatherId: string = GetWeatherImageId(props.forecastData.current.weather[0].id);
  const weatherDescription: string = props.forecastData.current.weather[0].main;
  const imageURL: string = `http://openweathermap.org/img/wn/${weatherId}d@4x.png`
  debugger;
  return (
    <WeatherInfoWrapper>
      <div>{props.cityName}, {timeString.split(' ')[0].slice(0, 5)}</div>
      <StyledDiv>
        <WeatherImage imageURL={imageURL}/>
        <Temperature>
          {currentTemp}
          <CelsiusDegree>&deg;C</CelsiusDegree>
        </Temperature>
      </StyledDiv>
      <div>
        {weatherDescription}, feels like {feelsLike}&deg;C
      </div>
    </WeatherInfoWrapper>
  )
}

export default WeatherInfo;