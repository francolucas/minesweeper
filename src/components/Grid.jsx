import React, { Component } from 'react'
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

class Grid extends Component {
  constructor(props) {
    super(props)

    const indexes = []
    for (let i = 0; i < 81; i++) {
      indexes.push(null)
    }
    this.state = { indexes }
  }

  handleClick = (index) => {
    const position = [Math.floor(index / 9), Math.round(index % 9)]
    const around = [
      [position[0] - 1, position[1]],
      [position[0] - 1, position[1] + 1],
      [position[0], position[1] + 1],
      [position[0] + 1, position[1] + 1],
      [position[0] + 1, position[1]],
      [position[0] + 1, position[1] - 1],
      [position[0], position[1] - 1],
      [position[0] - 1, position[1] - 1],
    ].filter(position =>
      position[0] >= 0 && position[0] < 9 && position[1] >= 0 && position[1] < 9
    ).map(position =>
      (9 * position[0]) + position[1]
    )

    const indexes = this.state.indexes.map((value, index) =>
      around.indexOf(index) >= 0 ? value + 1 : value
    )

    this.setState({ indexes })
  }

  render() {
    return (
      <StyledSection>
        <div>
          {
            this.state.indexes.map((value, index) =>
              <Item key={index} index={index} onClick={this.handleClick} value={value} />
            )
          }
        </div>
      </StyledSection>
    )
  }
}

export default Grid
