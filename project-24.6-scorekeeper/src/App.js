import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
 constructor() {
   super();

   this.state = {
     players: []
   }
 }
 onScoreUpdate = (playerIndex, scoreChange) => {
  this.setState({
    players: this.state.players.map((player, index) => {
      if (index === playerIndex) {
        return { ...player, score: player.score + scoreChange };
      }
      return player;
    })
  })
}
onPlayerAdd = playerName => {
  const newPlayer = {
    name: playerName,
    score: 0
  };
  this.setState({
    players: [...this.state.players, newPlayer]
  });
};

onPlayerDelete = id => {
  this.setState({
    players: this.state.players.filter((el, i) => {
      if (i !== id) return el;
    })
  });
};
 render() {
   return (
     <div className="App">
      <AddPlayer onPlayerAdd={this.onPlayerAdd}/>
       <PlayersList 
       players={this.state.players}
       onScoreUpdate={this.onScoreUpdate}
       onDelete={this.onPlayerDelete} />
     </div>
   );
 }
}

export default App;