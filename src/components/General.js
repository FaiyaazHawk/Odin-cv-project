import React, { Component } from 'react'

export default class General extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      name: '',
      email: '',
      phone: '',
      edit: true
    })

    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSection = this.renderSection.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  renderSection() {
    this.toggleEdit()
    console.log(this.state)
  }
  //prevents form from submitting and refreshing.
  handleSubmit(e) {
    e.preventDefault();
  }
  ///tracks info updates
  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }
  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }
  handlePhoneChange = (e) => {
    this.setState({phone: e.target.value})
  }
  //changes edit state
  toggleEdit() {
    this.state.edit ? this.setState({edit: false}) : this.setState({edit: true})
  }

  render() {
    return (
      <div>
        
        <form style={{display: this.state.edit? "block":"none"}} onSubmit={this.handleSubmit} className='General'>
            <label htmlFor='name'>Name:</label>
            <input type="text" onChange={this.handleNameChange}></input>
            
            <label htmlFor='email'>Email:</label>
            <input type="email" onChange={this.handleEmailChange}></input>
            
            <label htmlFor='phone'>Phone:</label>
            <input type="number" onChange={this.handlePhoneChange}></input>
        </form>
      
        {!this.state.edit && <h2>Name: {this.state.name}</h2>}
        {!this.state.edit && <h2>Email: {this.state.email}</h2>}
        {!this.state.edit && <h2>Phone: {this.state.phone}</h2>}



          <button onClick={this.renderSection}>Toggle Edit</button>
      </div>
    )
  }
}
