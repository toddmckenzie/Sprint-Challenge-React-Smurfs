import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import EditForm from './components/EditForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidUpdate() {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({
        smurfs: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteSmurf(id){
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      this.setState({
        smurfs: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }


  editSmurf(id){
    axios.put(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      this.setState({
        smurfs: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className='nav'>
          <NavLink to='/' activeClassName='list'>
            <h1>Smurfs List</h1>
          </NavLink>
          <NavLink to='smurf-form' activeClassName='add'>
            <h1>Add Smurf</h1>
          </NavLink>

        </div>
          <Route path='/smurf-form' render={props => <SmurfForm {...props} /> } />
          <div className='flexes'>
            <Route exact path='/'
            render={props => <Smurfs {...props}
            deleteSmurf={this.deleteSmurf}
            smurfs={this.state.smurfs}/> } />
            <Route path='/edit-form'
            render={props => <EditForm {...props} editSmurf={this.editSmurf}/> } />
          </div>
      </div>
    );
  }
}


export default App;
