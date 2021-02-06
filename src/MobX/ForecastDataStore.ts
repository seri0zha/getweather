import { makeAutoObservable } from "mobx";

class ForecastDataStore {

  constructor() {
    makeAutoObservable(this);
  }

  forecastData: any = {};
  isFetching: boolean = false;

  setForecastData = (data: any): void => {
    this.forecastData = {...data};
  }

  setRequestIsFetching = (isFetching: boolean): void => {
    this.isFetching = isFetching;
  }
}

let forecastDataStore = new ForecastDataStore();

export default forecastDataStore;
