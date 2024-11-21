// src/store/pokemonSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  list: { name: string }[];
}

const initialState: PokemonState = {
  list: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList(state, action: PayloadAction<{ name: string }[]>) {
      state.list = action.payload;
    },
    removePokemon(state, action: PayloadAction<string>) {
      console.log(`Removing Pokémon: ${action.payload}`);
      state.list = state.list.filter(
        (pokemon) => pokemon.name !== action.payload
      );
    },
  },
});

export const { setPokemonList, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
