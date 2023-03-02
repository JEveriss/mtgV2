import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./App.css";
import CardTemplate from "../components/CardTemplate";
import LoadingSpinner from "../components/Spinner";

function App() {
  const [cardContext, setCardContext] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.scryfall.com/cards/random?q=set%3Aneo"
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
    <div className="app">
      <Header />
      
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
