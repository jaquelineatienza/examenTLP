  // Se obtiene el formulario
  const formNuevaReserva = document.getElementById('formNuevaReserva');

  // Se agrega un evento al formulario
  formNuevaReserva.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Se obtienen los valores de cada input
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const fechaCompra = document.getElementById('fechaCompra').value;
      const fechaSalida = document.getElementById('fechaSalida').value;
      const codigo = document.getElementById('codigo').value;
    

     
      // Se envia la peticion POST
      try {
          const res = await fetch('http://localhost:3005//api/reservas/create', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({nombre,apellido,fechaCompra,fechaSalida,codigo})
          });

          const data = await res.json();
          console.log({ data });
          // formNuevaReserva.reset();
          
          Swal.fire({
              icon: 'success',
              title: 'Reserva creada',
              text: 'La Reserva se ha creado correctamente'
          })

        setTimeout(() => {
          window.location.href = '/reservas';
        }, 2000);
      } catch (error) {
          console.log(error);
          Swal.fire({
              icon: 'error',
              title: 'Error',
              text: error.message
          })
      }
  })