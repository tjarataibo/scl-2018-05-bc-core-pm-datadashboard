/*function verTabla()
{
document.getElementById("frm").style.visibility="visible";
 
document.getElementById("img").style.visibility="hidden";
 
}
<---------------comento funcion para usarla despues----------------------->
*/


////////////////////////////////////////////////////////////////////////////
function verTabla()
{
document.getElementById("frm").style.visibility="visible";
 
document.getElementById("img").style.visibility="hidden";
 
}

function tabla(responseJsons) {
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


    