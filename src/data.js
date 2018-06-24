const users = "https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json";
const progress ="https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json"; 
const cohorts ="https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts.json";


//se declaran variables para las url donde se alojan las datas


Promise.all([   //Ejecuta todas las llamadas de manera paralela

fetch(users),
fetch(progress),
fetch(cohorts),

])
.then((responses)=>{   //Responde a todas las promesas
        return Promise.all(responses.map((response)=>{
            //console.log(response);
            return response.json();                
        }));                       
    }               


)
.then((responseJsons)=>{ //Arreglo de respuestas en json
    let users = responseJsons[0]
    let progress = responseJsons[1]
    let cohorts = responseJsons[2].filter((cohort)=>{
      return cohort.id 
  });
        console.log(cohorts);    
        console.log(users);
        console.log(progress);
        
    
    // courses.id = object.keys(cohorts[2].coursesIndex);
    result = computeUsersStats(users,progress,courses);
    sortUsers(result,"name","DESC");
     

})

.catch(
(error)=>{ // Al menos una llamada falló

}
)
//promisse all listo !!! HASTA ACA FUNCIONA CSM!!!!!


/*function tabla(datos) {
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

}     comento funciòn tabla para ocuparla despues*/ 



/*function verTabla()
{
document.getElementById("frm").style.visibility="visible";

document.getElementById("img").style.visibility="hidden";

}
<---------------comento funcion para usarla despues----------------------->
*/



// 1) computeUsersStats(users, progress, courses)
// Esta función es la responsable de "crear" la lista de usuarios (estudiantes) que vamos a "pintar" en la pantalla. 
//La idea es "recorrer" el arreglo de usuarios (users) y calcular los indicadores necesarios de progreso para cada uno. 
//La función debe devolver un nuevo arreglo de usuarios donde a cada objeto de usuario se le debe agregar una propiedad con el nombre stats con las estadísticas calculadas.

window.computeUsersStats = (users, progress, courses) => {
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
      
      //Las instrucciones que hay entre continue y el final del cuerpo de for se omiten debido al uso de la instrucción "continue".
      continue; 
    }
      //ítems existentes
      let readsCompleted = 0, readsTotal = 0, scoreSumQuizz = 0, scoreAvg = 0,
      quizzCompleted = 0, quizzTotal = 0, practiceTotal = 0, practiceCompleted = 0, percent = 0;

      //element puede ser llamado como queramos
      courses.forEach(element => {
        let percent = userProgress[element].percent;
        let unitsValues = Object.values(userProgress[element].units);
        unitsValues.forEach(element2 => {
          Object.values(element2.parts).forEach(element3 => {
            //Para recorrer "read" e ir concatenándolos 
            //Si element3.type es IGUAL a read
            if (element3.type === "read") {
              readsTotal += 1;
              if (element3.completed === 1) {
                readsCompleted += 1;
              }
            }
           // console.log(users);

            //Para recorrer "quizz" e ir concatenándolos 
            if (element3.type === "quiz") {
              quizzTotal += 1;
              if (element3.completed === 1) {
                quizzCompleted += 1;
                scoreSumQuizz += element3.score;
              }
            }

            ////Para recorrer "practice" e ir concatenándolos 
            if (element3.type === "practice") {
              practiceTotal += 1;
              if (element3.completed === 1) {
                practiceCompleted += 1;
              }
            }
          });
        });

        users[i] = {
            ...users[i],
            stats: {
              percent: percent, //Número entero entre 0 y 100 que indica el porcentaje de completitud general del 
              //usuario con respecto a todos los cursos asignados a su cohort.
              exercises: { //Objeto con tres propiedades:
                total: practiceTotal, //Número total de ejercicios autocorregidos presentes en cursos del cohort.
                completed: practiceCompleted, //Número de ejercicios autocorregidos completados por el usuario.
                percent: (practiceCompleted / practiceTotal) * 100, //Porcentaje de ejercicios autocorregidos completados.
              },
    
              reads: { //Objeto con tres propiedades:
                total: readsTotal, //Número total de lecturas presentes en cursos del cohort.
                completed: readsCompleted, // Número de lecturas completadas por el usuario.
                percent: (readsCompleted / readsTotal) * 100, //Porcentaje de lecturas completadas.
              },
              quizzes: { //Objeto con cinco propiedades:
                total: quizzTotal, //Número total de quizzes presentes en cursos del cohort.
                completed: quizzCompleted, // Número de quizzes completadas por el usuario.
                percent: (quizzCompleted / quizzTotal) * 100, //Porcentaje de quizzes completadas.
                scoreSum: scoreSumQuizz, //Suma de todas las puntuaciones (score) de los quizzes completados.
                scoreAvg: scoreSumQuizz / quizzCompleted, //Promedio de puntuaciones en quizzes completados.
              }
            }
          };
        });
      }
      return users;

    };
   