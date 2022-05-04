
// imports
const express = require( 'express' );
const cors = require( 'cors' );
const conexion = require( '../database/config' );
const fileUpload = require( 'express-fileupload' );
const { socketController } = require( '../sockets/socket-server' );


// Server
class Server {


    // constructor
    constructor() {

        this.app = express();
        this.puerto = process.env.PORT;
        this.server = require( 'http' ).createServer( this.app );
        this.io = require( 'socket.io' )( this.server );
        this.dbConexion();
        this.middlewares();
        this.sockets();
        this.routes();

    };


    // dbConexion
    async dbConexion() {

        await conexion();

    };


    // middlewares
    middlewares() {

        this.app.use( express.static( 'public' ) );
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));

    };


    // sockets
    sockets() {

        this.io.on( 'connection', ( socket ) => {
            socketController( socket, this.io );
        });

    };


    // routes
    routes() {

        this.app.use( require( '../routes/usuario' ) );
        this.app.use( require( '../routes/auth' ) );
        this.app.use( require( '../routes/altercado' ) );

    };


    // listen
    listen() {
        this.server.listen( this.puerto, () => {
            console.log( `Escuchando en el puerto ${ this.puerto }` );
        });
    };


};


// exports
module.exports = Server;