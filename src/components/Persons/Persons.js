import React from 'react';
import Person from './Person/Person';


const persons = (props) => 
    props.persons.map((persons,index) =>{
        return<Person click={() => props.deletePersonHandler(index)} name={persons.name} age={persons.age}/>
      });

export default persons;