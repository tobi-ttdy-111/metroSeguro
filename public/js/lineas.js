
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


// main
const main = () => {


    // referenciasPost
    const publicaciones = document.querySelector( '#publicaciones' );
    const total = document.querySelector( '#total' );

    // cerrarSesion
    const navLogout = document.querySelector( '#nav-logout' );
    navLogout.addEventListener( 'click', () => {
        localStorage.setItem( 'token', '' );
        window.location.href = './index.html';
        localStorage.setItem( 'alert', 'Sesión cerrada con éxito' );
        localStorage.setItem( 'status', 'success' )
    });


    // token
    const token = localStorage.getItem( 'token' );
    if ( !token ) {
        window.location.href = './index.html';
        localStorage.setItem( 'alert', 'Primero inicia sesión' );
        localStorage.setItem( 'status', 'danger' )
    };


    // putUsuario
    const putUsuario = async() => {

        return peticion = await fetch( `${ url }/usuario`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'tokensito': localStorage.getItem( 'token' )
            }
        })
        .then( res => res.json() )
        .then( data => data );

    };


    // ops
    const ops = localStorage.getItem( 'ops' );
    if ( ops.length > 10 ) {
        alerts.classList = 'alerts alerts-danger';
        alerts.innerHTML = `
            <span>${ ops }</span>
            <i class='bx bxs-x-circle' id="putUsuBtn"></i>
        `;
        const putUsuBtn = document.querySelector( '#putUsuBtn' );
        putUsuBtn.addEventListener( 'click', async() => {
            await putUsuario();
            localStorage.setItem( 'ops', '' );
            location.reload();
        });
    };


    // getAltercado
    const getAltercado = async() => {

        return peticion = await fetch( `${ url }/altercado`, {
            method: 'GET',
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

        let errs = '';
        alerts.classList = 'alerts alerts-danger';
        errors.forEach( err => errs += `${ err.msg } <br>`);
        alerts.innerHTML = `
            <span>${ errs }</span>
            <i class='bx bxs-x-circle' id="deleteMsg"></i>
        `;
        quitarMensaje();

    };


    // deleteAltercado
    const deleteAltercado = async( id ) => {

        return peticion = await fetch( `${ url }/altercado/${ id }`, {
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
    const prepararDelete = ( ) => {

        const deleteBtns = document.querySelectorAll( '.bx-trash-alt' );
        deleteBtns.forEach( btn => {
            btn.addEventListener( 'click', async() => {
                const peticion = await deleteAltercado( btn.id );
                if ( peticion.errors ) {
                    window.location.href = './index.html';
                    localStorage.setItem( 'alert', 'Perdimos la conexion con tu cuenta' );
                    localStorage.setItem( 'status', 'danger' )
                } else if ( peticion.msg ) {
                    window.location.href = './comenzar.html';
                    localStorage.setItem( 'alert', 'No estas autorizado para eliminar este altercado' );
                    localStorage.setItem( 'status', 'danger' )
                } else {
                    location.reload();
                    localStorage.setItem( 'alert', 'Altercado borrado con exito' );
                    localStorage.setItem( 'status', 'success' )
                };
            });
        });

    };


    // prepararPut
    const prepararPut = ( ) => {

        const deleteBtns = document.querySelectorAll( '.bxs-edit' );
        deleteBtns.forEach( btn => {
            btn.addEventListener( 'click', async() => {
                localStorage.setItem( 'edit', btn.id );
                window.location.href = './editar.html'
            });
        });

    };


    // renderResponse
    const renderResponse = ( res ) => {

        res.altercados.forEach( altercado => {
            publicaciones.innerHTML += `
            <article class="publication__card">
                <div class="publication__box"><img src="${ altercado.imagen || './img/logoMetro.png' }" alt="" class="publication__img"></div>
                <div class="publication__details">
                    <h3 class="publication__title">Tipo de altercado: ${ altercado.tipo }
                    </h3>
                    <span class="publication__price">Línea: ${ altercado.linea }</span>
                    <div class="publication__amount">
                        <i class='bx bx-trash-alt publication__amount-trash' id="${ altercado._id }"></i>
                        <i class='bx bxs-edit publication__amount-trash' id="${ altercado._id }"></i>
                    </div>
                </div>
            </article>
            `;
        });
        total.innerHTML = `<span class="publication__prices-item">Total: ${ res.total } publicaiones</span>`;
        prepararDelete();
        prepararPut();

    };


    // cargarAltercado
    const cargarAltercado = async() => {

        const res = await getAltercado();
        if ( res.errors ) {
            renderErrors( res.errors )
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
            renderResponse( res );
        };

    };
    cargarAltercado();

};
main();


// lineas
const linea1 = document.querySelector( '#linea1' ).addEventListener( 'click', () => localStorage.setItem( 'linea', '1' ));
const linea2 = document.querySelector( '#linea2' ).addEventListener( 'click', () => localStorage.setItem( 'linea', '2' ));
const linea3 = document.querySelector( '#linea3' ).addEventListener( 'click', () => localStorage.setItem( 'linea', '3' ));
const linea4 = document.querySelector( '#linea4' ).addEventListener( 'click', () => localStorage.setItem( 'linea', '4' ));
const linea5 = document.querySelector( '#linea5' ).addEventListener( 'click', () => localStorage.setItem( 'linea', '5' ));
const linea6 = document.querySelector( '#linea6' ).addEventListener( 'click', () => localStorage.setItem( 'linea', '6' ));
const linea7 = document.querySelector( '#linea7' ).addEventListener( 'click', () => localStorage.setItem( 'linea', '7' ));
const linea8 = document.querySelector( '#linea8' ).addEventListener( 'click', () => localStorage.setItem( 'linea', '8' ));
const linea9 = document.querySelector( '#linea9' ).addEventListener( 'click', () => localStorage.setItem( 'linea', '9' ));
const lineaA = document.querySelector( '#lineaA' ).addEventListener( 'click', () => localStorage.setItem( 'linea', 'A' ));
const lineaB = document.querySelector( '#lineaB' ).addEventListener( 'click', () => localStorage.setItem( 'linea', 'B' ));
const linea12 = document.querySelector( '#linea12' ).addEventListener( 'click', () => localStorage.setItem( 'linea', '12' ));


// estatus
const lineasuwu = document.querySelector( '.lineasuwu' );
const estatus1 = document.querySelector( '#estatus1' );
const estatus2 = document.querySelector( '#estatus2' );
const estatus3 = document.querySelector( '#estatus3' );
const estatus4 = document.querySelector( '#estatus4' );
const estatus5 = document.querySelector( '#estatus5' );
const estatus6 = document.querySelector( '#estatus6' );
const estatus7 = document.querySelector( '#estatus7' );
const estatus8 = document.querySelector( '#estatus8' );
const estatus9 = document.querySelector( '#estatus9' );
const estatusA = document.querySelector( '#estatusA' );
const estatusB = document.querySelector( '#estatusB' );
const estatus12 = document.querySelector( '#estatus12' );


// getAltercadoEstadisticas
const getAltercadoEstadisticas = async( linea ) => {

    return peticion = await fetch( `${ url }/altercado/estadisticas/${ linea }`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'tokensito': localStorage.getItem( 'token' )
        },
    })
    .then( res => res.json() )
    .then( data => data );

};


// formatHorario
const formatHorario = ( hora ) => {

    switch ( hora ) {
        case 01: return `1:00 am `;
        case 02: return `2:00 am `;
        case 03: return `3:00 am `;
        case 04: return `4:00 am `;
        case 05: return `5:00 am `;
        case 06: return `6:00 am `;
        case 07: return `7:00 am `;
        case 08: return `8:00 am `;
        case 09: return `9:00 am `;
        case 10: return `10:00 am `;
        case 11: return `11:00 am `;
        case 12: return `12:00 pm `;
        case 13: return `01:00 pm `;
        case 14: return `02:00 pm `;
        case 15: return `03:00 pm `;
        case 16: return `04:00 pm `;
        case 17: return `05:00 pm `;
        case 18: return `06:00 pm `;
        case 19: return `07:00 pm `;
        case 20: return `08:00 pm `;
        case 21: return `09:00 pm `;
        case 22: return `10:00 pm `;
        case 23: return `11:00 pm `;
        case 24: return `12:00 pm `;
        default: return `Aun no existen publicaciones registradas`
    };

};


// optimizacionowo
const optimizacionowo = async( linea ) => {

    const resp = await getAltercadoEstadisticas( linea );
    lineasuwu.innerHTML = `
        <h2 class="section__title">Estadísticas línea ${ linea }</h2>
        <div class="linea__estadisticas">
        <img src="./img/linea${ linea }.PNG" alt="linea1">
        <div class="estadisticas">
            <span>Estación con mas altercados</span>
            <h5>${ resp.estacionMaximo || 'Ninguna' } </h5>
            <hr>
            <span>Horario con más altercados</span>
            <h5>${ formatHorario( resp.horarioMaximo ) }</h5>
            <hr>
            <span>Altercado más frecuente en la estación</span>
            <h5>${ resp.altercaoMaximo || 'Ninguno' }</h5>
            <hr>
            <span>Total de publicaciones de la línea</span>
            <h5>${ resp.total || 'Ninguno' }</h5>
            <hr>
            <span>Estación con menos altercados</span>
            <h5>${ resp.estacionMinimo || 'Ninguna'}</h5>
        </div>
    </div>
    `;

};


// eventListen
estatus1.addEventListener( 'click', async() => optimizacionowo( 1 ));
estatus2.addEventListener( 'click', async() => optimizacionowo( 2 ));
estatus3.addEventListener( 'click', async() => optimizacionowo( 3 ));
estatus4.addEventListener( 'click', async() => optimizacionowo( 4 ));
estatus5.addEventListener( 'click', async() => optimizacionowo( 5 ));
estatus6.addEventListener( 'click', async() => optimizacionowo( 6 ));
estatus7.addEventListener( 'click', async() => optimizacionowo( 7 ));
estatus8.addEventListener( 'click', async() => optimizacionowo( 8 ));
estatus9.addEventListener( 'click', async() => optimizacionowo( 9 ));
estatusA.addEventListener( 'click', async() => optimizacionowo('A' ));
estatusB.addEventListener( 'click', async() => optimizacionowo( 'B' ));
estatus12.addEventListener( 'click', async() => optimizacionowo( 12 ));
