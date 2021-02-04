import React, {MutableRefObject, useRef} from 'react';
import styled from "styled-components";
import {apiMethods} from "../../API/api";
import {setCityInputValue, setCityName, setForecastData, setRequestIsFetching} from "../../Redux/Reducers/rootReducer";
import {connect} from "react-redux";

const StyledInput = styled.input`
  font-size: 16px;
  padding: 10px 20px;
  outline: none;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  max-width: 500px;
  width: calc(100% - 50px);
`;

const actionCreators = {
  setForecastData,
  setRequestIsFetching,
  setCityName,
  setCityInputValue,
};

const mapStateToProps = (state: any) => ({
  cityInputValue: state.cityInputValue,

})

const CityInput = (props: any) => {

  const inputEl = useRef() as MutableRefObject<HTMLInputElement>;
  // ref is used to blur input element on form submission
  const onCitySubmit = (e: any): void => {
    debugger;
    props.setForecastData({});
    //clearing previous forecast data
    props.setRequestIsFetching(true);
    inputEl.current.blur();
    e.preventDefault();

    apiMethods.getCityCoords(props.cityInputValue).then(response => {
      //fetching longitude and latitude of the city
      let [lon, lat] = [response.data.coord.lon, response.data.coord.lat];
      //fetching forecast for current latitude and longitude
      props.setCityName(response.data.name);
      apiMethods.getForecast(lat, lon).then(response => {
        props.setForecastData(response.data);
        props.setCityInputValue('');
      }).finally(() => {
        props.setRequestIsFetching(false);
      });
    }).catch(error => {
      props.setRequestIsFetching(false);
    });
  }
  return (
    <form onSubmit={(e) => onCitySubmit(e)}>
      <StyledInput value={props.cityInputValue}
                   onChange={(e) => props.setCityInputValue(e.target.value)}
                   placeholder={'Search...'}
                   onFocus={e => e.target.placeholder = ''}
                   onBlur={(e) => e.target.placeholder = 'Search...'}
                   ref={inputEl}/>
    </form>
  )
}

export default connect(mapStateToProps, actionCreators)(CityInput);