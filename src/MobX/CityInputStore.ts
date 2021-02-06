import { makeAutoObservable } from "mobx";

class CityInputStore {

  constructor() {
    makeAutoObservable(this);
  }

  currentValue: string = '';
  cityName: string = '';

  setCityInputValue = (value: string): void => {
    this.currentValue = value;
  }

  setCityName = (value: string): void => {
    this.cityName = value;
  }
}

const cityInputStore = new CityInputStore();

export default cityInputStore;
