import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      playerData: []
    }
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(res =>{
      console.log(res.data)
      this.setState({
        playerData: res.data
      })
    })
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>World Class Women</h1>
          <span>World Cup Footballers by Search Interest</span>
        </header>
        {this.state.playerData.map(player=>{
          return(
            <div key={player.id} className='player-id'>
            <h2>{player.name}</h2>
            <p>{player.country}</p>
            <p>{player.searches}</p>
            </div>
          )

          })}
      </div>
    ); 
  };
}

export default App;
