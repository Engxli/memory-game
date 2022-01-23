import React from "react";
import CardItem from "./CardItem";

const CardList = ({
  data,
  shake,
  fliped,
  increseTheClickCounter,
  itemClickedIs,
  setModelShow,
  clicked,
}) => {
  return (
    <div className="cards-contaner">
      {data.map((item, index) => (
        <CardItem
          shake={shake[index]}
          fliped={fliped[index]}
          item={item}
          key={index}
          increseTheClickCounter={increseTheClickCounter}
          itemClickedIs={itemClickedIs}
          index={index}
          setModelShow={setModelShow}
          clicked={clicked}
        />
      ))}
    </div>
  );
};

export default CardList;
