import React from 'react';

class EditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }


  handleInputChange = e => {
    this.setState({ ...this.state.smurf,
      [e.target.name]: e.target.value });
  };


  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.addSmurf}>
        <input
          onChange={this.handleInputChange}
          placeholder="name"
          value={this.state.name}
          name="name"
        />
        <input
          onChange={this.handleInputChange}
          placeholder="age"
          value={this.state.age}
          name="age"
        />
        <input
          onChange={this.handleInputChange}
          placeholder="height"
          value={this.state.height}
          name="height"
        />
        <button type="submit">Add to the village</button>
      </form>
    )
  }
}



export default EditForm;
