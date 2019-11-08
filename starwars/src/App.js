import React, { useState, useEffect } from "react";
import "./App.css";

import mockup from "./mockup";

import Container from "./components/Container/Container";
import Loader from "./components/Loader/Loader";
import Card from "./components/Card/Card";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, setCharacter] = useState([]);
  const [cards, setCards] = useState();
  useEffect(_ => {
    (async _ => {
      const items = new Set(
        Array.from({ length: 20 }).map(
          _ => Math.floor(Math.random() * (10 - 1)) + 1
        )
      );

      const max = [];
      for (let k = 0; k < 5; ++k) {
        max.push([...items][k]);
      }
      console.log(max);

      let j = 0;
      for await (const i of max) {
        setCharacter(prevCharacter => [...prevCharacter, null]);
        fetch(`https://swapi.co/api/people/${i}/`)
          .then(response => response.json())
          .then(json =>
            setCharacter(prevCharacter => {
              prevCharacter.splice(j, 1, json);
              ++j;
              console.log(prevCharacter);
              return [...prevCharacter];
            })
          );
      }
    })();
  }, []);

  useEffect(
    _ => {
      setCards(
        character.map((character, i) =>
          character ? (
            <Card key={character.url} character={character}></Card>
          ) : (
            <Loader key={i}>Loading</Loader>
          )
        )
      );
    },
    [character]
  );

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>{cards}</Container>
    </div>
  );
};

export default App;
