
// referenciasRes
const alerts = document.querySelector( '#alerts' );
const altercados = document.querySelector( '.altercados' );


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


// colocarDes
const colocarDes = ( descripcion ) => {

    if ( descripcion ) {
        return `<p class="ocult">Descripcion: ${ descripcion }</p>`
    } else {
        return ``;
    };

}


// changeTipo
const changeTipo = () => {

    let tipo = 'all';
    const select = document.querySelector( '#tipo' );
    select.addEventListener( 'change', () => {
        tipo = select.value;
        cargarPublicaciones();
    });

};
changeTipo();


// changeEstado
const changeEstado = () => {

    let estado = 'all';
    const select = document.querySelector( '#estado' );
    select.addEventListener( 'change', () => {
        estado = select.value;
        cargarPublicaciones();
    });

};
changeEstado();


// changeLinea
const changeLinea = () => {

    let linea = 'all';
    const select = document.querySelector( '#linea' );
    select.addEventListener( 'change', () => {
        linea = select.value;
        cargarPublicaciones();
    });

};
changeLinea();



// getPublicaciones
const getPublicaciones = async() => {

    let query = `?`
    if ( tipo.value != 'all' ) query += `&tipo=${ tipo.value }`;
    if ( estado.value != 'all' ) query += `&status=${ estado.value }`;
    if ( linea.value != 'all' ) query += `&linea=${ linea.value }`;
    return peticion = await fetch( `${ url }/altercados${ query }`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'tokensito': localStorage.getItem( 'token' )
        },
    })
    .then( res => res.json() )
    .then( data => data );

};


// contarReportes
const contarReportes = ( interacciones ) => {

    let cantidad = 0;
    interacciones.forEach( interaccion => {
        if ( interaccion.reporte = true ) cantidad += 1;
    });
    return `${ cantidad }`;

};


// renderPublicaciones
const renderPublicaciones = ( res ) => {

    altercados.innerHTML = '';
    res.forEach( publicacion => {
        altercados.innerHTML += `
        <div class="altercado">
            <img src="${ publicacion.imagen || `./img/linea${ publicacion.linea }.png` }" alt="">
            <div class="altercado__content">
                <p>Estación: ${ publicacion.estacion }</p>
                <p>Tipo de altercado: ${ publicacion.tipo }</p>
                <p class="date">Fecha: ${ publicacion.fechaOcurrida } &nbsp &nbsp &nbsp Horario: ${ publicacion.horario }</p>
                ${ colocarDes( publicacion.descripcion ) }
                <p>Numero de reportes: ${ contarReportes( publicacion.interacciones ) } </p><br>
                <p><button class="reportar-btn" id="${ publicacion._id }">Eliminar</button></p>
            </div>
        </div>
        `;
    });
    prepararDelete();

};


// cargarPublicaciones
const cargarPublicaciones = async() => {

    const res = await getPublicaciones();
    if ( res.errors ) {
        renderErrors( res.errors );
    } else if ( res.msg ) {
        alerts.classList = 'alerts alerts-danger';
        alerts.innerHTML = `
            <span>${ res.msg }</span>
            <i class='bx bxs-x-circle' id="deleteMsg"></i>
        `;
        localStorage.setItem( 'token', '' );
        window.location.href = './index.html';
        quitarMensaje();
    } else {
        renderPublicaciones( res.altercados );
    };

};
cargarPublicaciones();


// deleteAltercado
const deleteAltercado = async( id ) => {

    return peticion = await fetch( `${ url }/altercado/admin/${ id }`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'tokensito': localStorage.getItem( 'token' )
        },
    })
    .then( res => res.json() )
    .then( data => data );

};


// prepararDelete
const prepararDelete = () => {

    const deleteBtns = document.querySelectorAll( '.reportar-btn' );
    deleteBtns.forEach( btn => {
        btn.addEventListener( 'click', async() => {
            const peticion = await deleteAltercado( btn.id );
            if ( peticion.errors ) {
                window.location.href = './index.html';
                localStorage.setItem( 'alert', 'Perdimos la conexion con tu cuenta' );
                localStorage.setItem( 'status', 'danger' )
                localStorage.setItem( 'token', '' );
            } else if ( peticion.msg ) {
                window.location.href = './index.html';
                localStorage.setItem( 'alert', 'Perdimos la conexion con tu cuenta' );
                localStorage.setItem( 'status', 'danger' );
                localStorage.setItem( 'token', '' );
            } else {
                location.reload();
                localStorage.setItem( 'alert', 'Altercado eliminado' );
                localStorage.setItem( 'status', 'success' );
            };
        });
    });

}