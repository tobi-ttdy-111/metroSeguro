

// Mensaje
class Mensaje {


    // constructor
    constructor( uid, nombre, mensaje, rol ) {

        this.uid = uid;
        this.nombre = nombre;
        this.mensaje = mensaje;
        this.rol = rol;

    };


};


// Chat
class Chat {


    // constructor
    constructor() {

        this.mensajes = [];
        this.usuarios = {};
        this.administradoresActivos = 0;
        this.usuariosActivos = 0;

    };


    // ultimos50
    get ultimos50() {

        this.mensajes = this.mensajes.splice( 0, 50 );
        return this.mensajes;

    };


    // usuariosArr
    get usuariosArr() {

        return Object.values( this.usuarios );

    }


    // enviarMensaje
    enviarMensaje( uid, nombre, mensaje, rol ) {

        this.mensajes.push(
            new Mensaje( uid, nombre, mensaje, rol )
        );

    };


    // conectarUsuario
    conectarUsuario( usuario ) {

        this.usuarios[ usuario.id ] = usuario;

    }


    // desconectarUsuario
    desconectarUsuario( id ) {

        delete this.usuarios[ id ]

    };


};


// exports
module.exports = {
    Chat
};