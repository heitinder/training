import logo from "./logo.svg";
import "./App.css";
import { React, Component } from "react";
import Heading from "./compoents/Heading/Heading";

class App extends Component {
  // class compnent aka stateful compnents aka smart compnents
  // lifecycle method (only class compnents have life cycle methods)

  constructor(props) {
    super(props);
    this.state = {
      greeting: "Heitinder",
    };
  }

  updateGreeting(){
    this.setState({
      greeting:'John Doe'
    })
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Heading greeting={this.state.greeting}></Heading>
        <button onClick={()=>this.updateGreeting()}>Change Greeting</button>
      </div>
    );
  }
}

export default App;
