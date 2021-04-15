//IIFE
let pokemonRepository = (function () {
  //defining pokemon list
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


    function add(item) {
        if (
          typeof item === "object" &&
          'name' in item &&
          'detailsUrl' in item
        ) {
          pokemonList.push(item);
        }
      }
      function getAll() {
        return pokemonList;
      }
      function addListItem(pokemon) {
        let container = document.querySelector('.list-group');
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.classList.add('list-group-item-action');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn');
        button.classList.add('btn-block');
        button.setAttribute('data-target', '#pokemonModal');
        button.setAttribute('data-toggle', 'modal');
        listItem.appendChild(button);
        container.appendChild(listItem);
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

      function showDetails(pokemon) {

        loadDetails(pokemon).then(function () {
          let modalBody = $('.modal-body');
          let modalTitle = $('.modal-title');
          let modalHeader = $('.modal-header');

          modalTitle.empty();
          modalBody.empty();

          let pokemonName = $('<h1>' + pokemon.name + '</h1>');
          let pokemonImage = $('<img class="modal-img" style="width:50%">');
          pokemonImage.attr('src', pokemon.imageURL);
          let pokemonHeight = $('<p>' + 'Height' + pokemon.height + '</p>');

          modalTitle.append(pokemonName);
          modalBody.append(pokemonImage);
          modalBody.append(pokemonHeight);
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
