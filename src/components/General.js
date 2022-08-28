import React, { Component } from 'react'

export default class General extends Component {
  render() {
    return (
      <div>
        <form className='General'>
            <label htmlFor='name'>Name:</label>
            <input type="text"></input>
            <label htmlFor='email'>Email:</label>
            <input type="email"></input>
            <label htmlFor='phone'>Phone:</label>
            <input type="number"></input>
            <button type='submit'>ADD</button>
        </form>
      </div>
    )
  }
}
