import axios from "axios";
import {appid} from "./openWeatherKey";
import forecastDataStore from "../MobX/ForecastDataStore";
import GetWeatherImageId from "../Common/WeatherImages/WeatherImages";

const units = 'metric';
const axiosInstance = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
});

export const apiMethods = {
  getCityCoords(cityName: string) {
    return axiosInstance.get(`weather/?q=${cityName}&appid=${appid}`);
  },
  getForecast(lat: number, lon: number) {
    return axiosInstance.get(`onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${units}&appid=${appid}`);
  },
};



export const convertForecastData = (forecastData: any) => {
  class Data {
    currentTemp: string = this.convertTemperature(forecastData.current.temp);
    feelsLike: string = this.convertTemperature(forecastData.current['feels_like']);
    date: Date = new Date(forecastData.current.dt * 1000);
    weatherId: string = GetWeatherImageId(forecastData.current.weather[0].id);
    weatherDescription: string = forecastData.current.weather[0].main;
    timeString: string = this.date.toTimeString();
    imageURL: string = `http://openweathermap.org/img/wn/${this.weatherId}d@4x.png`;
    convertTemperature (temperature: number): string {
      return Math.floor(temperature) > 0
        ? '+' + Math.floor(temperature) : '' + Math.floor(temperature);
    }
    //method which ads '+' symbol to the temperature value if it's greater than zero
  }
  return new Data();
};