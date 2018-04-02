import React from 'react';
import './style.css'

const UserOutput = (props) => {

    return(
        <div className ="output">
        <p>My name is {props.userName} </p>
        <p>My name is {props.userName1}</p>
        </div>
    );
}

export default UserOutput;