import { Component } from 'react';
import Day from './Components/DayComponent';

import './App.css';
import TextAreaComponent from './Components/TextAreaComponent';
class App extends Component {
  state = {
    text: '',
    isTextAdded: false,
    isTextMoreThanFive: false,
    day: 1,
  };
  handleOnTextAdded = () => {
    const { text } = this.state;
    this.setState({
      isTextAdded: text.length >= 5 ? true : false,
      text: '',
    });
  };
  handleOnTextChanged = (value) => {
    this.setState({
      text: value,
    });
  };

  handleDayChange = (value) => {
    this.setState({
      day: value,
    });
  };

  render() {
    const { text, isTextAdded } = this.state;
    console.log(text, isTextAdded);
    return (
      <>
        <div className="main-section">
          <h1 className="title">RamadanPlan</h1>
          <p className="description">save your plan here...</p>
        </div>
        <div className="form-section">
          <form className="form">
            <Day handleDayChange={this.handleDayChange} day={this.state.day} />

            <TextAreaComponent
              handleOnTextAdded={this.handleOnTextAdded}
              handleOnTextChanged={this.handleOnTextChanged}
              text={text}
              isTextAdded={isTextAdded}
            />
          </form>
        </div>
      </>
    );
  }
}

export default App;
