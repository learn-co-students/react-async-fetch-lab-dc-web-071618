import React, { Component } from "react";
import ExampleComponent from "./components/ExampleComponent";

export default class App extends Component {
  state = {
    peopleInSpace: []
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        });
      });
  }

  render() {
    return <div>{this.state.peopleInSpace.map(person => person.name)}</div>;
  }
}
