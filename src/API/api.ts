import axios from "axios";
import {appid} from "./openWeatherKey";

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