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


