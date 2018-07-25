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
                //Para recorrer "reads" e ir concatenándolos 
                if (element3.type === 'read') {
                  readsTotal += 1;
                  if (element3.completed === 1) {
                    readsCompleted += 1;
                  }
                }
                //Para recorrer "quizzes" e ir concatenándolos
                if (element3.type === 'quiz') {
                  quizzTotal += 1;
                  if (element3.completed === 1) {
                    quizzCompleted += 1;
                    scoreSumQuizz += element3.score;
                  }
                }
                //Para recorrer "excercises" e ir concatenándolos
                if (element3.type === 'practice') {
                  practiceTotal += 1;
                  if (element3.completed === 1) {
                    practiceCompleted += 1;
                  }
                }
              }); 
            });
            //Para llegar al porcentaje de "excercises"
            users[index] = {
              ...users[index],
              stats: {
                percent: percent,
                exercises: {
                  total: practiceTotal,
                  completed: practiceCompleted,
                  percent: ((practiceCompleted / practiceTotal) * 100),
                },
                //Para llegar al porcentaje de "reads"
                reads: {
                  total: readsTotal,
                  completed: readsCompleted,
                  percent: ((readsCompleted / readsTotal) * 100),
                },
                //Para llegar al porcentaje de "quizzes
                quizzes: {
                  total: quizzTotal,
                  completed: quizzCompleted,
                  percent: ((quizzCompleted / quizzTotal) * 100), 
                  scoreSum: scoreSumQuizz,
                  scoreAvg: (scoreSumQuizz / quizzCompleted), //Promedio, por eso se divide
                }
              }
            };
          });
        }
        return users;
      };
  
