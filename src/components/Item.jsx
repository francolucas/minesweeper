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
  render() {
    return (
      <StyledItem onClick={() => this.props.onClick(this.props.index)} data-title={this.props.index + 1}>
        {this.props.value}
      </StyledItem>
    )
  }
}

export default Item
