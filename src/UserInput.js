import React from 'react';
//import UserOutput from './UserOutput ';

const UserInput = (props) =>{

    return (
        <div className="output">
        <input type="text" style= {props.styles} onChange={props.changed} value = {props.newName}/>
        </div>
    );
}

export default UserInput;