import React from 'react';
import styled from "styled-components";
import WeatherImage from "../WeatherImage/WeatherImage";
import forecastDataStore from "../../MobX/ForecastDataStore";
import Loader from "../../Common/Loader/Loader";
import {observer} from "mobx-react-lite";
import cityInputStore from "../../MobX/CityInputStore";
import {convertForecastData} from "../../API/api";

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

const WeatherInfo = observer((props: any) => {

  if (Object.keys(forecastDataStore.forecastData).length === 0) {
    //if forecast is not empty render data else render empty div
    if (forecastDataStore.isFetching) return <Loader/>;
    else return <></>;
  }

  const forecastData = convertForecastData(forecastDataStore.forecastData);

  return (
    <WeatherInfoWrapper>
      <div>{cityInputStore.cityName}, {forecastData.timeString.split(' ')[0].slice(0, 5)}</div>
      <StyledDiv>
        <WeatherImage imageURL={forecastData.imageURL}/>
        <Temperature>
          {forecastData.currentTemp}
          <CelsiusDegree>&deg;C</CelsiusDegree>
        </Temperature>
      </StyledDiv>
      <div>
        {forecastData.weatherDescription}, feels like {forecastData.feelsLike}&deg;C
      </div>
    </WeatherInfoWrapper>
  )
});

export default WeatherInfo;