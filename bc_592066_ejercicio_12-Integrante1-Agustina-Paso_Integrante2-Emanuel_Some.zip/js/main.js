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

/* console.log(vectorNombresInt_1)
console.log(nombresInt2)
console.log(vectorNombresInt_1.length)
console.log(vectorNombresInt_1[0].textContent)
 */

for (let i = 0; i < vectorNombresInt_1.length; i++) {
    const element = vectorNombresInt_1[i];
    for (let j = 0; j < vectorNombresInt_2.length; j++) {
        if (vectorNombresInt_1[i].textContent === vectorNombresInt_2[j].textContent) {
            console.log (`
                nombreInt 1: ${vectorNombresInt_1[i].textContent} es igual al nombreInt 2: ${vectorNombresInt_2[j].textContent}
            `)
            console.log("Hubo coincidencias")
            const colorPrompt = prompt("Hubo concidencias, por favor ingresa un color:")
            vectorNombresInt_1[i].style.color = colorPrompt
            vectorNombresInt_2[j].style.color = colorPrompt
        } 
    } 
}
