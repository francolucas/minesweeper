import React, { Component } from 'react'
import WebFont from 'webfontloader'

import Header from './components/Header'
import Grid from './components/Grid'

class App extends Component {
  componentDidMount() {
    WebFont.load({
      google: {
        families: ['Roboto:400']
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Grid />
      </React.Fragment>
    )
  }
}

export default App
