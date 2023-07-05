    // Referencia al formulario
    const formEditar = document.querySelector('#formEditar');
    const nombre = document.querySelector('#nombre');
    const apellido = document.querySelector('#apellido');
    const fechaIngreso = document.querySelector('#fechaIngreso');
    const fechaSalida = document.querySelector('#fechaSalida');
    const codigo = document.querySelector('#codigo');
    const id = formEditar.dataset.id;

    // Funcion para obtener los datos de la reserva cuando se carga la página
    document.addEventListener('DOMContentLoaded', async () => {
        const response = await fetch(`http://localhost:3000/api/reservas/${id}`)
        const data = await response.json();
        console.log(data)
        nombre.value = data.nombre;
        apellido.value = data.apellido;
        fechacompra = data.fechaCompra;
        fechaSalida = data.fechaSalida;
        codigo.value = data.codigo;
        precio.value = data.precio;
        
    })


    // Escuchar el evento submit
    formEditar.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Se crea un objeto con los datos del formulario
        const formData = {
            nombre: e.target.nombre.value,
            apellido: e.target.apellido.value,
            fechaIngreso: e.target.fechaIngreso.value,
            fechaSalida: e.target.fechaSalida.value,
            codigo: e.target.codigo.value,
            precio:e.target.codigo.value
        }
        

        try {
            // Se envia la peticion al servidor
            const resp = await fetch(`http://localhost:3000/api/reservas/${id}`, {
                method: 'PUT',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                },
                
            })

            if(resp.status !== 200){
                throw({
                    message: 'Error al editar la reserva'
                })
            }

            const data = await resp.json();

            Swal.fire({
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(() => {
                window.location.href = '/reservas';
            }, 1500);

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: error.message,
                timer: 2000,
            })
        }
    });