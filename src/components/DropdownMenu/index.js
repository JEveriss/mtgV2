import React, { useState } from "react";

function DropDownMenu(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleOpen}>dorpdwn</button>
      {open ? <div>oped</div> : <div>close</div>}
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            {props.map((key, val, i) => {
              return <div></div>;
            })}
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default DropDownMenu;
