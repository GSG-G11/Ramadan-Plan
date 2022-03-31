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
    editing: false,
  };

  handleOnTextAdded = () => {
    const { addedText, day } = this.state;
    this.setState({
      isTextAdded: addedText.length >= 1 ? true : false,
    });
    this.setState((prevState) => {
      if (addedText.length >= 1)
        return {
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
  handleDelete = (id) => {
    this.setState((prevState) => {
      return {
        data: prevState.data.filter((plan, index) => {
          console.log(plan, index, id);
          return id !== index;
        }),
      };
    });
  };
  handleEditing = (e) => {
    this.setState({
      editing: true,
    });
  };
  handleEditPlan = (id, updatedText) => {
    this.setState({
      data: this.state.data.map((plan, idx) => {
        if (idx === id) {
          plan.addedText = updatedText;
        }
        return plan;
      }),
      editing: false,
    });
  };

  render() {
    const { addedText, isTextAdded, data, addedDay, day, editing } = this.state;
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
              handleEditPlan={this.handleEditPlan}
              handleEditing={this.handleEditing}
              editing={editing}
            />
          </form>
        </div>
      </>
    );
  }
}

export default App;
