
// imports
const jwt = require( 'jsonwebtoken' );
const Usuario = require( '../models/usuario' );


// validarJWT
const validarJWT = async( token ) => {

    try {
        if ( token.length <= 10 ) return null;
        const { uid } = jwt.verify( token, process.env.SECRETKEY );
        const usuario = await Usuario.findById( uid );
        if ( usuario && usuario.estado ) {
            return usuario
        } else { return null }
    } catch ( err ) {
        return null
    };

};


// exports
module.exports = validarJWT;