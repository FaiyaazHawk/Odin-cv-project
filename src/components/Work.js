import React, { Component } from 'react'
import '../styles/Section.css'

export default class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyname: '',
      position: '',
      worktasks: '',
      startdate: '',
      enddate: '',
      edit:true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);

  }
  //prevents form from submitting and refreshing.
  handleSubmit(e) {
    e.preventDefault();
  }
  //changes edit state
  toggleEdit() {
    this.state.edit ? this.setState({edit: false}) : this.setState({edit: true})
  }
  //tracks info updates
  handleCompanyNameChange = (e) => {
    this.setState({companyname: e.target.value})
  }
  handlePositionChange = (e) => {
    this.setState({position: e.target.value})
  }
  handleWorkTasksChange = (e) => {
    this.setState({worktasks: e.target.value})
  }
  handleStartDateChange = (e) => {
    this.setState({startdate: e.target.value})
  }
  handleEndDateChange = (e) => {
    this.setState({enddate: e.target.value})
  }



  render() {
    return (
      <div className='container'>
        <form style={{display: this.state.edit? "block":"none"}} onSubmit={this.handleSubmit}>
            <label htmlFor='companyname'>Name of Company</label>
            <input type="text" onChange={this.handleCompanyNameChange}></input>
            <label htmlFor='position'>Position/Title</label>
            <input type="text" onChange={this.handlePositionChange}></input>
            <label htmlFor='worktasks'>Work Tasks</label>
            <textarea type="text" onChange={this.handleWorkTasksChange}></textarea>
            <label htmlFor='startdate'>Start Date:</label>
            <input type="date" onChange={this.handleStartDateChange}></input>
            <label htmlFor='enddate'>End Date:</label>
            <input type="date" onChange={this.handleEndDateChange}></input>  
        </form>
        {!this.state.edit && <h2>Company Name: {this.state.companyname}</h2>}
        {!this.state.edit && <h2>Position / Title: {this.state.position}</h2>}
        {!this.state.edit && <h2> Work Tasks: {this.state.worktasks}</h2>}
        {!this.state.edit && <h2> Start Date: {this.state.startdate}</h2>}
        {!this.state.edit && <h2>End Date: {this.state.enddate}</h2>}

        <button type='submit'onClick={this.toggleEdit}>Toggle Edit</button>
      </div>
    )
  }
}
