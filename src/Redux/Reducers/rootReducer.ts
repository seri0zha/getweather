import actions from "../../Redux/actions";
interface IReducerAction {
  type: string,
  payload: any,
}

interface IInitialState {
  cityInputValue: string,
  cityName: string,
  forecastData: any,
  requestIsFetching: boolean,
}

const initialState: IInitialState = {
  cityInputValue:  '',
  cityName: '',
  forecastData: {},
  requestIsFetching: false,
};

const rootReducer = (state = initialState, action: IReducerAction): IInitialState => {
  switch (action.type) {
    case actions.SET_CITY_INPUT_VALUE: {
      return {...state, cityInputValue: action.payload};
    }
    case actions.SET_CITY_NAME: {
      return {...state, cityName: action.payload};
    }
    case actions.SET_FORECAST_DATA: {
      return {...state, forecastData: action.payload};
    }
    case actions.SET_IS_FETCHING: {
      return {...state, requestIsFetching: action.payload};
    }
    default:
      return {...state}
  }
}

export const setCityInputValue = (cityInputValue: string) => (
  {type: actions.SET_CITY_INPUT_VALUE, payload: cityInputValue}
);

export const setCityName = (cityName: string) => (
  {type: actions.SET_CITY_NAME, payload: cityName}
);

export const setForecastData = (forecastData: any) => (
  {type: actions.SET_FORECAST_DATA, payload: forecastData}
);

export const setRequestIsFetching = (requestIsFetching: boolean) => (
  {type: actions.SET_IS_FETCHING, payload: requestIsFetching}
);


export default rootReducer;
