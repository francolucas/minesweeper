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
  max-height: 90vw;
  background-color: #d1d8e0;
  transform: translateX(-50%);
  display: grid;
  grid-template: repeat(9, calc(100% / 9 - 1px)) / repeat(9, calc(100% / 9 - 1px));
  grid-gap: 1px;
  padding: 1px 0 0 1px;
`

const Item = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-size: 4vh;
`

const arr = []
for (let i = 0; i < 81; i++) {
  arr.push(1)
}

const Grid = () => (
  <StyledSection>
    <StyledGrid>
      {
        arr.map(v => <Item>{v}</Item>)
      }
    </StyledGrid>
  </StyledSection>
)

export default Grid
