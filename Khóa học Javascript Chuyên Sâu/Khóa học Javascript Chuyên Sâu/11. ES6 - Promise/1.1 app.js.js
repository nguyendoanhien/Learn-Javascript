console.log("start downloading pokemons");

const pokemonPromise = fetch(
  "http://pokeapi.co/api/v2/evolution-chain/?limit=120&offset=200"
);

console.log(typeof pokemonPromise);

console.log(pokemonPromise)

pokemonPromise
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err))

console.log("finish downloading pokemons");
