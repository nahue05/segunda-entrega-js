function Persona(nombre, apellido, edad, dias,){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dias = dias;
}
document.addEventListener('DOMContentLoaded', () => {
    if (datosClientes.length != 0) { 
        actualizarVistaAlumnosRegistrados();
    }
})
let boton = document.getElementById("boton");
boton.onclick = capturar;
let boton2 = document.getElementById("boton2")
boton2.onclick = cerrarSesion;

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
    if ((nombreCapturar)== ""){
        alert("los campos no pueden estar vacios");
        return;
    }
    if ((apellidoCapturar)== ""){
        alert("los campos no pueden estar vacios");
        return;
    }
    if ((edadCapturar)== ""){
        alert("los campos no pueden estar vacios");
        return;
    }
    if ((diasCapturar)== ""){
        alert("los campos no pueden estar vacios");
        return;
    }
    

    let nuevoCliente = new Persona(nombreCapturar,apellidoCapturar,edadCapturar,diasCapturar);
    agregar(nuevoCliente);
}

const actualizarVistaAlumnosRegistrados = () => {
    let container = document.querySelector('.table')     
    container.innerHTML = '';
    for (const nuevoCliente of datosClientes){
        container.innerHTML += `<tbody>
        <td>${nuevoCliente.nombre}</td>
        <td>${nuevoCliente.apellido}</td>
        <td>${nuevoCliente.edad}</td>
        <td>${nuevoCliente.dias}</td>
        </tbody>`;
    }
}

const datosClientes = JSON.parse(localStorage.getItem('cliente1')) || []; 

function agregar(nuevoCliente){
    datosClientes.push(nuevoCliente);
    document.getElementById("tabla").innerHTML += `<tbody>
            <td>${nuevoCliente.nombre}</td>
            <td>${nuevoCliente.apellido}</td>
            <td>${nuevoCliente.edad}</td>
            <td>${nuevoCliente.dias}</td>
            </tbody>`; 
    localStorage.setItem("cliente1", JSON.stringify(datosClientes));
    actualizarVistaAlumnosRegistrados();
};


function cerrarSesion(event){
    event.preventDefault();
    localStorage.clear();
    document.getElementById("tabla").innerHTML = `<thead>
    <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Edad</th>
        <th scope="col">Dias</th>
    </tr>
    </thead>`
    }
