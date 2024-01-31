  function ajouterTacheAuTableau(tache) {
    // Sélectionnez le corps du tableau dans lequel vous souhaitez ajouter la nouvelle tâche
    var tbody = document.querySelector('.table tbody') || document.querySelector('.table');
  
    // Créez une nouvelle ligne de tableau
    var newRow = tbody.insertRow();
  
    // Ajoutez les cellules avec les données de la tâche
    newRow.innerHTML = `
      <th scope="row">${tbody.children.length}</th>
      <td>${tache.date}</td>
      <td>${tache.titre}</td>
      <td>${tache.categorie}</td>
      <td><button onclick="supprimerTache(this)">Supprimer</button></td>
    `;
  }
  
  
  const ajout = document.getElementById('ajouter');
ajout.addEventListener('click', function() {
  const categorie = document.getElementById('selection').value;
  const titre = document.querySelector('input[placeholder="Titre"]').value;
  const date = document.querySelector('input[type="date"]').value;
  const description = document.querySelector('input[placeholder="Description"]').value;
  const statut = document.getElementById('types').value;

  const nouvelleTache = {
    categorie,
    titre,
    date,
    description,
    statut
  };

  ajouterTacheAuTableau(nouvelleTache);

  // Réinitialisez les champs du formulaire si nécessaire
  document.querySelector('input[placeholder="Titre"]').value = '';
  document.querySelector('input[type="date"]').value = '';
  document.querySelector('input[placeholder="Description"]').value = '';
  document.getElementById('types').value = '';

  console.log(nouvelleTache);
});

// Fonction pour supprimer une tâche en fonction du bouton de suppression cliqué
function supprimerTache(boutonSupprimer) {
    var row = boutonSupprimer.closest('tr'); // Trouve la ligne parente (tr) du bouton
    row.remove(); // Supprime la ligne du tableau
  }
  
