window.onload = function() {
    requiereJson();
  };

  //Hacer visible los valores de usuarios, progreso y cohorts (sede y curso), desde github (sede)
  async function requireJson() {
    //Se hace una petición con let response = await fetch ('URL');
    let jsonUsers = await fetch('https://raw.githubusercontent.com/tjarataibo/scl-2018-05-bc-core-pm-datadashboard/master/data/cohorts/lim-2018-03-pre-core-pw/users.json');
    //Se manda una respuesta como let data = await response.json();
    let users = await jsonUsers.json();

    //Lo mismo en estas:
   let jsonProgress = await fetch('https://raw.githubusercontent.com/tjarataibo/scl-2018-05-bc-core-pm-datadashboard/master/data/cohorts/lim-2018-03-pre-core-pw/progress.json');
    let progress = await jsonProgress.json();

    //Lo mismo en estas:
    let jsonCohorts = await fetch('https://raw.githubusercontent.com/tjarataibo/scl-2018-05-bc-core-pm-datadashboard/master/data/cohorts.json');
    let cohorts = await jsonCohorts.json();

}



//Función para users
async function fetchAsync() {
    //Se hace una petición con let response = await fetch ('URL');
    let responseOne = await fetch('https://raw.githubusercontent.com/tjarataibo/scl-2018-05-bc-core-pm-datadashboard/master/data/cohorts/lim-2018-03-pre-core-pw/users.json');
    //Se manda una respuesta como let data = await response.json();
    let users = await responseOne.json();

    return users;
  }

  fetchAsync()
    //Cuando se cumple
    .then(users => console.log(users))
    //Cuando no se cumple
    .catch(error => console.log(error))




//Función para progress
async function fetchAsynchTwo() {
    let responseTwo = await fetch('https://raw.githubusercontent.com/tjarataibo/scl-2018-05-bc-core-pm-datadashboard/master/data/cohorts/lim-2018-03-pre-core-pw/progress.json');
    let progress = await responseTwo.json();

    return progress;
}
 fetchAsyncTwo()
    //Cuando se cumple
    .then(progress => console.log(progress))
    //Cuando no se cumple
    .catch(error => console.log(error))




//Función para cohorts
async function fetchAsyncThree() {
    let responseThree = await fetch('https://raw.githubusercontent.com/tjarataibo/scl-2018-05-bc-core-pm-datadashboard/master/data/cohorts.json');
    let cohorts = await responseThree.json();

    return cohorts;
}
fetchAsyncThree()
//Cuando se cumple
.then(cohorts => console.log(cohorts))
//Cuando no se cumple
.catch(error => console.log(error))