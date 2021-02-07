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
    alert("Name: " + this.state.name + " Password: " + this.state.password)
  }

  render() {
    return (
      <div className="App">
        <Form
          onSubmit={this.handleSubmit} 
          setState={this.setState.bind(this)}
        />
      </div>
    );
  }
}

export default App;
