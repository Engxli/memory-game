import React, { useState } from "react";
import CardList from "./CardList";

const Game = ({ data, playerOneS, playerTwoS, chnageTurn, playerTurn }) => {
  // adding a delay function
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  // tracking clicking
  const [clicked, setClicked] = useState(0);
  const [itemsClick, setItemsClick] = useState([]);

  // for styling
  const [shake, setShake] = useState(data.map((item) => false));
  const [fliped, setFliped] = useState(data.map((item) => false));
  const [modelShow, setModelShow] = useState(false);

  // needed functions
  const increseTheClickCounter = () => setClicked(clicked + 1);
  const itemClickedIs = (index) => {
    setItemsClick([...itemsClick, index]);
    let flippedCopy = [...fliped];
    flippedCopy[index] = true;
    setFliped(flippedCopy);
  };

  // game concept
  // check the clicked var if 2 then reset the clicked counter + do the below

  delay(1000).then(() => {
    if (clicked >= 2) {
      setClicked(0);
      // should change player turn here if the items selected was wrong
      // check if the clicked items are the same
      if (itemsClick.length >= 1) {
        if (data[itemsClick[0]].name === data[itemsClick[1]].name) {
          // they are the same
          // player turn should not chnage
          playerTurn === 1 ? playerOneS() : playerTwoS();
          // array should be cleared
          setItemsClick([]);
        } else {
          // player turn should change
          // style should shake
          let shakeCopy = [...shake];
          itemsClick.forEach((item) => (shakeCopy[item] = true));
          setShake(shakeCopy);
          // filp should reset only for those two
          let flippedCopy = [...fliped];
          itemsClick.forEach((item) => (flippedCopy[item] = false));
          setFliped(flippedCopy);
          // reseting shake

          delay(1000).then(() => {
            itemsClick.forEach((item) => (shakeCopy[item] = false));
            setShake(shakeCopy);
          });
          chnageTurn();
          // clear the array of itemsclicked
          setItemsClick([]);
        }
      }
    }
  });

  return (
    <div>
      <CardList
        shake={shake}
        fliped={fliped}
        data={data}
        increseTheClickCounter={increseTheClickCounter}
        itemClickedIs={itemClickedIs}
        setModelShow={setModelShow}
        clicked={clicked}
      />
    </div>
  );
};

export default Game;
