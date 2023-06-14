// Ejercicios Asincronía & Axios -->

/* <!-- Obtener y mostrar usuarios utilizando la API de JSONPlaceholder.
En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. 
Leyendo su documentación, deberás hacer lo siguiente:

   - Imprimir por consola la lista (array) de usuarios.
   - Imprimir por consola solo el nombre de los usuarios.
   - Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API. Este proceso debe realizarse fuera de cualquier función.

!!!! Nota: Después de realizar el console.log de la variable "users", es normal que aparezca vacía debido a que JavaScript no es bloqueante y el console.log se ejecuta antes de que la variable sea llenada con la información de la solicitud. */
//Estructura:
// archivo JS

// variable global
// petición axios (aquí hago la petición y dentro relleno la variable creada anteriormente)

/*
    - Crear una función llamada "showUsers"que muestre por consola la variable global "users" que has creado.
    - Crea un botón que, cuando lo cliques, ejecute la función que habías creado.
    - Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM ( en el HTML).

    Recuerda que para estos ejercicios deberás utilizar Axios.  --> */

//-------------------------------------------------------------------------------------------------------

// Imprimir por consola la lista (array) de usuarios.

function printListUsers() {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

printListUsers();

// - Imprimir por consola solo el nombre de los usuarios.

function printNameUsers() {
  axios
    .get("https://jsonplaceholder.typicode.com/users")

    .then((res) =>
      res.data.forEach((user) => {
        console.log(user.name);
        // nameUser.push(user.name)
      })
    )
    .catch((err) => console.error(err));
}

printNameUsers();

// -----------------------------------------------------------------------------------------------------

// - Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API. Este proceso debe realizarse fuera de cualquier función.

// GET REQUEST

let users = [];

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((resp) => {
    showUsers(resp);
    users = resp.data;
    // console.log(users)
  })
  .catch((err) => console.error(err));

console.log(users);

// - Crear una función llamada "showUsers"que muestre por consola la variable global "users" que has creado.

// Console.log Users:

// function showUsers(){
//     setTimeout(() => {
//         console.log(users);
//       }, "1000")
//       document.querySelector(".msg").innerHTML = users
// }

// showUsers()

// ---------------------------------------------------------------------------

// - Crea un botón que, cuando lo cliques, ejecute la función que habías creado.
// - Ahora en vez de mostrar los usuarios por consola muestra el NOMBRE de cada uno en el DOM ( en el HTML).

// Show output in browser: 
//FIXME:    
    //1. cuando  le doy al boton me sale undifined pero si refresco la pagina me saca el array de usuarios.
    //2. solo pide pintar los nombres, no todo el array

function showUsers(resp) {
  document.getElementById(
    "res-div"
  ).innerHTML = `<div class="card">
  <h5>Status: ${resp.status}</h5>
</div>
<div class="card">
  <div class="card-header">
    Data
  </div>
  <div class="card-body">
    <pre>${JSON.stringify(resp.data, null, 2)}</pre>   
  </div>
</div>
`;
}

//Event listener
document.getElementById("show-users").addEventListener("click", showUsers);
