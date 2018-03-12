import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-size: 4vh;
`

const handleClick = value => alert(value)

const Item = ({value}) =><StyledItem onClick={() => handleClick(value)}>{value}</StyledItem>

export default Item
