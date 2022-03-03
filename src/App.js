import logo from "./logo.svg";
import "./App.css";
import { React, Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import DataTableContainer from "./compoents/DataTable/DataTableContainer/DataTableContainer";
import SingleUser from "./compoents/DataTable/DataTableItems/SingleUser/SingleUser";
import Timer from './compoents/timer/Timer'

class App extends Component {
  // class compnent aka stateful compnents aka smart compnents
  // lifecycle method (only class compnents have life cycle methods)

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Users</Link>
            </li>
            <li>
              <Link to="/heading">Home</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
            <li>
              <Link to="/timer">Timer</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<DataTableContainer />} />
          <Route path="users" element={<DataTableContainer />} />
          <Route path="users/:id" element={<SingleUser />} />
          <Route path="timer" element={<Timer />} />
        </Routes>
      </div>
    );
  }
}

export default App;
