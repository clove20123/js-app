//IIFE
let pokemonRepository = (function () {
  //defining pokemon list
  let pokemonList = [
    { name: 'Charmander', height: 0.6, types: ['fire']},
    { name: 'Charmeleon', height: 1.1, types: ['fire']},
    { name: 'Charizard', height: 1.7, types: ['fire', 'flying']},
    ];
    return {
      add: function(pokemon) {
        pokemonList.push(pokemon);
      },
      getAll: function() {
        return pokemonList;
      }
    };
  })();

//for each loop to display pokemonList in browser
pokemonRepository.getAll().forEach(function(pokemon) {
  let pokemonName = pokemon.name
  let pokemonHeight = pokemon.height
  let pokemonTypes = pokemon.types
// adding wow thats a big pokemon if height is greater than 1.2
  if(pokemonHeight > 1.2) {
    document.write(pokemonName + pokemonHeight + pokemonTypes + 'Wow that is a big pokemon <br>');
    }
    else {
      document.write(pokemonName + pokemonHeight + pokemonTypes + '<br>');
    }
});
