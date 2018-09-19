// create your App component here
import React from 'react'

export default class App extends React.Component {
  state = {
    astronauts: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(r => r.json())
    .then(json => {
      this.setState({
        astronauts: json.people
      }, () => console.log(this.state))
    })
  }

  render() {
    return (
      <h2>People in space</h2>
    )
  }
}
