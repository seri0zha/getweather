import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.header`
  /*background: #b0e8f5;*/
  color: #555;
  width: 100vw;
  text-align: center;
  font-size: 32px;
  height: 60px;
  line-height: 54px;
  font-family: 'Comfortaa';
`;


const Header = () => {
  return (
    <StyledHeader>
      getweather
    </StyledHeader>
  )
}

export default Header;
