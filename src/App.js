// create your App component here
import React from 'react'

export default class App extends React.Component{

  constructor(){
    super()
    this.state ={
      spacePeople: []
    }
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(r => r.json())
    .then(data => {
      this.setState({
        spacePeople: data.people
      })
    })
  }

  render(){
    console.log('We have liftoff 🚀')
    // debugger
    return(
      <div>
        Welcome aboard. Here's who's in space now:
        <span>
          {this.state.spacePeople.map((person, id) => <p key={id}>{person.name}</p>)}
        </span>
      </div>
    )
  }

}
