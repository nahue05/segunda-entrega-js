function Persona(nombre, apellido, edad, dias,){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dias = dias;
}
let boton = document.getElementById("boton");
boton.onclick = capturar;
let boton2 = document.getElementById("boton2");
boton2.onclick = borrar;


function capturar(onclick){
    onclick.preventDefault();
    let nombreCapturar = document.getElementById("nombre").value;
    let apellidoCapturar = document.getElementById("apellido").value;
    let edadCapturar = document.getElementById("edad").value;
    let diasCapturar = document.getElementById("dias").value;
    
    if (parseInt(edadCapturar) < 18) {
        alert("No está autorizado para alquilar un vehiculo")
        return;
    }
    

    nuevoCliente = new Persona(nombreCapturar,apellidoCapturar,edadCapturar,diasCapturar);
    console.log(nuevoCliente);
    agregar();
}

const datosClientes= []; 
function agregar(){
    datosClientes.push(nuevoCliente);
    document.getElementById("tabla").innerHTML += `<tbody>
            <td>${nuevoCliente.nombre}</td>
            <td>${nuevoCliente.apellido}</td>
            <td>${nuevoCliente.edad}</td>
            <td>${nuevoCliente.dias}</td>
            </tbody>`; 
    localStorage.setItem("cliente1", JSON.stringify(datosClientes));
};

//function borrar(onclick){
//  onclick.preventDefault();
//localStorage.clear;
//}


