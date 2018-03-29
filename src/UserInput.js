import React from 'react';
//import UserOutput from './UserOutput ';

const UserInput = (props) =>{

    return (
        <div className="output">
        <input type="text" style= {props.styles} onChange={props.changed} value = {props.userName}/>
        </div>
    );
}

export default UserInput;