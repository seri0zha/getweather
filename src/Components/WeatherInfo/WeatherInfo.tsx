import React from 'react';
import styled from "styled-components";

const CelsiusDegree = styled.div`
  position: absolute;
  display: inline-block;
  margin-top: 10px;
`;

const Temperature = styled.div`
  color: black;
  font-size: 72px;
  display: inline-block;
`;

const StyledDiv = styled.div`
  position: relative;
`;

const WeatherInfoWrapper = styled.div`
  color: #555;
`;


//function which ads '+' symbol to the temperature value if it's greater than zero
const convertTemperature = (temperature: number): string => {
  return Math.floor(temperature) > 0
    ? '+' + Math.floor(temperature) : '' + Math.floor(temperature);
};

const WeatherInfo = (props: any) => {
  const currentTemp: string = convertTemperature(props.forecastData.current.temp);
  const feelsLike: string = convertTemperature(props.forecastData.current['feels_like']);
  const date: Date = new Date(props.forecastData.current.dt * 1000);
  const timeString: string = (date).toTimeString();
  return (
    <WeatherInfoWrapper>
      <div>{props.cityName}, {timeString.split(' ')[0].slice(0, 5)}</div>
      <StyledDiv>
        <Temperature>{currentTemp}</Temperature>
        <CelsiusDegree>&deg;C</CelsiusDegree>
      </StyledDiv>
      <div>
        Feels like {feelsLike}&deg;C
      </div>
    </WeatherInfoWrapper>
  )
}

export default WeatherInfo;