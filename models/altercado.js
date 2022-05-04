
// imports
const { Schema, model } = require( 'mongoose' );


// schemaAltercado
const schemaAltercado = new Schema({


    linea: {
        type: String,
        required: [ true, 'La línea es requerida' ]
    },


    estacion: {
        type: String,
        required: [ true, 'La estación es requerida' ]
    },


    tipo: {
        type: String,
        required: [ true, 'El tipo es requerido' ]
    },


    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: [ true, 'El usuario es requerido' ]
    },


    fechaOcurrida: {
        type: String,
        required: [ true, 'La fecha en que ocurrio es requerida' ]
    },


    horario: {
        type: String,
        required: [ true, 'El horario es requerido' ]
    },


    estado: {
        type: Boolean,
        default: true
    },


    status: {
        type: String,
        default: 'normal'
    },


    descripcion: {
        type: String,
    },


    imagen: {
        type: String
    },


    utilidad: {
        type: Number,
        default: 3
    },


    interacciones: {
        type: Array
    }


}, { timestamps: true });


// exports
module.exports = model( 'altercado', schemaAltercado );