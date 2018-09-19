import React from 'react';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      peopleInSpace: []
    }
  }

  render() {
    return (
      <ul>
        {this.state.peopleInSpace.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(json => this.setState({peopleInSpace: json.people}))
  }

}
