import React from 'react'
import Results from '../components/Results';
import Bets from '../components/Bets';
import Placebet from '../components/Placebet';
import '../App.css';
import Bikescreen from '../components/Bikescreen';

const Game = () => {
  return (
    <div>
      <Results />
      <Bikescreen />
      <Placebet />
      <Bets />
    </div>
  )
}

export default Game;