import React from 'react'

  class App extends React.Component {
    constructor() {
      super()
      this.state = {

      }
    }

    componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
        .then(r => r.json())
        .then(console.log)
    }

    displayIt(data) {

    }

    render() {
      return (
        <div className='App'>

        </div>
      )
    }
  }

export default App;
