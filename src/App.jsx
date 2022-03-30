import { Component } from 'react';
import Day from './Components/DayComponent';

import './App.css';
import TextAreaComponent from './Components/TextAreaComponent';
import Card from './Components/Card';
class App extends Component {
  state = {
    isTextAdded: false,
    isTextMoreThanFive: false,
    day: 1,
    data: [],
    addedText: '',
    addedDay: 1,
  };

  handleOnTextAdded = (value) => {
    const { addedText, day } = this.state;
    this.setState((prevState) => {
      return {
        isTextAdded: addedText.length >= 5 ? true : false,
        data: [...prevState.data, { addedText, addedDay: day }],
        addedText: '',
      };
    });
  };
  handleOnTextChanged = ({ target }) => {
    this.setState({
      addedText: target.value,
    });
  };
  handleDayChange = (value) => {
    this.setState({
      day: value,
    });
  };
  handleDelete = (e) => {
    this.setState((prevState) => {
      return {
        data: prevState.data.filter((plan,index) => {
          console.log(e);
          console.log(e!==index);
          return e !== index
        })
      };
    });

    console.log(this.state.data);
  }

  render() {
    const { addedText, isTextAdded, data, addedDay, day } = this.state;
    console.log(data);

    return (
      <>
        <div className="main-section">
          <h1 className="title">RamadanPlan</h1>
          <p className="description">save your plan here...</p>
        </div>
        <div className="form-section">
          <form className="form">
            <Day handleDayChange={this.handleDayChange} addedDay={addedDay} />

            <TextAreaComponent
              handleOnTextAdded={this.handleOnTextAdded}
              isTextAdded={isTextAdded}
              addedDay={addedDay}
              addedText={addedText}
              handleOnTextChanged={this.handleOnTextChanged}
              day={day}
            />
            <Card
              addedDay={addedDay}
              isTextAdded={isTextAdded}
              addedText={addedText}
              data={data}
              handleDelete={this.handleDelete}
            />
          </form>
        </div>
      </>
    );
  }
}

export default App;
