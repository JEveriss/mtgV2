import React from "react";
import { SetColourWrapper } from "./ColourSelector.style";
import w from "../../assets/1-White.svg";
import u from "../../assets/2-Blue.svg";
import b from "../../assets/3-Black.svg";
import r from "../../assets/4-Red.svg";
import g from "../../assets/5-Green.svg";

// const wubrg = [
//   { colour: "w" },
//   { colour: "u" },
//   { colour: "b" },
//   { colour: "r" },
//   { colour: "g" },
// ];

// console.log(wubrg);

function ColourSelector() {
  return (
    <SetColourWrapper>
      <li>
        <label for="w">
          <input type="checkbox" name="colourOption" value="w" id="w" />
          <img src={w} alt="white" />
        </label>
      </li>
      <li>
        <label for="u">
          <input type="checkbox" name="colourOption" value="u" id="u" />
          <img src={u} alt="blue" />
        </label>
      </li>
      <li>
        <label for="b">
          <input type="checkbox" name="colourOption" value="b" id="b" />
          <img src={b} alt="black" />
        </label>
      </li>
      <li>
        <label for="r">
          <input type="checkbox" name="colourOption" value="r" id="r" />
          <img src={r} alt="red" />
        </label>
      </li>
      <li>
        <label for="g">
          <input type="checkbox" name="colourOption" value="g" id="g" />
          <img src={g} alt="green" />
        </label>
      </li>
    </SetColourWrapper>
  );
}

export default ColourSelector;

// {wubrg.map((colour, i) => {
//   return (
//     <>
//       <li key={i}>
//         <input
//           type="checkbox"
//           name={colour}
//           value={colour}
//           id={i}/>
//       </li>
//       <label></label>
//     </>
//   );
// })}
