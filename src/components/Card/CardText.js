import React from "react";
import { CardTextWrapper } from "./Card.style";

function CardText({ card }) {

  // console.log(card?.games);
  // console.log(card);

  return (
    <CardTextWrapper>
      <p>{card?.type_line}</p>
      {/* <p>{card?.colors}</p> */}
      <p>{card?.mana_cost}</p>
      <p>{card?.set_name}</p>
      <p>{card?.artist}</p>
      <p>{card?.released_at}</p>
      {card?.games && 
      <ul>
        {card?.games.map((v, k) => {
          return (
            <li key={k}>
              {v}
            </li>
          );
        })}
      </ul>
      }
      
    </CardTextWrapper>
  );
}

export default CardText;
