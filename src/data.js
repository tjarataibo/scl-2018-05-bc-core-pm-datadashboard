/*function users() {
    const urlUsers = "https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json"
   
    fetch(urlUsers)
    .then(response => response.json())
    .then(data => { 
      console.log(data);
    })
}

const searchUsers = document.getElementsByClassName("searchByNAme");
const urlUsers = "https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json"
fetch (urlUsers).then(
    (response)=>{
        if(response.ok){
            return response.json();               
        }
    }
).then((responseJsons)=>{ //Arreglo de respuestas en json
        /*s
         * Código que ocupa los jsons...
         
        //console.log(urlUsers);
    })

    const urlProgress ="https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json" 
    fetch (urlProgress).then(
        (response)=>{
            if(response.ok){
                return response.json();                
            }
        }
    ).then((responseJsons)=>{ //Arreglo de respuestas en json
            /*
             * Código que ocupa los jsons...
             
            console.log(urlProgress);
        })    

        const urlCohorts ="https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts.json"
        fetch (urlCohorts).then(
            (response)=>{
                if(response.ok){
                    return response.json();                
                }
            }
        ).then((responseJsons)=>{ //Arreglo de respuestas en json
                /*
                 * Código que ocupa los jsons...
                 
                console.log(urlCohorts);
            })  */

// window.onload

// //Función para users
// async function fetchAsync() {
//     //Se hace una petición con let response = await fetch ('URL');

//     const responseOne = await fetch('https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json');
//     //Se manda una respuesta como let data = await response.json();
//     const users = await responseOne.json();

//     return users;
// }

//   fetchAsync()
//     //Cuando se cumple
//     .then(users => console.log(users))
//     //Cuando no se cumple
//     .catch(error => console.log(error))


// //Función para progress
// async function fetchAsyncTwo() {
//     const responseTwo = await fetch('https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json');
//     const progress = await responseTwo.json();

//     return progress;
// }


//  fetchAsyncTwo()
//     //Cuando se cumple
//     .then(progress => console.log(progress))
//     //Cuando no se cumple
//     .catch(error => console.log(error))


// //Función para cohorts
// async function fetchAsyncThree() {
//     const responseThree = await fetch('https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts.json');
//     const cohorts = await responseThree.json();

//     return cohorts;
// }


// fetchAsyncThree()
// //Cuando se cumple
// .then(cohorts => console.log(cohorts))
// //Cuando no se cumple

// .catch(error => console.log(error))


// //Llamar a las funciones con botones

// document.getElementById("Alumnas").addEventListener("click", fetchAsync() )





//document.getElementsByClassName("botonM").addEventListener("click", traer());
//var contenido = document.querySelector("#contenido")



function traer() {

    fetch('../../data/cohorts/lim-2018-03-pre-core-pw/users.json')
        .then(respuesta => respuesta.json())
        .then(datos => {
            //console.log(datos)
            tabla(datos)
        })

function tabla(datos) {
    //console.log(datos)
    document.getElementById("contenido").innerHTML = ""
    for (let valor of datos) {
        console.log(valor)
        document.getElementById("contenido").innerHTML += `
        <tr>
        <th scope="row">${valor.id}</th>
        <td>${valor.name}</td>
        <td>${valor.signupCohort}</td>
        <td>${valor.timezone}</td>
      </tr>
        `
    }

}
}

function traercohort() {

    fetch('../../data/cohorts.json')
        .then(respuesta => respuesta.json())
        .then(datos => {
            //console.log(datos)
            tabla(datos)
        })

function tabla(datos) {
    //console.log(datos)
    document.getElementById("contenido").innerHTML = ""
    for (let valor of datos) {
        console.log(valor)
        document.getElementById("contenido").innerHTML += `
        <tr>
        <th scope="row">${valor.id}</th>
        <td>${valor.name}</td>
        <td>${valor.signupCohort}</td>
        <td>${valor.timezone}</td>
      </tr>
        `
    }

}
}
/*var texts = [];
Promise.all(promises)
.then(results => {
   results.forEach(result => result.text()).then(t => texts.push(t))
})*/





// 1) computeUsersStats(users, progress, courses)
// Esta función es la responsable de "crear" la lista de usuarios (estudiantes) que vamos a "pintar" en la pantalla. 
//La idea es "recorrer" el arreglo de usuarios (users) y calcular los indicadores necesarios de progreso para cada uno. 
//La función debe devolver un nuevo arreglo de usuarios donde a cada objeto de usuario se le debe agregar una propiedad con el nombre stats con las estadísticas calculadas.

window.computeUsersStats = (users, progress, courses) => {
//Para que recorra todo sin hacerlo de forma manual
  for (index = 0; index < users.length; index++) {
    //Se establecen 2 variables, que me permiten llegar al id de cada users y que se una al progreso. 
    //El archivo "user.json" comienza con el mismo ID con el que comienza el archivo "progress.json" y recorren los mismos. 
    let userId = users[index].id;
    let userProgress = progress[userId];
    //Para entrar en cada sección del recorrido de progress.json
    if (JSON.stringify(userProgress) === '{}') {
      //Entro en el índice de users
      users[index] = {
        //Datos que hay en progress.json
        //Entro en cada uno de estos elementos
        ...users[index],
        stats: {
          percent: 0,
          exercises: { percent: 0, },
          reads: { percent: 0, },
          quizzes: {
            percent: 0,
            scoreAvg: 0,
          }
        }
      };
      //Las instrucciones que hay entre continue y el final del cuerpo de for se omiten debido al uso de la instrucción "continue".
      continue; 
    }
    let readsCompleted = 0, readsTotal = 0, scoreSumQuizz = 0, scoreAvg = 0,
      quizzCompleted = 0, quizzTotal = 0, practiceTotal = 0, practiceCompleted = 0, percent = 0;

      //element puede ser llamado como queramos
      courses.forEach(element => {
        percent = userProgress[element].percent;
        let unitsValues = Object.values(userProgress[element].units);
        unitsValues.forEach(element2 => {
          Object.values(element2.parts).forEach(element3 => {
            //Para recorrer "read" e ir concatenándolos 
            if (element3.type === 'read') {
              readsTotal += 1;
              if (element3.completed === 1) {
                readsCompleted += 1;
              }
            }
           //CONTINUAR