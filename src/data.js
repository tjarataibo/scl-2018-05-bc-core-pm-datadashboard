function verTabla()//funcion para hacer que aparescan mis datos
{
document.getElementById("frm").style.visibility="visible";
 
document.getElementById("img").style.visibility="hidden";
 
}

function tabla(responseJsons) { //tabla para mostrar llamado de datas
    //console.log(datos)
    document.getElementById("contenido").innerHTML = ""
    for (let valor of responseJsons) {
        //console.log(valor)
        document.getElementById("contenido").innerHTML += `
        
        <tr>
        <th> ${valor.id}</th>
        
      </tr>
        `
    }

} 

function traer() {

    const urlUsers = "https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json";
    const urlProgress ="https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json"; 
    const urlCohorts ="https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts.json";
    

    Promise.all([   //llama todas las bases

    fetch(urlUsers),
    fetch(urlProgress),
    fetch(urlCohorts),
    
    ]) .then((responses)=>{   //Responde a todas las promesas
        return Promise.all(responses.map((response)=>{ //map me entrega un nuevo arreglo con las tres bases
            //console.log(response);
            return response.json();                
        }));                       
    }               
    

    ).then((responseJsons) =>{ //Arreglo de las respuestas en json
       let users = responseJsons[0]
       let progress = responseJsons[1]
       let cohorts = responseJsons[2].filter((cohort)=>{
          
           return cohort.id;
           
       });

       

       tabla(responseJsons)
     //console.log(responseJsons)
     
     
        /*
     * Código que ocupa los jsons...
     */
    })
   
    .catch(
    (error)=>{ // Al menos una llamada falló

    }
)}
//promisse all listo !!! HASTA ACA FUNCIONA !!!!!



//                  <------------------------->



// 1) computeUsersStats(users, progress, courses)
// Esta función es la responsable de "crear" la lista de usuarios (estudiantes) que vamos a "pintar" en la pantalla. 
//La idea es "recorrer" el arreglo de usuarios (users) y calcular los indicadores necesarios de progreso para cada uno. 
//La función debe devolver un nuevo arreglo de usuarios donde a cada objeto de usuario se le debe agregar una propiedad con el nombre stats con las estadísticas calculadas.

// 1) computeUsersStats(users, progress, courses)
// Esta función es la responsable de "crear" la lista de usuarios (estudiantes) que vamos a "pintar" en la pantalla.
//La idea es "recorrer" el arreglo de usuarios (users) y calcular los indicadores necesarios de progreso para cada uno.
//La función debe devolver un nuevo arreglo de usuarios donde a cada objeto de usuario se le debe agregar una propiedad con el nombre stats con las estadísticas calculadas.

window.computeUsersStats = (users, progress) => {
  //Para que recorra todo sin hacerlo de forma manual
  
   for (i = 0; i < users.length; i++) {
     //Se establecen 2 variables, que me permiten llegar al id de cada users y que se una al progreso.
     //El archivo "user.json" comienza con el mismo ID con el que comienza el archivo "progress.json" y recorren los mismos.
   // console.log(users[1]);
     let userId = users[i].id;
     let userProgress = progress[userId];
     //Para entrar en cada sección del recorrido de progress.json
     //El método "JSON.stringify" convierte un valor dado en javascript a una cadena  JSON
     if (JSON.stringify(userProgress) === '{}') {
       //Entro en el índice de users
       users[i] = {
         //Datos que hay en progress.json
         //Entro en cada uno de estos elementos
         ...users[i],    //No acepta los 3 puntos el Visual
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
  }
  }console.log(users)
  }