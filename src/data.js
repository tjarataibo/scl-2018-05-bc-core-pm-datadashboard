
//Función para users
// async function fetchAsync() {
//   //Se hace una petición con let response = await fetch ('URL');
//   const responseOne = await fetch('https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json');
//   //Se manda una respuesta como let data = await response.json();
//   const users = await responseOne.json();

//   return users;
// }

// fetchAsync()
//   //Cuando se cumple
//   .then(users => console.log(users))
//   .then(usersJSON => {
//     users = usersJSON;
//     allReady();
//   })
//   //Cuando no se cumple
//   .catch(error => console.log(error))


// //Función para progress
// async function fetchAsyncTwo() {
//   const responseTwo = await fetch('https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json');
//   const progress = await responseTwo.json();

//   return progress;
// }


// fetchAsyncTwo()
//   //Cuando se cumple
//   .then(progress => console.log(progress))
//   .then(progressJSON => {
//     progress = progressJSON;
//     allReady();
//   })
//   //Cuando no se cumple
//   .catch(error => console.log(error))


// //Función para cohorts
// async function fetchAsyncThree() {
//   const responseThree = await fetch('https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts.json');
//   const cohorts = await responseThree.json();

//   return cohorts;
// }


// fetchAsyncThree()
// //Cuando se cumple
// .then(cohorts => console.log(cohorts))
// .then(cohortsJSON => {
//   cohorts = cohortsJSON;
//   allReady();//se llama en todas las respuestas por que no sabemos cual llegara primero y asi nos aseguramos si se ejecutan
// })
// //Cuando no se cumple
// .catch(error => console.log(error))


// function allReady() {
//   //Asegura que users, progress y cohorts tengan datos. Si no es así, no se ejecutará
//   if (users && progress && cohorts) {
//     const cohort = cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw'); //De los users, podemos ver que está sólo la sede de Lima
//     const courses = Object.keys(cohort.coursesIndex); 
//     usersStats = window.computeUsersStats(users, progress, courses);//recibe users, progress y el listado de los cursos del cohort
//   }
// }






let users = null;
let progress = null;
let cohorts = null;
let usersStats = null;

fetch('https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json')
  .then(response => response.json())
  .then(usersJSON => {
    users = usersJSON;
    allReady();
  })
  .catch(error => {
    console.error("No es posible obtener usuarios"); //Error
    console.error("Error > " + error.stack); //Si falla el código, muestra dónde está el error
  });
fetch('https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
  .then(response => response.json())
  .then(progressJSON => {
    progress = progressJSON;
    allReady();
  })
  .catch(error => {
    console.error("No es posible obtener el progreso");
    console.error("Error > " + error.stack);
  });

fetch('https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts.json')
  .then(response => response.json())
  .then(cohortsJSON => {
    cohorts = cohortsJSON;
    allReady();
  })
  .catch(error => {
    console.error("No es posible obtener cohorts");
    console.error("Error > " + error.stack);
  });


function allReady() {
  //Asegura que users, progress y cohorts tengan datos. Si no es así, no se ejecutará
  if (users && progress && cohorts) {
    const cohort = cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw'); //De los users, podemos ver que está sólo la sede de Lima
    const courses = Object.keys(cohort.coursesIndex); 
    usersStats = window.computeUsersStats(users, progress, courses);//recibe users, progress y el listado de los cursos del cohort
  }
}






