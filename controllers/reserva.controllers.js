const Reserva = require('../models/Reserva');
const ctrlReserva = {}

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
//crtlReserva.readsAll = async (req,res)=>{
ctrlReserva.readsAll = async (req, res) =>{

    try{
        const reservas = await Reserva.findAll({
            where:{
                estado:true,
            }
        });

        if(!reservas || reservas.length === 0){
            throw({
                status:404,
                message: 'No hay reservas en la base de datos'
            });
        }
        return res.json(reservas);

    }catch(error){
        return res.status(error.status || 500).json({
            message: error.message || 'error interno del servidor'
        });
    }
}


// Obtener una reserva
//crtlReserva.read = async (req,res)=>{
ctrlReserva.read = async (req, res) => {
    const {id} = req.params;
    try{
        const reservas = await Reserva.findOne({
            where:{id,
                estado:true,
            }
        });

        if(!reservas){
            throw({
                status:404,
                message: 'No hay reservas en la base de datos'
            });
        }
        return res.json(reservas);

    }catch(error){
        return res.status(error.status || 500).json({
            message: error.message || 'error interno del servidor'
        });
    }
}
// crtlReserva.read = async (req,res)=>{
   
// }
// Crear una reserva
// crtlReserva.create = async (req,res) =>{
    ctrlReserva.create=async(req,res)=>{
    const {nombre, apellido, fechaIngreso, fechaSalida,codigo} = req.body;
    console.log(req.body);
    try{
        const reservas = await Reserva.create({
            nombre, apellido, fechaIngreso, fechaSalida,codigo
        });

        if(!reservas){
            throw({
                status:400,
                message:'error al crear la reserva'
            });
        }

        return res.json(reservas);
    }catch(error){
        console.log(error);
        return res.status(error.status || 500).json(error.message|| 'error interno del servidor');
    }
}
// Actualizar una reserva

// crtlReserva
ctrlReserva.update =async (req,res)=>{
const {id} = req.params;
    const {nombre, apellido, fechaIngreso, fechaSalida,codigo} = req.body;

    try{
        const reservaActualizada = await Reserva.update({
            nombre, apellido, fechaIngreso, fechaSalida,codigo
        },{where:{
            id,
            estado: true,
        }});
        if(!reservaActualizada){
            throw({
                status:400,
                message:'No se logró actualizar la reserva'
            });
        }
        return res.json(reservaActualizada)
    }catch(error){
        return res.status(error.status || 500).json(error.message || 'error interno del servidor');
    };

}
// Eliminar una reserva de forma lógica
// crtlReserva.Deleted = async (req,res)=>{
    ctrlReserva.Deleted = async (req,res)=>{
    const {id} = req.params;
    try{

        const reservaEliminada=await Reserva.update({
            estado:false}
        ,{where:{id,
        estado: true
    }});
    if(!reservaEliminada){
        throw ({
            status:400,
            message: 'error al eliminar la reserva'
        })
    }
    return res.json({reservaEliminada, message: 'Reserva Eliminada!'});
}catch(error){
    return res.status(error.status || 500).json(error.message || 'error interno del servidor');
}
}

module.exports = ctrlReserva;