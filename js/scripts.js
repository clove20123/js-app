//IIFE
let pokemonRepository = (function () {
  //defining pokemon list
  let pokemonList = [
    { name: 'Charmander', height: 0.6, types: ['fire']},
    { name: 'Charmeleon', height: 1.1, types: ['fire']},
    { name: 'Charizard', height: 1.7, types: ['fire', 'flying']},
    ];
    function add(pokemon) {
        if (
          typeof pokemon === "object" &&
          "name" in pokemon &&
          "height" in pokemon &&
          "types" in pokemon
        ) {
          pokemonList.push(pokemon);
        } else {
          console.log("pokemon is not correct");
        }
      }
      function getAll() {
        return pokemonList;
      }
      function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
      }
      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
  })();

//for each loop to display pokemonList in browser
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
