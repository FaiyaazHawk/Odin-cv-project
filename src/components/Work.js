import React, { Component } from 'react'

export default class Work extends Component {
  render() {
    return (
      <div>
        <form>
            <label htmlFor='companyname'>Name of Company</label>
            <input type="text"></input>
            <label htmlFor='position'>Position/Title</label>
            <input type="text"></input>
            <label htmlFor='worktasks'>Work Tasks</label>
            <textarea type="text"></textarea>
            <label htmlFor='startdate'>Start Date:</label>
            <input type="date"></input>
            <label htmlFor='enddate'>End Date:</label>
            <input type="date"></input>
            <button type='submit'>ADD</button>
        </form>
      </div>
    )
  }
}
