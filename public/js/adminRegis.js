
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


// referenciasPost
const registrar = document.querySelector( '#registrar' );
const correo = document.querySelector( '#correo' );
const contraseña = document.querySelector( '#contraseña' );
const nombre = document.querySelector( '#nombre' );


// postAdmin
const postAdmin = async() => {

    const data = {
        "nombre": nombre.value,
        "correo": correo.value,
        "contraseña": contraseña.value,
    }
    return peticion = await fetch( `${ url }/admin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'tokensito': localStorage.getItem( 'token' )
        },
        body: JSON.stringify( data )
    })
    .then( res => res.json() )
    .then( data => data );

};


// addEvent
registrar.addEventListener( 'click', async() => {

    const res = await postAdmin();
    if ( res.errors ) {
        renderErrors( res.errors )
    } else {
        location.reload();
        localStorage.setItem( 'alert', 'Administrador registrado' );
        localStorage.setItem( 'status', 'success' )
    };

});