
// referenciasPost
const listadoUsuarios = document.querySelector( '#listadoUsuarios' );


// referenciasRes
const alerts = document.querySelector( '#alerts' );


// quitarMensaje
const quitarMensaje = () => {

    const deleteMsg = document.querySelector( '#deleteMsg' );
    deleteMsg.style.cursor = 'pointer'
    deleteMsg.addEventListener( 'click', () => {
        alerts.innerHTML = '';
        localStorage.setItem( 'alert', '' );
        localStorage.setItem( 'status', '' );
    });

};


// alertaMsg
const alertaMsg = () => {

    const alert = localStorage.getItem( 'alert' );
    const status = localStorage.getItem( 'status' );
    if ( alert ) {
        if ( status == 'success' ) alerts.classList = 'alerts alerts-success';
        if ( status == 'danger' ) alerts.classList = 'alerts alerts-danger';
        alerts.innerHTML = `
            <span>${ alert }</span>
            <i class='bx bxs-x-circle' id="deleteMsg"></i>
        `;
        quitarMensaje();
        localStorage.setItem( 'alert', '' );
        localStorage.setItem( 'status', '' );
    };

};
alertaMsg();



// getUsuario
const getUsuario = async() => {

    return peticion = await fetch( `${ url }/usuario`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'tokensito': localStorage.getItem( 'token' )
        },
    })
    .then( res => res.json() )
    .then( data => data );

};


// deleteUsuario
const deleteUsuario = async( uid ) => {

    return peticion = await fetch( `${ url }/usuario/${ uid }`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'tokensito': localStorage.getItem( 'token' )
        },
    })
    .then( res => res.json() )
    .then( data => data );

};


// renderErrors
const renderErrors = ( errors ) => {

    alerts.classList = 'alerts alerts-danger';
    let errs = '';
    errors.forEach( err => errs += `${ err.msg } <br>`);
    alerts.innerHTML = `
        <span>${ errs }</span>
        <i class='bx bxs-x-circle' id="deleteMsg"></i>
    `;
    quitarMensaje();

};


// renderRes
const renderRes = ( usuarios ) => {

    usuarios.forEach( usuario => {
        listadoUsuarios.innerHTML += `
        <div class="usuario">
            <h5>Nombre: ${ usuario.nombre }</h5>
            <h5>Correo: ${ usuario.correo }</h5>
            <button class="reportar-btn" id="${ usuario.uid }">Eliminar</button>
        </div>
        `;
    });
    prepararEliminacion();

};


// prepararEliminacion
const prepararEliminacion = () => {

    const eliminarBtns = document.querySelectorAll( '.reportar-btn' );
    eliminarBtns.forEach( btn => {
        btn.addEventListener( 'click', async() => {
            const peticion = await deleteUsuario( btn.id );
            if ( peticion.errors ) {
                renderErrors( peticion.errors );
            } else if ( peticion.msg ) {
                alerts.innerHTML = `
                    <span>${ peticion.msg }</span>
                    <i class='bx bxs-x-circle' id="deleteMsg"></i>
                `;
                quitarMensaje();
            } else {
                localStorage.setItem( 'alert', 'Usuario eliminado' );
                localStorage.setItem( 'status', 'success' );
                window.location.href = './usuarios.html';
            };
        });
    });

};


// pedirUsuarios
const pedirUsuarios = async() => {

    const res = await getUsuario();
    if ( res.errors ) {
        localStorage.setItem( 'alert', res.errors );
        localStorage.setItem( 'status', 'danger' );
        window.location.href = './index.html';
    } else if ( res.msg ) {
        localStorage.setItem( 'alert', res.msg );
        localStorage.setItem( 'status', 'danger' );
        window.location.href = './index.html';
    } else {
        renderRes( res );
    };

};
pedirUsuarios();


// main
const main = () => {

    const navLogout = document.querySelector( '#nav-logout' );
    navLogout.addEventListener( 'click', () => {
        localStorage.setItem( 'token', '' );
        window.location.href = './index.html';
        localStorage.setItem( 'alert', 'Sesión cerrada con éxito' );
        localStorage.setItem( 'status', 'success' )
    });

    if ( !localStorage.getItem( 'token' )) {
        window.location.href = './index.html';
        localStorage.setItem( 'alert', 'Primero inicia sesión' );
        localStorage.setItem( 'status', 'danger' )
    };

};
main();