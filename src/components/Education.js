import React, { Component } from 'react'

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolname: '',
      studytitle: '',
      graduationyear: '',
      edit: true
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
  ///tracks info updates
  handleSchoolNameChange = (e) => {
    this.setState({schoolname: e.target.value})
  };

  handleStudyTitleChange = (e) => {
    this.setState({studytitle: e.target.value})
  }

  handleGraduationYearChange = (e) => {
    this.setState({graduationyear: e.target.value})
  }


  render() {
    return (
      <div>
        <form style={{display: this.state.edit? "block":"none"}} onSubmit={this.handleSubmit} >
          <label htmlFor='schoolname'>School Name:</label>
          <input type="text" onChange={this.handleSchoolNameChange}></input>
          <label htmlFor='studytitle'>Title of Study:</label>
          <input type="text" onChange={this.handleStudyTitleChange}></input>
          <label htmlFor='graduationyear'>Year Graduated:</label>
          <input type="date" onChange={this.handleGraduationYearChange}></input>
        </form>

        {!this.state.edit && <h2>School Name: {this.state.schoolname}</h2>}
        {!this.state.edit && <h2>Study Title: {this.state.studytitle}</h2>}
        {!this.state.edit && <h2>Grad date: {this.state.graduationyear}</h2>}
        
        <button type='submit' onClick={this.toggleEdit}>Toggle Edit</button>
      </div>
    )
  }
}
