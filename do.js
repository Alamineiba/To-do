const ajout = document.getElementById('ajouter');
ajout.addEventListener('click', function() {
    // Your code to handle the click event goes here
    const categorie = document.getElementById('selection').value;
    const titre = document.querySelector('input[placeholder="Titre"]').value;
    const date = document.querySelector('input[type="date"]').value;
    const description = document.querySelector('input[placeholder="Description"]').value;
    const statut = document.getElementById('types').value;
  
    // You can use the values from the input fields to create a new task object
    const nouvelleTache = {
      categorie,
      titre,
      date,
      description,
      statut
    };
  
    // Your code to add the new task to your task list goes here
    console.log(nouvelleTache);
  });
