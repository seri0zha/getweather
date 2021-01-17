import axios from "axios";

const appid = '0f51020b781960d8f6c3c460f6dce207';
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