import React, { Component } from 'react'
import styled from 'styled-components'

const StyledItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-size: 4vh;
  position: relative;

  &:after {
    content: attr(data-title);
    font-size: 1vh;
    color: #d1d8e0;
    position: absolute;
    top: .5vh;
    left: .5vh;
  }
`

class Item extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: [Math.floor(props.index / 9), Math.round(props.index % 9)]
    }
  }
  handleClick = () => {
    const { currentIndex } = this.state
    const around = [
      [currentIndex[0] - 1, currentIndex[1]],
      [currentIndex[0] - 1, currentIndex[1] + 1],
      [currentIndex[0], currentIndex[1] + 1],
      [currentIndex[0] + 1, currentIndex[1] + 1],
      [currentIndex[0] + 1, currentIndex[1]],
      [currentIndex[0] + 1, currentIndex[1] - 1],
      [currentIndex[0], currentIndex[1] - 1],
      [currentIndex[0] - 1, currentIndex[1] - 1],
    ].filter(index =>
      index[0] >= 0 && index[0] < 9 && index[1] >= 0 && index[1] < 9
    )

    // Update the around items
  }

  render() {
    return (
      <StyledItem onClick={this.handleClick} data-title={this.props.index + 1} />
    )
  }
}

export default Item
