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
  max-width: 90vw;
  background-color: #d1d8e0;
  transform: translateX(-50%);
  border: solid 1px #d1d8e0;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  grid-column-gap: 1px;
  grid-row-gap: 1px;
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
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
      <Item>1</Item>
    </StyledGrid>
  </StyledSection>
)

export default Grid
