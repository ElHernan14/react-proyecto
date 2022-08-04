import './App.css';
import { useState, useEffect } from "react"
import Search from './views/Search';
import Routes from "./routes";
import PokemonProvider from './context/pokemons/Provider';

const AppSearch = () => <Search />

function App() {
  return(
    <PokemonProvider>
    <Routes />
  </PokemonProvider> 
  )
}

export default App;
