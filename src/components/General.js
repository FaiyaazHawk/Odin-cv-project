import React, { Component } from 'react'

export default class General extends Component {
  constructor() {
    super();
    this.renderSection = this.renderSection.bind(this)
  }

  renderSection() {
    console.log('test')
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='General'>
            <label htmlFor='name'>Name:</label>
            <input type="text"></input>
            <label htmlFor='email'>Email:</label>
            <input type="email"></input>
            <label htmlFor='phone'>Phone:</label>
            <input type="number"></input>
            <button onClick={this.renderSection}>ADD</button>
        </form>
      </div>
    )
  }
}
