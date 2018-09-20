import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      astronauts: []
    };
  }

  getAllAstronauts = () => {
    fetch("http://api.open-notify.org/astros.json")
      .then(r => r.json())
      .then(json => {
        this.setState({
          astronauts: json.people
        });
      });
  };

  render() {
    return this.state.astronauts.map(astro => {
      return <div className="ui card">{astro.name}</div>;
    });
  }

  componentDidMount() {
    this.getAllAstronauts();
  }
}

export default App;
