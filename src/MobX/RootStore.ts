import {createContext} from "react";
import CityInputStore from "./CityInputStore";

class RootStore {
  cityInputStore: CityInputStore;
  constructor() {
    this.cityInputStore = new CityInputStore();
  }
}

let rootStoreContext = createContext(new RootStore());
export default rootStoreContext;