import React, { useState } from "react";
import CardImage from "../Card/CardImage";
import CardTitle from "../Card/CardTitle";
import { SingleSidedCard } from "../Body/Body.style";
import CardArtModal from "../Body/CardArtModal";
// import { ComponentWrapper } from "../ComponentWrapper/ComponentWrapper.style";
// import DataContext from "../../context/DataContext";

function CardTemplate({fetchData, cardData}) {
  // const { data: cardData } = useContext(DataContext);

  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={fetchData}>New Card</button>
      
      <CardTitle title={cardData?.name} />
      <SingleSidedCard>
      
        <div className="card-block">
          <CardImage card={cardData} />
          <div>
          
            <button onClick={() => setShow(true)}>Enlarge Art</button>
            
            <p>{cardData?.type_line}</p>
            <p>{cardData?.mana_cost}</p>
            <p>{cardData?.set_name}</p>
            <p>{cardData?.artist}</p>
            <p>{cardData?.released_at}</p>
            
            <CardArtModal
              modalCard={cardData}
              onClose={() => setShow(false)}
              show={show}
            />
            
            {cardData?.games && (
              <ul>
                {cardData?.games.map((v, k) => {
                  return <li key={k}>{v}</li>;
                })}
              </ul>
            )}
          </div>
        </div>
      </SingleSidedCard>
    </div>
  );
}
export default CardTemplate;

// if a card is "type_line": "Plane..." rotate 90 degrees to the right
// the cards colours should be represented in the background
// loading spinner
