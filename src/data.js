/*function verTabla()
{
document.getElementById("frm").style.visibility="visible";
 
document.getElementById("img").style.visibility="hidden";
 
}
<---------------comento funcion para usarla despues----------------------->
*/


function traer() {
    //se declaran variables para las url donde se alojan las datas

    const urlUsers = "https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json";
    const urlProgress ="https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json"; 
    const urlCohorts ="https://tjarataibo.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts.json";

    Promise.all([   //Ejecuta todas las llamadas de manera paralela

    fetch(urlUsers),
    fetch(urlProgress),
    fetch(urlCohorts),
    
    ])
    .then((responses)=>{   //Responde a todas las promesas
            return Promise.all(responses.map((response)=>{
                //console.log(response);
                return response.json();                
            }));                       
        }               
    

    )
    .then((responseJsons)=>{ //Arreglo de respuestas en json
        console.log(responseJsons)    
        //tabla(responseJsons)
    /*
     * Código que ocupa los jsons...
     */
    })
    
    .catch(
    (error)=>{ // Al menos una llamada falló

    }
)}
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