import React from "react"
import Radium from 'radium';
const person = (props) => {
    return <div className="Person">
        <p> I'm {props.name} and I'm {props.age} </p>
    <input type="text" onChange=""></input>
    </div>
    
}

export default Radium(person);