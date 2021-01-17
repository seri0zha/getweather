import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 16px;
  padding: 10px 20px;
  outline: none;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  max-width: 500px;
  width: calc(100% - 50px);
`;

const CityInput = (props: any) => {
  return (
    <form onSubmit={(e) => props.onCitySubmit(e)}>
      <StyledInput value={props.cityInputValue}
                   onChange={(e) => props.setCityInputValue(e.target.value)}
                   placeholder={'Search...'}
                   onFocus={e => e.target.placeholder = ''}
                   onBlur={(e) => e.target.placeholder = 'Search...'}/>
    </form>
  )
}

export default CityInput;