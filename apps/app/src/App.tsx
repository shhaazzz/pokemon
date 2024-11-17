import React, { useEffect, useState } from "react";
import { List } from "../../app/../../packages/ui";
import { ListItem } from "../../app/../../packages/ui";

interface Pokemon {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
      );
      const data = await response.json();
      setPokemonList(data.results);
      console.log(data.results); // This will log the list of Pokémon objects.
      return data.results;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <>
      <h1>Pokemon list:</h1>
      <List>
        {pokemonList.map((pokemon) => (
          <ListItem key={pokemon.name} name={pokemon.name} />
        ))}
      </List>
    </>
  );
};

export default App;
