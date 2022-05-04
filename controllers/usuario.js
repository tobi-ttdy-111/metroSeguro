
// imports
const { request, response } = require( 'express' );
const Usuario = require( '../models/usuario' );
const bcrypjs = require( 'bcryptjs' );


// getUsuario
const getUsuario = async( req = request, res = response ) => {

    const usuarios = await Usuario.find({ estado: true });
    if ( !usuarios ) return res.json({ msg: 'Parece que tu aún no hay ningún usuario' });
    res.json( usuarios );

};


// postUsuario
const postUsuario = async( req = request, res = response ) => {

    const { nombre, correo, contraseña, rol } = req.body;

    const usuario = new Usuario({ nombre, correo, contraseña, rol });
    const salt = bcrypjs.genSaltSync( 10 );
    usuario.contraseña = bcrypjs.hashSync( contraseña, salt );

    await usuario.save();
    res.json({ usuario });

};


// postAdmin
const postAdmin = async( req = request, res = response ) => {

    const { correo, contraseña, nombre } = req.body;

    const usuario = new Usuario({ nombre, correo, contraseña, rol: 'ADMINISTRADOR' });
    const salt = bcrypjs.genSaltSync( 10 );
    usuario.contraseña = bcrypjs.hashSync( contraseña, salt );

    await usuario.save();
    res.json({ usuario });

};


// putUsuario
const putUsuario = async( req = request, res = response ) => {

    const id = req.usuarioAuth._id;
    const usuario = await Usuario.findByIdAndUpdate( id, { alerta: '' } );
    res.json( usuario );

};


// deleteUsuario
const deleteUsuario = async( req = request, res = response ) => {

    const { id } = req.params;

    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false });
    res.json({ usuario });

};


// exports
module.exports = {
    getUsuario,
    postUsuario,
    postAdmin,
    putUsuario,
    deleteUsuario
};