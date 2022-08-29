import React, { Component } from 'react'

export default class General extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      name: '',
      email: '',
      phone: ''
    })

    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSection = this.renderSection.bind(this);
  }

  renderSection() {
    console.log(this.state)
  }
  //prevents form from submitting and refreshing.
  handleSubmit(e) {
    e.preventDefault();
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }
  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }
  handlePhoneChange = (e) => {
    this.setState({phone: e.target.value})
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='General'>
            <label htmlFor='name'>Name:</label>
            <input type="text" onChange={this.handleNameChange}></input>
            <label htmlFor='email'>Email:</label>
            <input type="email" onChange={this.handleEmailChange}></input>
            <label htmlFor='phone'>Phone:</label>
            <input type="number" onChange={this.handlePhoneChange}></input>
            <button onClick={this.renderSection}>ADD</button>
        </form>
      </div>
    )
  }
}
