import React from "react";
import { SetSelectorStyle } from "./SetSelector.style";

function setClick() {
  console.log("Clicked the set button");
}
function SetSelector({ card }) {
  return (
    <SetSelectorStyle>
      <label>
        {card?.set_name}
        <input
          onClick={setClick}
          type="radio"
          name="set"
          value={card?.set_name}
        />
      </label>

      <label>
        Another Set
        <input type="radio" name="set" value={card?.set_name} />
      </label>

      <label>
        And another
        <input type="radio" name="set" value={card?.set_name} />
      </label>
    </SetSelectorStyle>
  );
}

export default SetSelector;
