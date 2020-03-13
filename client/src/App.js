import React from 'react';
import axios from 'axios';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import Navbar from './components/Navbar'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      playerData: [],
      graphData: []
    }
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(res =>{
      console.log(res.data)
      this.setState({
        playerData: res.data,
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
        <BarChart width={1500} height={250} data={this.state.playerData} barCategoryGap='25%'>
          <Bar type="monotone" dataKey="searches" stroke="#8884d8"  />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name"/>
          <YAxis dataKey="searches" />
        </BarChart>

        {/* Plan on breaking the Player Cards into another component if I come back to this */}
        {this.state.playerData.map(player=>{
          return(
            <div title='player-render' key={player.id} className='player-id'>
            <span>{player.id + 1}</span>
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
