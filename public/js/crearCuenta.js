
// referenciasPost
const nombre = document.querySelector( '#nombre' );
const correo = document.querySelector( '#correo' );
const contraseña = document.querySelector( '#contraseña' );
const registrarme = document.querySelector( '#registrarme' );


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



// postUsuario
const postUsuario = async() => {

    const data = {
        "nombre": nombre.value,
        "correo": correo.value,
        "contraseña": contraseña.value,
        "rol": "USUARIO"
    }
    return peticion = await fetch( `${ url }/usuario`, {
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
registrarme.addEventListener( 'click', async() => {

    const res = await postUsuario();
    if ( res.errors ) {
        renderErrors( res.errors )
    } else {
        window.location.href = './index.html';
        localStorage.setItem( 'alert', 'Te has registrado correctamente' );
        localStorage.setItem( 'status', 'success' )
    };

});