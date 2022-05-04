
// referenciasPost
const correo = document.querySelector( '#correo' );
const contraseña = document.querySelector( '#contraseña' );
const iniciarSesion = document.querySelector( '#iniciarSesion' );


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



// postAuth
const postAuth = async() => {

    const data = {
        "correo": correo.value,
        "contraseña": contraseña.value,
    }
    return peticion = await fetch( `${ url }/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( data )
    })
    .then( res => res.json() )
    .then( data => data );

};


// renderErrors
const renderErrors = ( errors ) => {

    let errs = '';
    alerts.classList = 'alerts alerts-danger';
    errors.forEach( err => errs += `${ err.msg } <br>`);
    alerts.innerHTML = `
        <span>${ errs }</span>
        <i class='bx bxs-x-circle' id="deleteMsg"></i>
    `;
    quitarMensaje();

};


// addEvent
iniciarSesion.addEventListener( 'click', async() => {

    const res = await postAuth();
    if ( res.errors ) {
        renderErrors( res.errors )
    } else if ( res.msg ) {
        alerts.classList = 'alerts alerts-danger';
        alerts.innerHTML = `
            <span>${ res.msg }</span>
            <i class='bx bxs-x-circle' id="deleteMsg"></i>
        `;
        quitarMensaje();
    } else {
        ( res.usuario.rol == 'ADMINISTRADOR' )
            ? window.location.href = './usuarios.html'
            : window.location.href = './comenzar.html';
        localStorage.setItem( 'ops', res.usuario.alerta )
        localStorage.setItem( 'token', res.token );
        localStorage.setItem( 'alert', 'Inicio de sesion exitoso' );
        localStorage.setItem( 'status', 'success' )
    };

});