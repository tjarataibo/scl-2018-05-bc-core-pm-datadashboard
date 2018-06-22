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
        <th scope="row">${valor.name}</th>
        <td>${valor.id}</td>
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
