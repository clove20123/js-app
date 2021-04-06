//IIFE
let pokemonRepository = (function () {
  let modalContainer = document.querySelector('#modal-container');
  //defining pokemon list
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function showModal(pokemon) {

    modalContainer.innerHTML ='';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';

    //Display name of pokemon in modal
    let pokemonName = document.createElement('h1');
    pokemonName.innerText = pokemon.name;

    //display the height of the pokemon in modal
    let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = pokemon.height

    //display the image of the pokemon in the modal
    let containerImg = document.querySelector('#image-container');
    let pokemonImg = document.createElement('img');
    pokemonImg.src = pokemon.imageUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(pokemonName);
    modal.appendChild(pokemonHeight);
    modal.appendChild(pokemonImg);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');

  }

  //Hide Modal
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  //close the modal with escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  //close the modal when user clicks outside of the modal
  modalContainer.addEventListener('click', (e) => {
   let target = e.target;
   if (target === modalContainer) {
     hideModal();
   }
 });

    function add(pokemon) {
        if (
          typeof pokemon === "object" &&
          "name" in pokemon
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
        button.addEventListener('click', function() {
          showDetails(pokemon);
        });
      }

      function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }

      function showDetails(item) {
        loadDetails(item).then(function () {
          showModal(pokemon);
        });
      }

      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetail: loadDetails,
        showDetails: showDetails
    };
  })();

//for each loop to display pokemonList in browser
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
