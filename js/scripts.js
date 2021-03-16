let repository = [
  { name: Charmander, height: 0.6, types: ['fire']},
  { name: Charmeleon, height: 1.1, types: ['fire']},
  { name: Charizard, height: 1.7, types: ['fire', 'flying']},
  ];

  function printArrayDetails() {
    for (let i = 0; i < repository.length; i++) {
      document.write("<p>" + repository[i].name + "</p>")
    }
  }

  printArrayDetails();
  printArrayDetails();
