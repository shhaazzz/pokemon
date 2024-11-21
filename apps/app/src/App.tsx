import React, { useEffect, useState } from "react";
import { List } from "../../app/../../packages/ui";
import { ListItem } from "../../app/../../packages/ui";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonList, removePokemon } from "./store/pokemonSlice";
import { RootState } from "./store/index";

interface Pokemon {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state.pokemon.list);
  // const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
      );
      const data = await response.json();
      dispatch(setPokemonList(data.results));
      return data.results;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const handleRemove = (pokemon: string) => {
    dispatch(removePokemon(pokemon));
  };

  return (
    <>
      <h1>Pokemon list:</h1>
      <List>
        {pokemonList.map((pokemon: any) => (
          <>
            <ListItem
              key={pokemon.name}
              name={pokemon.name}
              onRemove={() => handleRemove(pokemon.name)}
            />
          </>
        ))}
      </List>
    </>
  );
};

export default App;
