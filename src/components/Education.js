import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor='schoolname'>School Name:</label>
          <input type="text"></input>
          <label htmlFor='studytitle'>Title of Study:</label>
          <input type="text"></input>
          <label htmlFor='graduationyear'>Year Graduated:</label>
          <input type="date"></input>
          <button type='submit'>ADD</button>
        </form>
      </div>
    )
  }
}
