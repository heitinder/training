import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ListItem from "./compoents/ListItems/ListItems";
// const  App = ()  => {
//   const greetings = "Hello, Welcome to react app";

//   return (
//     <div className="App">
//       <h1>{greetings}</h1>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "John",
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  updateName() {
    this.setState({
      name: "heitinder",
    });
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.date.toLocaleTimeString()}</p>
        <p>{this.state.name}</p>
        <button onClick={() => this.updateName()}>Change name </button>
      </div>
    );
  }
}

export default App;
