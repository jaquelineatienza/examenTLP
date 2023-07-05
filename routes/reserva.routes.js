// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const express = require('express');
const router = express.Router();
const {readsAll, create, update, Deleted, read} = require('../controllers/reserva.controllers')

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

//vista General
router.get('/reservas',(req,res)=>{
    res.render('index')
})
//Vista Crear

router.get('/reservas/create',(req,res)=>{
    res.render('crear')
})
//vista editar
router.get('/reservas/editar/:id', (req, res) => {
    res.render('edit', { id: req.params.id });
});



// Obtener todas las reservas

// Formulario para crear una reserva

// Formulario para actualizar una reserva

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/reservas',readsAll);
 
//obtener una reserva
router.get('/api/reservas/:id',read);


// Crear una reserva
router.post('/api/reservas/create',create);
 
// Actualizar una reserva
router.put('/api/reservas/update/:id',update);
 
// Eliminar una reserva de forma lógica
router.put('/api/reservas/delete/:id',Deleted);

 
 module.exports = router;