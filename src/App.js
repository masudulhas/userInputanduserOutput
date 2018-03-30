import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';


class App extends Component {

  state = {
    userName: "Masudul Hasan"
  }

  userHandler = (event) =>{
    this.setState ({
      userName: event.target.value
    })
  }
  render() {
    // inline style
    const styles = {
      backgroundColor: 'red',
      padding: '20px' 
    };
    
    return (
      <div className="App">
        <UserOutput  userName = {this.state.userName}/>
        <UserInput 
        styles ={styles}
        changed={this.userHandler}
          newName={this.state.userName}/>
      </div>
    );
  }
}

export default App;
