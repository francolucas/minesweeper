import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 20px;
  color: #555;
  width: 100%;
  text-align: center;
  background-color: #DCDCDC;

`

const Header = () => (
  <StyledHeader>
    <h1>Minesweeper builder</h1>
  </StyledHeader>
)

export default Header
