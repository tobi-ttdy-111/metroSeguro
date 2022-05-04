
// imports
const { Socket } = require( 'socket.io' );
const validarJWT = require( '../helpers/validarJWT' );
const { Chat } = require( '../models/chat' )


// chat
const chat = new Chat();


// socketController
const socketController = async( socket = new Socket(), io ) => {

    const usuario = await validarJWT( socket.handshake.headers[ 'tokensito' ] );
    if ( !usuario ) return socket.disconnect();

    if ( usuario.rol == 'ADMINISTRADOR' ) {
        chat.conectarUsuario( usuario );
        chat.administradoresActivos += 1;
        io.emit( 'mensaje', chat.ultimos50 );
    } else {
        chat.usuariosActivos += 1;
        io.emit( 'mensaje', chat.ultimos50 );
    };
    io.emit( 'usuarios', ({ administradores: chat.administradoresActivos, usuarios: chat.usuariosActivos, adminsActivos: chat.usuariosArr }) );

    socket.on( 'disconnect', () => {
        if ( usuario.rol == 'ADMINISTRADOR' ) {
            chat.desconectarUsuario( usuario.id );
            chat.administradoresActivos -= 1;
        } else {
            chat.usuariosActivos -= 1;
        };
        io.emit( 'usuarios', ({ administradores: chat.administradoresActivos, usuarios: chat.usuariosActivos, adminsActivos: chat.usuariosArr }) );
    });

    socket.on( 'mensaje', ({ mensaje }) => {
        chat.enviarMensaje( usuario.id, usuario.nombre, mensaje, usuario.rol );
        io.emit( 'mensaje', chat.ultimos50 );
    });

};


// exports
module.exports = {
    socketController
};