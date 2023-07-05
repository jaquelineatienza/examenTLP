// TODO: Crear modelo de datos de Reserva
// TODO: Crear modelo de datos de Reserva
const { TIME } = require('sequelize');
const { sequelize,DataTypes}= require('../database/db');
const Reserva = sequelize.define('Reserva',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    apellido:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fechaSalida:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    horario:{
        type:TIME,
        allowNull:false,
    },
    cantidadPasajes:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    codigo:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue:true
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue:sequelize.literal('CURRENT_TIMESTAMP')
    },
    updateAt:{
        type:DataTypes.DATE,
        allowNull:true,
    }
    ,
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }

},{
    createdAt:true,
    updatedAt:true,
    deletedAt:true,
    tableName:'reservas'
    });
    Reserva.sync();

module.exports = Reserva;   