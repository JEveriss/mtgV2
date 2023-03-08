import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./App.css";
import CardTemplate from "../components/CardTemplate";
import LoadingSpinner from "../components/Spinner";
import SetSelector from "../components/SetSelector";
import ColourSelector from "../components/ColourSelector";

function App() {
  const [setName, setSetName] = useState();
  const [cardContext, setCardContext] = useState('khm');
  
  const setColour = "b"

  const onSetChange = (e) => setSetName(e.target.value);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.scryfall.com/cards/random?q=c%3A${setColour}+set%3A${setName}`
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

  console.log(setName);

  return (
    <div className="app">

      <SetSelector
        setName={setName}
        setChange={onSetChange}
        setSetName={setSetName}
      />
      
      <ColourSelector/>

      {cardContext ? (
        cardContext.card_faces ? (
          cardContext?.card_faces.map((cardFace) => {
            return <CardTemplate fetchData={fetchData} cardData={cardFace} />;
          })
        ) : (
          <CardTemplate fetchData={fetchData} cardData={cardContext} />
        )
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default App;
