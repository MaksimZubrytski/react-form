import Button from "../Button/Button"
import Input from "./Input/Input"
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.props = props;
    }

  handleChange = (event) => {
    const type = event.target.placeholder
    this.props.setState({
      [type]: event.target.value
    })
  }

  render() {
      return (
        <form onSubmit={this.props.onSubmit}>
          <Input type="text" placeholder="name" onChange={this.handleChange}/>
          <Input type="password" placeholder="password" onChange={this.handleChange}/>
          <Button />
        </form>
      );
  }
}

export default Form