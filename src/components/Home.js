import React, { useState } from "react";
import Game from "./Game";
import theData from "../data/data.json";

const Home = () => {
  // this is the data being shuffled
  const [data, setData] = useState(
    theData
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  );

  // the game score and turn
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(1);

  // functions needed
  const playerOneS = () => setPlayerOneScore(playerOneScore + 1);
  const playerTwoS = () => setPlayerTwoScore(playerTwoScore + 1);
  const chnageTurn = () =>
    playerTurn === 1 ? setPlayerTurn(2) : setPlayerTurn(1);

  return (
    <div className="screen">
      <div className="home">
        <h1>The Memory Game</h1>
        <h4>Player 1 score: {playerOneScore}</h4>
        <h4>Player 2 score: {playerTwoScore}</h4>
        <h4>IT IS PLAYER {playerTurn} TURN</h4>

        <button onClick={() => window.location.reload()}>Restart</button>
        <Game
          data={data}
          playerOneS={playerOneS}
          playerTwoS={playerTwoS}
          chnageTurn={chnageTurn}
          playerTurn={playerTurn}
        />
      </div>
    </div>
  );
};

export default Home;
