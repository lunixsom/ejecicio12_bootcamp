/* ----- 1) ----- */

console.log(document.querySelector('title').innerText)


/* ----- 3) ----- */

/* const datosIntegrantes = document.querySelectorAll('dd')
console.log(datosIntegrantes
    )

function mostrarDatosEnConsola(){
datosIntegrantes.forEach(dato => {
    return primerIntegrante += dato.textContent
});

console.log(`---------
Integrante 1: ${primerIntegrante}
Integrante 2: "aaa"
---------
`)
}

mostrarDatosEnConsola() */

const nombresInt_1 = document.querySelectorAll('.int1_N')
const apellidosInt_1 = document.querySelectorAll('.int1_A')
let nom = ""
let ape = ""
let longitudN = nombresInt_1.length
let longitudA = apellidosInt_1.length

console.log(longitudN)
console.log(longitudA)

console.log(nombresInt_1)
console.log(apellidosInt_1)

/* apellidosInt_1.forEach((apellido,i) => {
    ape += apellido[i].textContent 
}); */

for (let i = 0; i < longitudN; i++) {
    if (nombresInt_1[i].textContent !== "") {
        nom += nombresInt_1[i].textContent + " "
    }
}

for (let i = 0; i < longitudA; i++) {
    if (apellidosInt_1[i].textContent !== "") {
        ape += apellidosInt_1[i].textContent + " "
    }
}

console.log({nom})
console.log({ape})

console.log(`Integrante 1: ${nom.trim()} ${ape.trim()}`)

/* let apellidosEnMayuscula = apellidosInt_1.map(function(apel){
    return apel.innerText;
}) */

/* console.log(apellidosEnMayuscula) */

/* 
function mostrarDatosConsola(){
    array.forEach(element => {
        
    });
}
console.log(nombresInt_1[0].textContent + " " + nombresInt_1[1].textContent + " " + apellidosInt_1[0].textContent) */