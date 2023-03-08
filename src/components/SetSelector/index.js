import React from "react";
import { SetSelectorWrapper } from "./SetSelector.style";

function SetSelector({ setName, setSetName }) {
  const onSetChange = (e) => setSetName(e.target.value);

  // const sets = [{id: 1, set: "vow"}, {id: 2, set: "mid"}, {id: 3, set: "neo"},]

  return (
    <SetSelectorWrapper>
      <li>
        <input
          type="radio"
          name="setOption"
          value="mid"
          id="mid"
          checked={setName === "mid"}
          onChange={onSetChange}
        />
        <label htmlFor="mid">Mid</label>
      </li>

      <li>
        <input
          type="radio"
          name="setOption"
          value="khm"
          id="khm"
          checked={setName === "khm"}
          onChange={onSetChange}
        />
        <label htmlFor="khm">khm</label>
      </li>
      
      <li>
        <input
          type="radio"
          name="setOption"
          value="vow"
          id="vow"
          checked={setName === "vow"}
          onChange={onSetChange}
        />
        <label htmlFor="vow">Vow</label>
      </li>
      <p>Current set is {setName}</p>
    </SetSelectorWrapper>
  );
}

export default SetSelector;
