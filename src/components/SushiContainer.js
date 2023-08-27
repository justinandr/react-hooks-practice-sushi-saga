import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi }) {
  const [index, setIndex] = useState(0)

  const sushiComponents = sushis
  .slice(index, index + 4)
  .map((sushi) => (
    <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />
  ))

  function handleClickMore(){
    setIndex(index => index + 4)
  }

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton handleClickMore={handleClickMore} />
    </div>
  );
}

export default SushiContainer;
