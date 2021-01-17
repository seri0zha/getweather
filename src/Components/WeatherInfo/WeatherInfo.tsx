import React from 'react';
import styled from "styled-components";

const CelsiusDegree = styled.div`
  position: absolute;
  display: inline-block;
  margin-top: 10px;
`;

const Temperature = styled.div`
  font-size: 72px;
  display: inline-block;
`;

const StyledDiv = styled.div`
  position: relative;
`;

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
    <div>
      <div>{props.cityName}, {timeString.split(' ')[0]}</div>
      <StyledDiv>
        <Temperature>{currentTemp}</Temperature>
        <CelsiusDegree>&deg;C</CelsiusDegree>
      </StyledDiv>
      <div>
        Feels like {feelsLike}&deg;C
      </div>
    </div>
  )
}

export default WeatherInfo;