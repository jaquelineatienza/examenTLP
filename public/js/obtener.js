const listadoReservas = document.getElementById('reservas');

const obtenerReservas = async ()=>{
    const res = await fetch('http://localhost:3000/api/reservas',{
});
if (res.status === 404){
    return [];
}

const data = await res.json();
return data;}

const eliminarReservas = async (event) => {
    const id = event.target.dataset.id;

    try {
        const res = await fetch(`http://localhost:3000/api/reservas/delete/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        Swal.fire({
            icon: 'success',
            title: 'Reserva eliminada',
            text: data.message,
        });
        
        setTimeout(() => {
            window.location.reload();
        }, 2200);

    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
        })
    }

}
const mostrarReservas = (reservas) => {

    // Si no hay tareas, mostrar un mensaje
    if(reservas.length === 0){
        listadoReservas.innerHTML = `
            <tr>
                <td colspan="3" class="text-center">No hay tareas registradas</td>
            </tr>
        `;
        return;
    };

    reservas.forEach(reserva => {
        listadoReservas.innerHTML += `
                    <tr>
                        <td>${reserva.nombre}</td>
                        <td>${reserva.apellido}</td>
                        <td>${reserva.fechaCompra}</td>
                        <td>${reserva.fechaSalida}</td>
                        <td>${reserva.codigo}</td>
                        <td>${reserva.precio}</td>
                        <td>
                            <button onclick=eliminarReservas(event) class="btn btn-danger btn-sm" data-id="${reserva.id}">Eliminar</button>
                            <a href="http://localhost:3000/reservas/editar/${reserva.id}" class="btn btn-success btn-sm">Editar</a>
                        </td>
                    </tr>
                `;
    });
}

// Obtener las tareas automáticamente cuando se carga la página
document.addEventListener('DOMContentLoaded', async () => {

    console.log('DOM cargado')

    // Dentro de try se coloca el código que se quiere ejecutar
    try {
        const reservas = await obtenerReservas();     
        mostrarReservas(reservas);
    } catch (error) {  // Dentro de catch se coloca el código que se ejecutará en caso de que haya un error
        console.log({ error });

        // Mensaje para el usuario
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
        });
    }
});