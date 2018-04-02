import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';


class App extends Component {

  state = {
    userName: "Masudul Hasan",
    userName1: "Ateeb Hasan"
  }

  userHandler = (event) =>{
    this.setState ({
      userName: event.target.value
    })
  }
  userHandler1 = (event) => {
    this.setState({
      userName1: event.target.value
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
        <UserOutput userName={this.state.userName} userName1={this.state.userName1}/>
      
        <UserInput 
        styles ={styles}
        changed={this.userHandler}
          newName={this.state.userName}
          changed1={this.userHandler1}
          newName1={this.state.userName1}/>
       
      </div>
    );
  }
}

export default App;
