import React, { Component } from 'react'
import General from './General'
import Education from './Education'
import Work from './Work'

export default class Body extends Component {
  render() {
    return (
      <div>
        <General></General>
        <Education></Education>
        <Work></Work>
      </div>
    )
  }
}
