
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


// linea
const linea = localStorage.getItem( 'linea' );


// referenciasHtml
const title = document.querySelector( '#title' );
const h2 = document.querySelector( '#h2' );
const responseHere = document.querySelector( '#responseHere' );
const tipoAltercado = document.querySelector( '#tipoAltercado' );
title.innerHTML += linea;
h2.innerHTML += linea;


// estaciones
const estaciones = document.querySelector( '#estaciones' );
switch ( linea ) {
    case '1':
        estaciones.innerHTML = `
            <option value="all">Cualquiera</option>
            <option value="Observatorio">Observatorio</option>
            <option value="Tacubaya">Tacubaya</option>
            <option value="Juanacatlán">Juanacatlán</option>
            <option value="Chapultepec">Chapultepec</option>
            <option value="Sevilla">Sevilla</option>
            <option value="Insurgentes">Insurgentes</option>
            <option value="Cuauhtémoc">Cuauhtémoc</option>
            <option value="Balderas">Balderas</option>
            <option value="Salto del Agua">Salto del Agua</option>
            <option value="Isabel la Católica">Isabel la Católica</option>
            <option value="Pino Suárez">Pino Suárez</option>
            <option value="Merced">Merced</option>
            <option value="Candelaria">Candelaria</option>
            <option value="San Lázaro">San Lázaro</option>
            <option value="Moctezuma">Moctezuma</option>
            <option value="Balbuena">Balbuena</option>
            <option value="Boulevard Puerto Aéreo">Boulevard Puerto Aéreo</option>
            <option value="Gómez Farías">Gómez Farías</option>
            <option value="Zaragoza">Zaragoza</option>
            <option value="Pantitlán">Pantitlán</option>
        `;
    break;
    case '2':
        estaciones.innerHTML = `
            <option value="all">Cualquiera</option>
            <option value="Cuatro Caminos">Cuatro Caminos</option>
            <option value="Panteones">Panteones</option>
            <option value="Tacuba">Tacuba</option>
            <option value="Cuitláhuac">Cuitláhuac</option>
            <option value="Popotla">Popotla</option>
            <option value="Colegio">Colegio Militar</option>
            <option value="Normal">Normal</option>
            <option value="San Cosme">San Cosme</option>
            <option value="Revolución">Revolución</option>
            <option value="Hidalgo">Hidalgo</option>
            <option value="Bellas Artes">Bellas Artes</option>
            <option value="Allende">Allende</option>
            <option value="Zócalo/Tenochtitlan">Zócalo/Tenochtitlan</option>
            <option value="Pino Suárez">Pino Suárez</option>
            <option value="San Antonio Abad">San Antonio Abad</option>
            <option value="Chabacano">Chabacano</option>
            <option value="Viaducto">Viaducto</option>
            <option value="Xola">Xola</option>
            <option value="Villa de Cortés">Villa de Cortés</option>
            <option value="Nativitas">Nativitas</option>
            <option value="Portales">Portales</option>
            <option value="Ermita">Ermita</option>
            <option value="General Anaya">General Anaya</option>
            <option value="Tasqueña">Tasqueña</option>
        `;
    break;
    case '3':
        estaciones.innerHTML = `
            <option value="all">Cualquiera</option>
            <option value="Indios Verdes">Indios Verdes</option>
            <option value="Deportivo 18 de Marzo">Deportivo 18 de Marzo</option>
            <option value="Potrero">Potrero</option>
            <option value="La Raza">La Raza</option>
            <option value="Tlatelolco">Tlatelolco</option>
            <option value="Guerrero">Guerrero</option>
            <option value="Hidalgo">Hidalgo</option>
            <option value="Juárez">Juárez</option>
            <option value="Balderas">Balderas</option>
            <option value="Niños Héroes">Niños Héroes</option>
            <option value="Hospital General">Hospital General</option>
            <option value="Centro Médico">Centro Médico</option>
            <option value="Etiopía-Plaza de la Transparencia">Etiopía-Plaza de la Transparencia</option>
            <option value="Eugenia">Eugenia</option>
            <option value="División del Norte">División del Norte</option>
            <option value="Zapata">Zapata</option>
            <option value="Coyoacán">Coyoacán</option>
            <option value="Viveros-Derechos Humanos">Viveros-Derechos Humanos</option>
            <option value="Miguel Ángel de Quevedo">Miguel Ángel de Quevedo</option>
            <option value="Copilco">Copilco</option>
            <option value="Universidad">Universidad</option>
        `;
    break;
    case '4':
        estaciones.innerHTML = `
            <option value="all">Cualquiera</option>
            <option value="Martín Carrera">Martín Carrera</option>
            <option value="Talismán">Talismán</option>
            <option value="Bondojito">Bondojito</option>
            <option value="Consulado">Consulado</option>
            <option value="Canal del Norte">Canal del Norte</option>
            <option value="Morelos">Morelos</option>
            <option value="Candelaria">Candelaria</option>
            <option value="Fray Servando">Fray Servando</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Santa Anita">Santa Anita</option>
        `;
    break;
    case '5':
        estaciones.innerHTML = `
            <option value="all">Cualquiera</option>
            <option value="Politécnico">Politécnico</option>
            <option value="Instituto del Petróleo">Instituto del Petróleo</option>
            <option value="Autobuses del Norte">Autobuses del Norte</option>
            <option value="La Raza">La Raza</option>
            <option value="Misterios">Misterios</option>
            <option value="Valle Gómez">Valle Gómez</option>
            <option value="Consulado">Consulado</option>
            <option value="Eduardo Molina">Eduardo Molina</option>
            <option value="Aragón">Aragón</option>
            <option value="Oceanía">Oceanía</option>
            <option value="Terminal Aérea">Terminal Aérea</option>
            <option value="Hangares">Hangares</option>
            <option value="Pantitlán">Pantitlán</option>
        `;
    break;
    case '6':
        estaciones.innerHTML = `
            <option value="all">Cualquiera</option>
            <option value="El Rosario">El Rosario</option>
            <option value="Tezozómoc">Tezozómoc</option>
            <option value="UAM-Azcapotzalco">UAM-Azcapotzalco</option>
            <option value="Ferrería/Arena Ciudad de México">Ferrería/Arena Ciudad de México</option>
            <option value="Norte 45">Norte 45</option>
            <option value="Vallejo">Vallejo</option>
            <option value="Instituto del Petróleo">Instituto del Petróleo</option>
            <option value="Lindavista">Lindavista</option>
            <option value="Deportivo 18 de marzo">Deportivo 18 de marzo</option>
            <option value="La Villa-Basílica">La Villa-Basílica</option>
            <option value="Martín Carrera">Martín Carrera</option>
        `;
    break;
    case '7':
        estaciones.innerHTML = `
            <option value="all">Cualquiera</option>
            <option value="El Rosario">El Rosario</option>
            <option value="Aquiles Serdán">Aquiles Serdán</option>
            <option value="Camarones">Camarones</option>
            <option value="Refinería">Refinería</option>
            <option value="Tacuba">Tacuba</option>
            <option value="San Joaquín">San Joaquín</option>
            <option value="Polanco">Polanco</option>
            <option value="Auditorio">Auditorio</option>
            <option value="Constituyentes">Constituyentes</option>
            <option value="Tacubaya">Tacubaya</option>
            <option value="San Pedro de los Pinos">San Pedro de los Pinos</option>
            <option value="San Antonio">San Antonio</option>
            <option value="Mixcoac">Mixcoac</option>
            <option value="Barranca del Muerto">Barranca del Muerto</option>
        `;
    break;
    case '8':
        estaciones.innerHTML = `
            <option value="all">Cualquiera</option>
            <option value="Garibaldi-Lagunilla">Garibaldi-Lagunilla</option>
            <option value="Bellas Artes">Bellas Artes</option>
            <option value="San Juan de Letrán">San Juan de Letrán</option>
            <option value="Salto del Agua">Salto del Agua</option>
            <option value="Doctores">Doctores</option>
            <option value="Obrera">Obrera</option>
            <option value="Chabacano">Chabacano</option>
            <option value="La Viga">La Viga</option>
            <option value="Santa Anita">Santa Anita</option>
            <option value="Coyuya">Coyuya</option>
            <option value="Iztacalco">Iztacalco</option>
            <option value="Apatlaco">Apatlaco</option>
            <option value="Aculco">Aculco</option>
            <option value="Escuadrón 201">Escuadrón 201</option>
            <option value="Atlalilco">Atlalilco</option>
            <option value="Iztapalapa">Iztapalapa</option>
            <option value="Cerro de la Estrella">Cerro de la Estrella</option>
            <option value="UAM-I">UAM-I</option>
            <option value="Constitución de 1917">Constitución de 1917</option>
        `;
    break;
    case '9':
        estaciones.innerHTML = `
            <option value="all">Cualquiera</option>
            <option value="Tacubaya">Tacubaya</option>
            <option value="Patriotismo">Patriotismo</option>
            <option value="Chilpancingo">Chilpancingo</option>
            <option value="Centro Médico">Centro Médico</option>
            <option value="Lázaro Cárdenas">Lázaro Cárdenas</option>
            <option value="Chabacano">Chabacano</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Mixiuhca">Mixiuhca</option>
            <option value="Velódromo">Velódromo</option>
            <option value="Ciudad Deportiva">Ciudad Deportiva</option>
            <option value="Puebla">Puebla</option>
            <option value="Pantitlán">Pantitlán</option>
        `;
    break;
    case 'A':
        estaciones.innerHTML = `
            <option value="all">Cualquiera</option>
            <option value="Pantitlán">Pantitlán</option>
            <option value="Agrícola Oriental">Agrícola Oriental</option>
            <option value="Canal de San Juan">Canal de San Juan</option>
            <option value="Tepalcates">Tepalcates</option>
            <option value="Guelatao">Guelatao</option>
            <option value="Peñón Viejo">Peñón Viejo</option>
            <option value="Acatitla">Acatitla</option>
            <option value="Santa Marta">Santa Marta</option>
            <option value="Los Reyes">Los Reyes</option>
            <option value="La Paz">La Paz</option>
        `;
    break;
    case 'B':
        estaciones.innerHTML = `
            <option value="all">Cualquiera</option>
            <option value="Buenavista">Buenavista</option>
            <option value="Guerrero">Guerrero</option>
            <option value="Garibaldi-Lagunilla">Garibaldi-Lagunilla</option>
            <option value="Lagunilla">Lagunilla</option>
            <option value="Tepito">Tepito</option>
            <option value="Morelos">Morelos</option>
            <option value="San Lázaro">San Lázaro</option>
            <option value="Ricardo Flores Magón">Ricardo Flores Magón</option>
            <option value="Romero Rubio">Romero Rubio</option>
            <option value="Oceanía">Oceanía</option>
            <option value="Deportivo Oceanía">Deportivo Oceanía</option>
            <option value="Bosque de Aragón">Bosque de Aragón</option>
            <option value="Villa de Aragón">Villa de Aragón</option>
            <option value="Nezahualcóyotl">Nezahualcóyotl</option>
            <option value="Impulsora">Impulsora</option>
            <option value="Río de los Remedios">Río de los Remedios</option>
            <option value="Múzquiz">Múzquiz</option>
            <option value="Ecatepec">Ecatepec</option>
            <option value="Olímpica">Olímpica</option>
            <option value="Plaza Aragón">Plaza Aragón</option>
            <option value="Ciudad Azteca">Ciudad Azteca</option>
        `;
    break;
    case 'B':
        estaciones.innerHTML = `
            <option value="all">Cualquiera</option>
            <option value="Tláhuac">Tláhuac</option>
            <option value="Tlaltenco">Tlaltenco</option>
            <option value="Zapotitlán">Zapotitlán</option>
            <option value="Nopalera">Nopalera</option>
            <option value="Olivos">Olivos</option>
            <option value="Tezonco">Tezonco</option>
            <option value="Periférico Oriente">Periférico Oriente</option>
            <option value="Calle 11">Calle 11</option>
            <option value="Lomas Estrella">Lomas Estrella</option>
            <option value="San Andrés Tomatlán">San Andrés Tomatlán</option>
            <option value="Culhuacán">Culhuacán</option>
            <option value="Atlalilco">Atlalilco</option>
            <option value="Mexicaltzingo">Mexicaltzingo</option>
            <option value="Ermita">Ermita</option>
            <option value="Eje Central">Eje Central</option>
            <option value="Parque de los Venados">Parque de los Venados</option>
            <option value="Zapata">Zapata</option>
            <option value="Hospital 20 de Noviembre">Hospital 20 de Noviembre</option>
            <option value="Insurgentes Sur">Insurgentes Sur</option>
            <option value="Mixcoac">Mixcoac</option>
        `;
    break;
    default:
        estaciones.innerHTML = `
            <option value="all">Cualquiera</option>
            <option value="Observatorio">Observatorio</option>
            <option value="Tacubaya">Tacubaya</option>
            <option value="Juanacatlán">Juanacatlán</option>
            <option value="Chapultepec">Chapultepec</option>
            <option value="Sevilla">Sevilla</option>
            <option value="Insurgentes">Insurgentes</option>
            <option value="Cuauhtémoc">Cuauhtémoc</option>
            <option value="Balderas">Balderas</option>
            <option value="Salto del Agua">Salto del Agua</option>
            <option value="Isabel la Católica">Isabel la Católica</option>
            <option value="Pino Suárez">Pino Suárez</option>
            <option value="Merced">Merced</option>
            <option value="Candelaria">Candelaria</option>
            <option value="San Lázaro">San Lázaro</option>
            <option value="Moctezuma">Moctezuma</option>
            <option value="Balbuena">Balbuena</option>
            <option value="Boulevard Puerto Aéreo">Boulevard Puerto Aéreo</option>
            <option value="Gómez Farías">Gómez Farías</option>
            <option value="Zaragoza">Zaragoza</option>
            <option value="Pantitlán">Pantitlán</option>
        `;
};


// leerEstacion
let estacion = 'all'
estaciones.addEventListener( 'change', () => {
    estacion = estaciones.value;
    cargarPublicaciones();
});


// leertTipo
let tipo = 'all';
tipoAltercado.addEventListener( 'change', () => {
    tipo = tipoAltercado.value;
    cargarPublicaciones();
});


// getPublicaciones
const getPublicaciones = async() => {

    let query = `?linea=${ linea }`
    if ( estacion != 'all' ) query += `&estacion=${ estacion }`;
    if ( tipo != 'all' ) query += `&tipo=${ tipo }`;
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


// putaltercadoUtilidad
const putaltercadoUtilidad = async( id, utilidad ) => {

    const data = { utilidad };
    return peticion = await fetch( `${ url }/altercadoUtilidad/${ id }`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'tokensito': localStorage.getItem( 'token' )
        },
        body: JSON.stringify( data )
    })
    .then( res => res.json() )
    .then( data => data );

};


// prepararPutUtilidad
const prepararPutUtilidad = ( ) => {

    const putUtilBtns = document.querySelectorAll( '.selectUtilidad' );
    putUtilBtns.forEach( btn => {
        btn.addEventListener( 'change', async() => {
            const peticion = await putaltercadoUtilidad( btn.id, btn.value );
            if ( peticion.errors ) {
                window.location.href = './index.html';
                localStorage.setItem( 'alert', 'Perdimos la conexion con tu cuenta' );
                localStorage.setItem( 'status', 'danger' );
                localStorage.setItem( 'token', '' );
            } else if ( peticion.msg ) {
                window.location.href = './index.html';
                localStorage.setItem( 'alert', 'No estas autorizado para eliminar este altercado' );
                localStorage.setItem( 'status', 'danger' );
                localStorage.setItem( 'token', '' );
            } else {
                location.reload();
            }
        });
    });

};


// putaltercadoReporte
const putaltercadoReporte = async( id, reporte ) => {

    const data = { reporte };
    return peticion = await fetch( `${ url }/altercadoReporte/${ id }`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'tokensito': localStorage.getItem( 'token' )
        },
        body: JSON.stringify( data )
    })
    .then( res => res.json() )
    .then( data => data );

};


// prepararPutReporteFalse
const prepararPutReporteFalse = ( ) => {

    const putUtilBtns = document.querySelectorAll( '.cancel' );
    putUtilBtns.forEach( btn => {
        btn.addEventListener( 'click', async() => {
            const peticion = await putaltercadoReporte( btn.id, false );
            if ( peticion.errors ) {
                window.location.href = './index.html';
                localStorage.setItem( 'alert', 'Perdimos la conexion con tu cuenta' );
                localStorage.setItem( 'status', 'danger' );
                localStorage.setItem( 'token', '' );
            } else if ( peticion.msg ) {
                window.location.href = './index.html';
                localStorage.setItem( 'alert', 'No estas autorizado para eliminar este altercado' );
                localStorage.setItem( 'status', 'danger' );
                localStorage.setItem( 'token', '' );
            } else {
                location.reload();
                localStorage.setItem( 'alert', 'Reporte cancelado' );
                localStorage.setItem( 'status', 'success' )
            }
        });
    });

};


// prepararPutReporteTrue
const prepararPutReporteTrue = ( ) => {

    const putUtilBtns = document.querySelectorAll( '.reportjg' );
    putUtilBtns.forEach( btn => {
        btn.addEventListener( 'click', async() => {
            const peticion = await putaltercadoReporte( btn.id, true );
            if ( peticion.errors ) {
                window.location.href = './index.html';
                localStorage.setItem( 'alert', 'Perdimos la conexion con tu cuenta' );
                localStorage.setItem( 'status', 'danger' );
                localStorage.setItem( 'token', '' );
            } else if ( peticion.msg ) {
                window.location.href = './index.html';
                localStorage.setItem( 'alert', 'No estas autorizado para eliminar este altercado' );
                localStorage.setItem( 'status', 'danger' );
                localStorage.setItem( 'token', '' );
            } else {
                location.reload();
                localStorage.setItem( 'alert', 'Publicación reportada' );
                localStorage.setItem( 'status', 'success' );
            }
        });
    });

};


// btnReportar
const btnReportar = ( reporte, id ) => {

    if ( reporte ) { return `<button class="reportar-btn cancel" id="${ id }">Cancelar reporte</button>`
    } else { return `<button class="reportar-btn reportjg" id="${ id }">Reportar</button>` }

};


// colocarDes
const colocarDes = ( descripcion ) => {

    if ( descripcion ) {
        return `<p class="ocult">Descripcion: ${ descripcion }</p>`
    } else {
        return ``;
    };

}


// renderPublicaciones
const renderPublicaciones = ( res, usuario ) => {

    const renderUtilidad = ( utilidad ) => {
        switch ( utilidad ) {
            case '1':
                return `
                <option value="1" selected>&nbsp 1 &nbsp</option>
                <option value="2">&nbsp 2 &nbsp</option>
                <option value="3">&nbsp 3 &nbsp</option>
                <option value="4">&nbsp 4 &nbsp</option>
                <option value="5">&nbsp 5 &nbsp</option>
            `;
            case '2':
                return `
                <option value="1">&nbsp 1 &nbsp</option>
                <option value="2" selected>&nbsp 2 &nbsp</option>
                <option value="3">&nbsp 3 &nbsp</option>
                <option value="4">&nbsp 4 &nbsp</option>
                <option value="5">&nbsp 5 &nbsp</option>
            `;
            case '3':
                return `
                <option value="1">&nbsp 1 &nbsp</option>
                <option value="2">&nbsp 2 &nbsp</option>
                <option value="3" selected>&nbsp 3 &nbsp</option>
                <option value="4">&nbsp 4 &nbsp</option>
                <option value="5">&nbsp 5 &nbsp</option>
            `;
            case '4':
                return `
                <option value="1">&nbsp 1 &nbsp</option>
                <option value="2">&nbsp 2 &nbsp</option>
                <option value="3">&nbsp 3 &nbsp</option>
                <option value="4" selected>&nbsp 4 &nbsp</option>
                <option value="5">&nbsp 5 &nbsp</option>
            `;
            case '5':
                return `
                <option value="1">&nbsp 1 &nbsp</option>
                <option value="2">&nbsp 2 &nbsp</option>
                <option value="3">&nbsp 3 &nbsp</option>
                <option value="4">&nbsp 4 &nbsp</option>
                <option value="5" selected>&nbsp 5 &nbsp</option>
            `;
            default:
                return `
                <option value="1">&nbsp 1 &nbsp</option>
                <option value="2">&nbsp 2 &nbsp</option>
                <option value="3" selected>&nbsp 3 &nbsp</option>
                <option value="4">&nbsp 4 &nbsp</option>
                <option value="5">&nbsp 5 &nbsp</option>
            `;
            break;
        }
    };
    responseHere.innerHTML = '';
    res.forEach( publicacion => {
        const interacciones = publicacion.interacciones;
        let interaccion = interacciones.find( inter => inter.id == usuario );
        if ( !interaccion ) {
            interaccion = { utilidad: "3", reporte: false }
        };
        responseHere.innerHTML += `
        <div class="altercado">
            <img src="${ publicacion.imagen || './img/logoMetro.png' }" alt="">
            <div class="altercado__content">
                <p>Estación: ${ publicacion.estacion }</p>
                <p>Tipo de altercado: ${ publicacion.tipo }</p>
                <p class="date">Fecha: ${ publicacion.fechaOcurrida } &nbsp &nbsp &nbsp Horario: ${ publicacion.horario }</p>
                ${ colocarDes( publicacion.descripcion ) }
                <p>Calificación promedio:  <small> ${ publicacion.utilidad } / 5</small></p>
                <div class="altercado__calificar">
                    <span>¿Qué tan util te resulto está publicación?</span>
                    <select id="${ publicacion._id }" class="selectUtilidad">
                        ${ renderUtilidad( interaccion.utilidad ) }
                    </select>
                    &nbsp &nbsp &nbsp ${ btnReportar( interaccion.reporte, publicacion._id ) } <span class="minDate">Fecha de publicación: ${ publicacion.createdAt }</span>
                </div>
            </div>
        </div>
        `;
    });
    prepararPutUtilidad();
    prepararPutReporteFalse();
    prepararPutReporteTrue();

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
        renderPublicaciones( res.altercados, res.usuario );
    };

};
cargarPublicaciones();


// reportarPublicacion
const reportarPublicacion = ( ) => {

    const reportarBts = document.querySelectorAll( '.reportar-btn' );
    reportarBts.forEach( btn => {
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


// reportar
const reportar = async( id ) => {

    return peticion = await fetch( `${ url }/altercado/${ id }`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'tokensito': localStorage.getItem( 'token' )
        },
    })
    .then( res => res.json() )
    .then( data => data );

};