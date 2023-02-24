import React, { useEffect, useState } from "react";
import CardImage from "../Card/CardImage";
import CardTitle from "../Card/CardTitle";
import { DoubleSidedCard, SingleSidedCard } from "./Body.style";
import CardArtModal from "./CardArtModal";


function Body() {
  const [show, setShow] = useState(false);
  const [card, setCardContext] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.scryfall.com/cards/random?q=set%3Amid"
      );
      const fetchedData = await res.json();
      setCardContext(fetchedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <>
      {card?.card_faces ? (
        <>
          {card?.card_faces.map((cardface, id) => {
            return (
              <>
                <CardTitle title={cardface?.name} />
                <DoubleSidedCard>
                  <div className="card-block">
                    <CardImage key={id} card={cardface} />
                    <div>
                    
                    
                    
                      <button onClick={() => setShow(true)}>Bigger</button>
                      
                      <CardArtModal
                        modalCard={cardface}
                        onClose={() => setShow(false)}
                        show={show}
                      />
                      
                      
                      
                      <p>{cardface?.type_line}</p>
                      <p>{card?.mana_cost}</p>
                      <p>{card?.set_name}</p>
                      <p>{cardface?.artist}</p>
                      <p>{card?.released_at}</p>
                      {card?.games && (
                        <ul>
                          {card?.games.map((v, k) => {
                            return <li key={k}>{v}</li>;
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                </DoubleSidedCard>
              </>
            );
          })}
        </>
      ) : (
        <>
          <CardTitle title={card?.name} />
          <SingleSidedCard>
            <div className="card-block">
              <CardImage card={card} />
              <div>
                <button onClick={() => setShow(true)}>Bigger</button>
                <CardArtModal
                  modalCard={card}
                  onClose={() => setShow(false)}
                  show={show}
                />
                <p>{card?.type_line}</p>
                <p>{card?.mana_cost}</p>
                <p>{card?.set_name}</p>
                <p>{card?.artist}</p>
                <p>{card?.released_at}</p>
                {card?.games && (
                  <ul>
                    {card?.games.map((v, k) => {
                      return <li key={k}>{v}</li>;
                    })}
                  </ul>
                )}
              </div>
            </div>
          </SingleSidedCard>
        </>
      )}
    </>
  );
}

export default Body;

// if a card is "type_line": "Plane..." rotate 90 degrees to the right
// the cards colours should be represented in the background
// loading spinner
