import React from "react";

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
    <div>
      <ul>
      <li>
        <input type="checkbox"/>
        <label name="w" value="w">W</label>
      </li>
      <li>
        <input type="checkbox"/>
        <label name="u" value="u">U</label>
      </li>
      <li>
        <input type="checkbox"/>
        <label name="b" value="b">B</label>
      </li>
      <li>
        <input type="checkbox"/>
        <label name="r" value="r">R</label>
      </li>
      <li>
        <input type="checkbox"/>
        <label name="g" value="g">G</label>
      </li>
      </ul>
    </div>
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