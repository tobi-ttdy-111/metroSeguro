
// imports
const { request, response } = require( 'express' );
const Usuario = require( '../models/usuario' );
const bcryptjs = require( 'bcryptjs' );
const generarJwt = require( '../helpers/generarJwt' );


// postAuth
const postAuth = async( req = request, res = response ) => {

    const { correo, contraseña } = req.body;

    try {
        const usuario = await Usuario.findOne({ correo });
        if ( !usuario ) return res.status( 400 ).json({ msg: 'El correo proporcionado no pertenece a ninguna cuenta' });
        if ( !usuario.estado ) return res.status( 400 ).json({ msg: 'Tu cuenta a sido eliminada' });
        const match = bcryptjs.compareSync( contraseña, usuario.contraseña );
        if ( !match ) return res.status( 400 ).json({ msg: 'Contraseña incorrecta' });
        const token = await generarJwt( usuario.id );
        res.json({ usuario, token });
    } catch ( err ) {
        res.status( 500 ).json({ msg: 'Hable con el administrador' });
    };

};


// getAuth
const getAuth = async( req = request, res = response ) => {

    const usuario = req.usuarioAuth;

    const token = await generarJwt( usuario.id )

    res.json({ usuario, token });

};


// exports
module.exports = {
    postAuth,
    getAuth
};