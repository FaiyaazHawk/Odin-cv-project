import React, { useState } from 'react'
import '../styles/Section.css'

function General () {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [edit, setEdit] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const toggleEdit = ()  => {
    edit? setEdit(false) : setEdit (true)
  }
  ///handlers
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }
  
  return (
    <div className='container'>
        <form style={{display: edit? "block":"none"}} onSubmit={handleSubmit} className='general'>
            <label htmlFor='name'>Name:</label>
            <input type="text" onChange={handleNameChange}></input>
            
            <label htmlFor='email'>Email:</label>
            <input type="email" onChange={handleEmailChange}></input>
            
            <label htmlFor='phone'>Phone:</label>
            <input type="number" onChange={handlePhoneChange}></input>
        </form>
        {!edit && <h2>Name: {name}</h2>}
        {!edit && <h2>Email: {email}</h2>}
        {!edit && <h2>Phone: {phone}</h2>}

        <button onClick={toggleEdit}>Toggle Edit</button>
    </div>
  )
}

export default General

/* export default class General extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      name: '',
      email: '',
      phone: '',
      edit: true
    })

    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
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
      <div className='container'>
        
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



          <button onClick={this.toggleEdit}>Toggle Edit</button>
      </div>
    )
  }
}
 */