
// inicializaciones
let usuario, socket;
const mensajes = document.querySelector( '.mensajes' );

// cerrarSesion
const navLogout = document.querySelector( '#nav-logout' );
navLogout.addEventListener( 'click', () => {
    localStorage.setItem( 'token', '' );
    window.location.href = './index.html';
    localStorage.setItem( 'alert', 'Sesión cerrada con éxito' );
    localStorage.setItem( 'status', 'success' )
});
mensajes.scrollTop = 100000;



// validarJWT
const validarJWT = async() => {

    const token = localStorage.getItem( 'token' );
    if ( token.length <= 10 ) {
        localStorage.setItem( 'token', '' );
        window.location.href = './index.html';
        localStorage.setItem( 'alert', 'Primero inicia sesión' );
        localStorage.setItem( 'status', 'danger' )
    };
    const resp = await fetch( `${ url }/auth`, {
        headers: { 'tokensito': token }
    })
    const { usuario: usuarioDb, token: tokenDb } = await resp.json();
    localStorage.setItem( 'token', tokenDb );
    usuario = usuarioDb;
    await conectarSocket();

};


// referencias
let admins = document.querySelector( '.admins' );
let listado = '';
const inputMsg = document.querySelector( '#inputMsg' );
const enviarMsg = document.querySelector( '#enviarMsg' );
let listadoMsg;


// conectarSocket
const conectarSocket = async() => {

    socket = io({
        'extraHeaders': {
            'tokensito': localStorage.getItem( 'token' )
        }
    });

    socket.on( 'mensaje', ( payload ) => {
        listadoMsg = '';
        payload.forEach( msg => {
            listadoMsg += `
            <div class="msg">
                <p>De: ${ msg.nombre } Rol: ${ msg.rol }</p>
                <span>${ msg.mensaje } </span><br>
            </div>
            `;
        });
        mensajes.innerHTML = listadoMsg
    });

    socket.on( 'usuarios', ( payload ) => {
        const { administradores, usuarios, adminsActivos = [] } = payload;
        listado = '';
        adminsActivos.forEach( admin => {
            listado += `
                <div class="admin">
                    <h5>Nombre: ${ admin.nombre }</h5>
                    <small>Rol: Administrador </small>
                    <small>Estado: <small class="status-client">Conectado</small></small>
                </div>
            `;
        });
        admins.innerHTML = `
            <h5>Usuarios activos: ${ usuarios }</h5>
            <h5>Administradores activos: ${ administradores }</h5>
            ${ listado }
        `;
    });

};


enviarMsg.addEventListener( 'click', () => {

    const mensaje = inputMsg.value;
    if ( mensaje.length <= 0 ) return;
    socket.emit( 'mensaje', { mensaje } );
    inputMsg.value = '';

});


// core
const core = async() => {


    // validarJWT
    await validarJWT();


};
core();