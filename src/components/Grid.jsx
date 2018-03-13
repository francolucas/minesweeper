import React from 'react'
import styled from 'styled-components'

import Item from './Item'

const StyledSection = styled.section`
  position: relative;
  padding-top: 50px;

  > div {
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
  }
`

const arr = []
for (let i = 0; i < 81; i++) {
  arr.push(i + 1)
}

const Grid = () => (
  <StyledSection>
    <div>
      {
        arr.map((v, index) => <Item key={index} index={index} />)
      }
    </div>
  </StyledSection>
)

export default Grid
