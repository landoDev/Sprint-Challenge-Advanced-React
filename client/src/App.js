import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = []
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(res =>{
      console.log(res.data)
    })
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>World Class Women</h1>
          <span>World Cup Footballers by Search Interest</span>
        </header>
      </div>
    ); 
  };
}

export default App;
