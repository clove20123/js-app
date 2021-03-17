let repository = [
  { name: 'Charmander', height: 0.6, types: ['fire']},
  { name: 'Charmeleon', height: 1.1, types: ['fire']},
  { name: 'Charizard', height: 1.7, types: ['fire', 'flying']},
  ];

function printArrayDetails() {
  for (let i = 0; i < repository.length; i++) {
    if (repository[i].height > 1.2) {
      document.write("<p>" + repository[i].name, repository[i].height, repository[i].types + 'This is a big pokemon' + "</p>")
    }
    else {
      document.write("<p>" + repository[i].name, repository[i].height, repository[i].types + "</p>")
    }
  }
}

printArrayDetails();
