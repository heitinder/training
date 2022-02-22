import logo from "./logo.svg";
import "./App.css";
import { React, Component } from "react";
import Heading from "./compoents/Heading/Heading";
import ListItem from "./compoents/ListItems/ListItems";

class App extends Component {
  // class compnent aka stateful compnents aka smart compnents
  // lifecycle method (only class compnents have life cycle methods)

  constructor(props) {
    super(props);
    this.state = {
      greeting: "Heitinder",
      students: [],
    };
  }

  updateGreeting() {
    this.setState({
      greeting: "John Doe",
    });
  }

  setStudents(newValue) {
    this.setState({
      students: [...this.state.students, newValue],
      // students: this.state.students.concat(newValue)
    });
  }

  addStudents() {
    const newItem = document.getElementById("addItem").value;
    this.setStudents(newItem);
    document.getElementById("addItem").value = "";
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Heading greeting={this.state.greeting}></Heading>
        <button onClick={() => this.updateGreeting()}>Change Greeting</button>
        <ListItem students={this.state.students}></ListItem>
        <input id="addItem" type="text"></input>
        <br />
        <button onClick={() => this.addStudents()}>Add Item</button>
      </div>
    );
  }
}

export default App;
