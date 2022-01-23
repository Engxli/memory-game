import React, { useState } from "react";

const CardItem = ({
  item,
  shake,
  fliped,
  increseTheClickCounter,
  itemClickedIs,
  index,
  clicked,
}) => {
  const [myShake, setMyShake] = useState(false);
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  return (
    <div
      onClick={() => {
        if (!fliped && clicked <= 1) {
          increseTheClickCounter();
          itemClickedIs(index);
        } else {
          setMyShake(true);
          delay(1000).then(() => setMyShake(false));
        }
      }}
      className="center"
    >
      <div className="scene scene--card">
        <div
          className={`card 
            ${(shake || myShake) && "shake"} 
            ${fliped && "is-flipped"} `}
        >
          <div className="card__face card__face--front">
            <img src="./images/box.png" alt="hidden card" />
          </div>
          <div className="card__face card__face--back">
            <img src={item.img} alt={item.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
