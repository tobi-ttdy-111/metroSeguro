
// imports
const { request, response } = require( 'express' );
const jwt = require( 'jsonwebtoken' );
const Usuario = require( '../models/usuario' );


// validarJwt
const validarJwt = async( req = request, res = response, next ) => {

    const token = req.header( 'tokensito' );
    if ( !token ) return res.status( 401 ).json({ msg: 'Primero inicia sesión' });

    try {
        const { uid } = jwt.verify( token, process.env.SECRETKEY );
        const usuario = await Usuario.findById( uid );
        if ( !usuario ) return res.status( 401 ).json({ msg: 'Ocurrio un error en el servidor' });
        if ( !usuario.estado ) return res.status( 401 ).json({ msg: 'Tu cuenta a sido borrada' });
        req.usuarioAuth = usuario;
        next();
    } catch ( err ) {
        console.log( err );
        res.status( 401 ).json({ msg: 'Ocurrio un error en el servidor' });
    };

};


// exports
module.exports = { validarJwt };