// Fetch nous permet d'aller chercher des données depuis un server
// La methode fetch nous retourne une promesse

// La methode json() retourne elle meme une promesse
fetch('http://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
// .then(data => console.log(data))

// Même code
fetch('http://jsonplaceholder.typicode.com/users')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  // console.log(data);
});


// Utilisation avec les fonctions asynchrones
// const getUser = async () => {
//   // Attends de recuperer les données et de les parsées
//   let data = await fetch('http://jsonplaceholder.typicode.com/user')
//     .then(response => response.json())
//   console.log(data);
// }
// getUser();

const getUsers = async () => {
  // Attends de recuperer les données
  let response = await fetch('http://jsonplaceholder.typicode.com/users');
  // Attends de les parsées
  let data = await response.json();
  // Affiche la reponse
  console.log(data);
}
// getUsers();

// Cas d'une URL erronée (fausse URL)
const getUser = async () => {
  let response = await fetch('http://jsonplaceholder.typicode.com/usersAZERY');
  
  if(response.ok) {
    let data = response.json();
    console.log(data);
  } else {
    const res = document.querySelector('.response');
    res.innerHTML += `
      <p>Retour du server: <b>${response.status}</b></p>
    `;
  }
}
// getUser();


// Comment POSTER des données
const insertPosts = async (data) => {
  // Attendre la resolution de cette promesse
  let response = await fetch('http://jsonplaceholder.typicode.com/posts', {
    // Avec quelle methode l'on souhaite envoyer les données
    method: 'POST',
    // Comment on envoie les données
    headers: { 'Content-Type': 'application/json' },
    // Soit une chaine javascript ou un objet formData
    body: JSON.stringify(data)
  });

  // Recuperer les infos
  let resData = await response.json();
  const res = document.querySelector('.response');
  res.innerHTML += `
    <p> ${resData} </p>
  `;

  console.log(resData);
}

insertPosts({
  name: 'Jonh',
  age: 22
});