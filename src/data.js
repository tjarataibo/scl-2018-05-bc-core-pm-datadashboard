window.onload

//Función para users
async function fetchAsync() {
    //Se hace una petición con let response = await fetch ('URL');

    const responseOne = await fetch('https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json');
    //Se manda una respuesta como let data = await response.json();
    const users = await responseOne.json();

    return users;
}

  fetchAsync()
    //Cuando se cumple
    .then(users => console.log(users))
    //Cuando no se cumple
    .catch(error => console.log(error))


//Función para progress
async function fetchAsyncTwo() {
    const responseTwo = await fetch('https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json');
    const progress = await responseTwo.json();

    return progress;
}


 fetchAsyncTwo()
    //Cuando se cumple
    .then(progress => console.log(progress))
    //Cuando no se cumple
    .catch(error => console.log(error))


//Función para cohorts
async function fetchAsyncThree() {
    const responseThree = await fetch('https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts.json');
    const cohorts = await responseThree.json();

    return cohorts;
}


fetchAsyncThree()
//Cuando se cumple
.then(cohorts => console.log(cohorts))
//Cuando no se cumple

.catch(error => console.log(error))


//Llamar a las funciones con botones

document.getElementById("Alumnas").addEventListener("click", fetchAsync() )


