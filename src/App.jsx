import { Component } from 'react';
import Day from './Components/DayComponent';

import './App.css';
console.log();
class App extends Component {
  state = {
    day:1
  };
  
  handleDayChange =(value)=>{
    this.setState({
      day: value,
    })
  }

  render() {
    return (
      <>
        <div className="main-section">
          <h1 className="title">RamadanPlan</h1>
          <p className="description">save your plan here..</p>
        </div>
        <div className="form-section">
          <form className='form'>
            <Day handleDayChange={this.handleDayChange} day={this.state.day} />
          </form>
        </div>
      </>
    );
  }
}

export default App;
