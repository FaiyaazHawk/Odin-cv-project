import React, { Component } from 'react'
import '../styles/Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <p>Created by Faiyaaz Haque</p>
        <a className='Footer--link' href='https://github.com/FaiyaazHawk'>Hosted on Github</a>
      </div>
    )
  }
}
