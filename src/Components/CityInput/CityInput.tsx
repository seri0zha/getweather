import React, {MutableRefObject, useRef} from 'react';
import styled from "styled-components";
import {apiMethods} from "../../API/api";
import {observer} from "mobx-react-lite";
import forecastDataStore from '../../MobX/ForecastDataStore';
import cityInputStore from "../../MobX/CityInputStore";

const StyledInput = styled.input`
  font-size: 16px;
  padding: 10px 20px;
  outline: none;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  max-width: 500px;
  width: calc(100% - 50px);
`;

const CityInput = observer((props: any) => {

  const inputEl = useRef() as MutableRefObject<HTMLInputElement>;
  // ref here is used to blur input element on form submission

  const onCitySubmit = (e: any): void => {
    forecastDataStore.setForecastData({});
    //clearing previous forecast data
    forecastDataStore.setRequestIsFetching(true);
    inputEl.current.blur();
    e.preventDefault();
    apiMethods.getCityCoords(cityInputStore.currentValue).then(response => {
      //fetching longitude and latitude of the city
      let [lon, lat] = [response.data.coord.lon, response.data.coord.lat];
      //fetching forecast for current latitude and longitude
      cityInputStore.setCityName(response.data.name);
      apiMethods.getForecast(lat, lon).then(response => {
        forecastDataStore.setForecastData(response.data);
        cityInputStore.setCityInputValue("");
      }).finally(() => {
        forecastDataStore.setRequestIsFetching(false);
      });
    }).catch(error => {
      forecastDataStore.setRequestIsFetching(false);
    });
  }

  return (
    <form onSubmit={(e) => onCitySubmit(e)}>
      <StyledInput value={cityInputStore.currentValue}
                   onChange={(e) => cityInputStore.setCityInputValue(e.target.value)}
                   placeholder={'Search...'}
                   onFocus={e => e.target.placeholder = ''}
                   onBlur={(e) => e.target.placeholder = 'Search...'}
                   ref={inputEl}/>
    </form>
  )
});

export default CityInput;