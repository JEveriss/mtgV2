import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./App.css";
import CardTemplate from "../components/CardTemplate";
import LoadingSpinner from "../components/Spinner";
import SetSelector from "../components/SetSelector";

function App() {
  const [setName, setSetName] = useState("neo");
  const [cardContext, setCardContext] = useState(null);

  const onSetChange = (e) => setSetName(e.target.value);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.scryfall.com/cards/random?q=set%3A${setName}`
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
      <Header />

      <SetSelector
        setName={setName}
        setChange={onSetChange}
        setSetName={setSetName}
      />

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
