import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  position: relative;
  padding-top: 50px;
`

const StyledGrid = styled.div`
  position: absolute;
  left: 50%;
  width: 70vh;
  height: 70vh;
  background-color: #d1d8e0;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(9, 11.11% 0);
  grid-template-rows: repeat(9, 11.11% 0);
`

const Item = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

const Grid = () => (
  <StyledSection>
    <StyledGrid>
      <Item>1</Item>
    </StyledGrid>
  </StyledSection>
)

export default Grid
