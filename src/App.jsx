import { useState } from 'react'
import './App.css'

import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
      name: "Bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Salamèche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Carapuce",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "Mew",
    },
  ];


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex-1)
  };

  const handleNext = () => {
    setPokemonIndex(pokemonIndex+1)
  };

  return (
    <>
      <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <div>
        { pokemonIndex > 0
        && (<button onClick={handlePrevious}>Précédent</button>) }

        { pokemonIndex < pokemonList.length - 1
        && (<button onClick={handleNext}>Suivant</button>) }

      </div>
    </>
  )
}

export default App
