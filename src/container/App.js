import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Persons from '../components/Persons/Persons';
class App extends Component{

  state = {
    persons: [
      {name:'elifx' , age : 28},
      {name:'eyşan' , age : 28},
      {name:'deniz' , age : 28},
    ],
    otherState:'Some other variable',
    showPersons : false 
  }

  switchHandler= (newName) => {
    this.setState({
     persons: [
       {name: newName , age : 28},
       {name:'Mert' , age : 28},
       {name:'Ali' , age : 28},
     ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name:'Max' , age : 28},
        {name:event.target.value , age : 28},
        {name:'Ali' , age : 28},
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }
  
  deletePersonHandler = (personIndex) => {
      const persons = this.state.persons;
      persons.splice(personIndex,2);
      this.setState({persons : persons})
  }

  render(){
    const style = {
      backgroundColor : 'green',
      color:'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer',
      ':hover' : {
        backgroundColor:'lightgreen',
        color: 'black'
        
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
        />
      </div>
      );
       style.backgroundColor='red';
       style[':hover'] = {
        backgroundColor:'lightgreen',
        color : 'black'
        
      }
    }

   const classes = [];
   if (this.state.persons.length<2) {
     classes.push('red');
   }
   if (this.state.persons.length<1) {
     classes.push('bold');
   }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p className={classes.join('')}>This is really working</p>
        <button
          style={style}
          onClick = {this.togglePersonHandler}>Switch Name 
        </button>

           {persons}
      </div>
    )
  }
}
  
export default Radium(App);
