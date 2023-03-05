import React from "react";
import { SetSelectorStyle } from "./SetSelector.style";

function SetSelector({setName, setSetName}) {


  const onSetChange = (e) => setSetName(e.target.value);
  console.log(onSetChange);
  return (
    <SetSelectorStyle >
      <input
        type="radio"
        name="set"
        value="mid"
        id="mid"
        checked={setName === "mid"}
        onChange={onSetChange}
      />
      <label htmlFor="mid">Mid</label>
      <input
        type="radio"
        name="set"
        value="neo"
        id="neo"
        checked={setName === "neo"}
        onChange={onSetChange}
      />
      <label htmlFor="neo">Neo</label>

      <input
        type="radio"
        name="set"
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

// function setClick() {
//   console.log(sets);
// }
// function SetSelector({ card }) {
//   return (
//     <SetSelectorStyle>
//       {sets.map((set) => {
//         return (
//           <label>
//             {Object.values(set)}
//             <input
//               onClick={setClick}
//               id="1"
//               type="radio"
//               name="set"
//               value={card?.set_name}
//             />
//           </label>
//         );
//       })}
//     </SetSelectorStyle>
//   );
// }

// export default SetSelector;
