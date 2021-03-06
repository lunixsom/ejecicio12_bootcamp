/* ----- 1) ----- */

console.log(document.querySelector('title').innerText)


/* ----- 3) ----- */

const vectorNombresInt_1 = document.querySelectorAll('.int1_N')
const vectorApellidosInt_1 = document.querySelectorAll('.int1_A')
const vectorNombresInt_2 = document.querySelectorAll('.int2_N')
const vectorApellidosInt_2 = document.querySelectorAll('.int2_A')


const nombresInt1 = concatenarStrings(vectorNombresInt_1)
const apellidosInt1 = concatenarStrings(vectorApellidosInt_1)
const nombresInt2 = concatenarStrings(vectorNombresInt_2)
const apellidosInt2 = concatenarStrings(vectorApellidosInt_2)

function concatenarStrings(vector){
    let stringAMostrar = ""
    let longitudVector = vector.length

    for (let i = 0; i < longitudVector; i++) {
        if (vector[i].textContent !== "") {
            stringAMostrar += vector[i].textContent + " "
        }
    }

    return stringAMostrar
}

console.log(
    `
----------
Integrante 1: ${nombresInt1.trim()} ${apellidosInt1.toUpperCase().trim()}
Integrante 2: ${nombresInt2.trim()} ${apellidosInt2.toUpperCase().trim()}
----------
`)


/* ----- 4) ----- */

console.log(`PUNTO 4 :`)

buscarCoincidenciasyCambiarColor(vectorNombresInt_1,vectorNombresInt_2)
if (window.confirm("¿Desea comparar los apellidos?")) {
    buscarCoincidenciasyCambiarColor(vectorApellidosInt_1,vectorApellidosInt_2)
}

function buscarCoincidenciasyCambiarColor(vectorString_1, vectorString_2){

    let flagCoincidencia = false

    for (let i = 0; i < vectorString_1.length; i++) {
        
        const element = vectorString_1[i];

        for (let j = 0; j < vectorString_2.length; j++) {
            if (vectorString_1[i].textContent === vectorString_2[j].textContent && (vectorString_1[i].textContent !== "") && (vectorString_2[i].textContent !== "")) {
                console.log("Hubo coincidencias")
                flagCoincidencia = true
                console.log (`
                    nombreInt 1: ${vectorString_1[i].textContent} es igual al nombreInt 2: ${vectorString_2[j].textContent}
                `)
                const colorPrompt = prompt("Hubo concidencias, por favor ingresa un color:")
                vectorString_1[i].style.color = colorPrompt
                vectorString_2[j].style.color = colorPrompt
                } 
            }   
        }
    if (flagCoincidencia) {
        flagCoincidencia = false; 
    } else{
        console.log("No hubo coindidencias")
    }
 }

