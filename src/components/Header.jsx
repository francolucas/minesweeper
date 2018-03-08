import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 20px;
  color: #fff;
  width: 100%;
  text-align: center;
  background-color: #8854d0;
`

const Header = () => (
  <StyledHeader>
    <h1>Minesweeper builder</h1>
  </StyledHeader>
)

export default Header
