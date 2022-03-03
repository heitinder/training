import { React, Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props)
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
    return <h5>This is home compnent </h5>;
  }
}

export default Home;