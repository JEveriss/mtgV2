import React from "react";
import { SetSelectorStyle } from "./SetSelector.style";

function SetSelector({ setName, setSetName }) {
  const onSetChange = (e) => setSetName(e.target.value);
  
  // const sets = [{id: 1, set: "vow"}, {id: 2, set: "mid"}, {id: 3, set: "neo"},]

  return (
    <SetSelectorStyle>
      <input
        type="radio"
        name="setOption"
        value="mid"
        id="mid"
        checked={setName === "mid"}
        onChange={onSetChange}
      />
      <label htmlFor="mid">Mid</label>
      <input
        type="radio"
        name="setOption"
        value="neo"
        id="neo"
        checked={setName === "neo"}
        onChange={onSetChange}
      />
      <label htmlFor="neo">Neo</label>

      <input
        type="radio"
        name="setOption"
        value="vow"
        id="vow"
        checked={setName === "vow"}
        onChange={onSetChange}
      />
      <label htmlFor="vow">Vow</label>

      <p>Current set is {setName}</p>
    </SetSelectorStyle>
  );
}

export default SetSelector;
