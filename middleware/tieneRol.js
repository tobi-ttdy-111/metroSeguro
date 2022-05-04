
// imports
const { request, response } = require( 'express' );;


// tieneRol
const tieneRol = ( ...roles ) => {
    return ( req = request, res = response, next ) => {

        if ( !req.usuarioAuth ) return res.status( 500 ).json({ msg: 'Primero inicia sesion' });
        if ( !roles.includes( req.usuarioAuth.rol ) ) return res.status( 401 ).json({ msg: 'No estas autorizado para ver esta sección' });
        next();

    };
};


// exports
module.exports = {
    tieneRol
};