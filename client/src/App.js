import React from 'react';
import axios from 'axios';
import Navbar from './components/Navbar'
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
        <Navbar />
        <header className="App-header">
          <h1>World Class Women</h1>
          <span>2019 World Cup Footballers by Search Interest</span>
        </header>
        {this.state.playerData.map(player=>{
          return(
            <div title='player-render' key={player.id} className='player-id'>
            <h2>{player.name}</h2>
            <p>{player.country}</p>
            <p>Times Searched: {player.searches}</p>
            </div>
          )

          })}
      </div>
    ); 
  };
}

export default App;
