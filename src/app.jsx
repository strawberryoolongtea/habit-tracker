import "./app.css";
import React, { Component } from "react";
import { nanoid } from "nanoid";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: nanoid(), name: "reading", count: 1 },
      { id: nanoid(), name: "running", count: 2 },
      { id: nanoid(), name: "coding", count: 3 },
    ],
  };

  handleIncrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    // this.setState({ habits });

    // * using PureComponent
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count = habits[index].count > 0 ? habits[index].count - 1 : 0;
    // this.setState({ habits });

    // * using PureComponent
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id && item.count > 0) {
        const count = habit.count - 1;
        return { ...habit, count: count > 0 ? count : 0 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // * using splice method
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // console.log(index);
    // habits.splice(index, 1);
    // this.setState({ habits });

    // * using filter
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: nanoid(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    console.log("app");
    return (
      <>
        <Navbar
          totalCount={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
