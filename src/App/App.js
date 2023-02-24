import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "./App.css";
import Body from "../components/Body";
import DataContext from "../context/DataContext";

function App() {
  const [cardContext, setCardContext] = useState(null);

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
    <div className="app">
      <DataContext.Provider value={{ data: cardContext }}>
        <Header />
        <Body card={cardContext} />
      </DataContext.Provider>
    </div>
  );
}

export default App;
