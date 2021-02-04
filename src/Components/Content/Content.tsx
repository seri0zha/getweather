import React, {MutableRefObject, useContext, useRef, useState} from 'react';
import CityInput from "../CityInput/CityInput";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import {apiMethods} from "../../API/api";
import Loader from "../../Common/Loader/Loader";
import {observer} from "mobx-react-lite";
import rootStoreContext from "../../MobX/RootStore";


const Content = observer(() => {

  const rootStore = useContext(rootStoreContext);
  const [forecastData, setForecastData] = useState({});
  const [requestIsFetching, setRequestIsFetching] = useState(false);


  const inputEl = useRef() as MutableRefObject<HTMLInputElement>;
  // ref here is used to blur input element on form submission

  const onCitySubmit = (e: any): void => {
    setForecastData({});
    //clearing previous forecast data
    setRequestIsFetching(true);

    inputEl.current.blur();
    e.preventDefault();
    apiMethods.getCityCoords(rootStore.cityInputStore.currentValue).then(response => {
      //fetching longitude and latitude of the city
      let [lon, lat] = [response.data.coord.lon, response.data.coord.lat];
      //fetching forecast for current latitude and longitude
      rootStore.cityInputStore.setCityName(response.data.name);
      apiMethods.getForecast(lat, lon).then(response => {
        setForecastData(response.data);
        rootStore.cityInputStore.setCityInputValue("");
      }).finally(() => {
        setRequestIsFetching(false);
      });
    }).catch(error => {
      setRequestIsFetching(false);
    });
  }
  return (
    <>
      <CityInput cityInputValue={rootStore.cityInputStore.currentValue}
                 setCityInputValue={rootStore.cityInputStore.setCityInputValue}
                 onCitySubmit={onCitySubmit}
                 inputEl={inputEl}/>
      {Object.keys(forecastData).length !== 0 ?
        //if forecast is not empty render data else render empty div
        <div className="main-content__wrapper">
          <WeatherInfo cityName={rootStore.cityInputStore.cityName} forecastData={forecastData}/>
        </div> : requestIsFetching ? <Loader/> : <></>}
    </>
  );
});

export default Content;