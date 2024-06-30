import PropTypes from "prop-types";

function NavBar({setPokemonIndex, pokemonList }) {

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => { if (pokemon.name === "Pikachu") {
            alert("Pika Pikachu !!!");
          }
            setPokemonIndex(index)}}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;