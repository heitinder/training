import logo from "./logo.svg";
import "./App.css";
import { React, Component } from "react";
import DataTableContainer from "./compoents/DataTable/DataTableContainer/DataTableContainer";

class App extends Component {
  // class compnent aka stateful compnents aka smart compnents
  // lifecycle method (only class compnents have life cycle methods)

  constructor(props) {
    super(props);
    this.state = {
      greeting: "Heitinder",
      students: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(index) {
    let newStudents = this.state.students;
    newStudents.splice(index, 1);
    this.setState({
      students: newStudents,
    });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
       <DataTableContainer></DataTableContainer>
      </div>
    );
  }
}

export default App;
