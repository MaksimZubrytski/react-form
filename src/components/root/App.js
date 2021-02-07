import './App.css';
import Form from '../Form/Form';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      password: ""
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    alert("name: " + this.state.name +  " " + "password: " + this.state.password)
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <Form
          onSubmit={this.handleSubmit} 
          onChangeName={this.handleChangeName} 
          onChangePassword={this.handleChangePassword}
        />
      </div>
    );
  }
}

export default App;
