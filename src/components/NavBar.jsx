function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {

const handlePrevious = () => {
	if (pokemonIndex > 0) {
		setPokemonIndex(pokemonIndex - 1);
	}
};

const handleNext = () => {
	if (pokemonIndex < pokemonList.length - 1) {
		setPokemonIndex(pokemonIndex + 1);
	}
};
    return (
		<div>
			{pokemonIndex > 0 && (
				<button onClick={handlePrevious}>Précédent</button>
			)}
			{pokemonIndex < pokemonList.length - 1 && (
				<button onClick={handleNext}>Suivant</button>
			)}
		</div>
			);
};

export default NavBar;