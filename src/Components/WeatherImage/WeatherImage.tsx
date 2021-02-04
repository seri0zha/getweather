import React from "react";
import styled from "styled-components";

interface WeatherInfoProps {
  readonly imageURL: string,
}

const WeatherWrapper = styled.div<WeatherInfoProps>`
  height: 120px;
  width: 150px;
  background: center url(${props => props.imageURL}) no-repeat;
`;


const WeatherImage = (props: WeatherInfoProps) => {
  return (
    <WeatherWrapper imageURL={props.imageURL}/>
  )
};

export default WeatherImage;