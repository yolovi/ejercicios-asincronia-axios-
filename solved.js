//SOLUCION SOFIA REPOSITORIO

// GET REQUEST

// let users = [];
// function getTodos() {
//   // https://jsonplaceholder.typicode.com/todos
//   axios
//     .get("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => {
//       showOutput(response);
//       users = response.data;
//     })
//     .catch((err) => console.error(err));
// }
// console.log(users);

// // ------------------------

// // Show output in browser
// function showOutput(res) {
//     document.getElementById("res").innerHTML = `
//       <div class="card card-body mb-4">
//         <h5>Status: ${res.status}</h5>
//       </div>
//       <div class="card mt-3">
//         <div class="card-header">
//           Data
//         </div>
//         <div class="card-body">
//           <pre>${JSON.stringify(res.data, null, 2)}</pre>
//         </div>
//       </div>
//     `;
//   }
  

  //---------------------------------------------------------

  // GET REQUEST
let users = [];

function getUsers() {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((resp) => {
      showUsers(resp);
      users = resp.data;
    })
    .catch((err) => console.error(err));
}

console.log(users);

// Show output in browser:
function showUsers(resp) {
  const usersContainer = document.getElementById("users-container");
  usersContainer.innerHTML = ""; // Limpiar el contenedor antes de mostrar los usuarios

  resp.data.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.innerText = user.name;
    usersContainer.appendChild(userDiv);
  });
}

// Event listener
document.getElementById("show-users").addEventListener("click", getUsers);
