
// imports
const Usuario = require( '../models/usuario' );
const Rol = require( '../models/rol' );


// existeCorreo
const existeCorreo = async( correo ) => {

    const existe = await Usuario.findOne({ correo });
    if ( existe ) throw new Error( `El correo proporcionado ya está en uso` );

};


// existeRol
const existeRol = async( rol ) => {

    const existe = await Rol.findOne({ rol });
    if ( !existe ) throw new Error( `El rol no es válido` );

};


// existeLinea
const existeLinea = ( linea ) => {

    const lineas = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', '12' ];
    if ( !lineas.includes( linea ) ) throw new Error( `La línea proporcionada no es válida` );
    return true;

};


// existeTipo
const existeTipo = ( tipo ) => {

    const tipos = [ 'Intentos de acoso', 'Fallo estructural', 'Fallo en el vehículo o bagón', 'Acoso sexual', 'Robo', 'Otro' ];
    if ( !tipos.includes( tipo ) ) throw new Error( `El tipo de altercado no es válido` );
    return true;

};


// adminPass
const adminPass = ( contraseña ) => {

    const pass = process.env.PASS;
    if ( contraseña != pass ) throw new Error( `La contraseña no es válida` );
    return true;

};


// exports
module.exports = {
    existeCorreo,
    existeRol,
    existeLinea,
    existeTipo,
    adminPass
};