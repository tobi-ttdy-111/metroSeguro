
// referencias
const linea = document.querySelector( '#linea' );
const estacion = document.querySelector( '#estacion' );
const tipo = document.querySelector( '#tipo' );
const fechaOcurrida = document.querySelector( '#fechaOcurrida' );
const horario = document.querySelector( '#horario' );
const descripcion = document.querySelector( '#descripcion' );
const imagen = document.querySelector( '#imagen' );
const crear = document.querySelector( '#crear' );
const imagensita = document.querySelector( '#imagensita' );


// referenciasRes
const alerts = document.querySelector( '#alerts' );


// changeOptions
const changeOptions = ( linea ) => {

    switch ( linea ) {
        case '1':
            estacion.innerHTML = `
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
            estacion.innerHTML = `
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
            estacion.innerHTML = `
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
            estacion.innerHTML = `
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
            estacion.innerHTML = `
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
            estacion.innerHTML = `
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
            estacion.innerHTML = `
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
            estacion.innerHTML = `
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
            estacion.innerHTML = `
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
            estacion.innerHTML = `
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
            estacion.innerHTML = `
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
            estacion.innerHTML = `
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
            estacion.innerHTML = `
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

};


// eventChange
linea.addEventListener( 'change', () => {

    const lineaValor = linea.value;
    changeOptions( lineaValor );

});


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


// precarga
const precarga = async() => {

    const altercado = await fetch( `${ url }/altercadoId/${ localStorage.getItem( 'edit' ) }`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'tokensito': localStorage.getItem( 'token' )
        },
    })
    .then( res => res.json() )
    .then( data => data );
    switch ( altercado.linea ) {
        case '1':
            estacion.innerHTML = `
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
            linea.innerHTML = `
                <option value="1" selected>Línea 1 Observatorio - Pantitlán</option>
                <option value="2">Línea 2 Tasqueña - Cuatro Caminos</option>
                <option value="3">Línea 3 Indios Verdes - Universidad</option>
                <option value="4">Línea 4 Martín Carrera - Santa Anita</option>
                <option value="5">Línea 5 Pantitlán - Politécnico</option>
                <option value="6">Línea 6 El Rosario - Martín Carrera</option>
                <option value="7">Línea 7 El Rosario - Barranca del Muerto</option>
                <option value="8">Línea 8 Garibaldi-Lagunilla - Constitución de 1917</option>
                <option value="9">Línea 9 Pantitlán - Tacubaya</option>
                <option value="A">Línea A Pantitlán - La Paz</option>
                <option value="B">Línea B Buenavista - Ciudad Azteca</option>
                <option value="12">Línea 12 Tláhuac - Mixcoac</option>
            `;
        break;
        case '2':
            estacion.innerHTML = `
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
            linea.innerHTML = `
                <option value="1">Línea 1 Observatorio - Pantitlán</option>
                <option value="2" selected>Línea 2 Tasqueña - Cuatro Caminos</option>
                <option value="3">Línea 3 Indios Verdes - Universidad</option>
                <option value="4">Línea 4 Martín Carrera - Santa Anita</option>
                <option value="5">Línea 5 Pantitlán - Politécnico</option>
                <option value="6">Línea 6 El Rosario - Martín Carrera</option>
                <option value="7">Línea 7 El Rosario - Barranca del Muerto</option>
                <option value="8">Línea 8 Garibaldi-Lagunilla - Constitución de 1917</option>
                <option value="9">Línea 9 Pantitlán - Tacubaya</option>
                <option value="A">Línea A Pantitlán - La Paz</option>
                <option value="B">Línea B Buenavista - Ciudad Azteca</option>
                <option value="12">Línea 12 Tláhuac - Mixcoac</option>
            `;
        break;
        case '3':
            estacion.innerHTML = `
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
            linea.innerHTML = `
                <option value="1">Línea 1 Observatorio - Pantitlán</option>
                <option value="2">Línea 2 Tasqueña - Cuatro Caminos</option>
                <option value="3" selected>Línea 3 Indios Verdes - Universidad</option>
                <option value="4">Línea 4 Martín Carrera - Santa Anita</option>
                <option value="5">Línea 5 Pantitlán - Politécnico</option>
                <option value="6">Línea 6 El Rosario - Martín Carrera</option>
                <option value="7">Línea 7 El Rosario - Barranca del Muerto</option>
                <option value="8">Línea 8 Garibaldi-Lagunilla - Constitución de 1917</option>
                <option value="9">Línea 9 Pantitlán - Tacubaya</option>
                <option value="A">Línea A Pantitlán - La Paz</option>
                <option value="B">Línea B Buenavista - Ciudad Azteca</option>
                <option value="12">Línea 12 Tláhuac - Mixcoac</option>
            `;
        break;
        case '4':
            estacion.innerHTML = `
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
            linea.innerHTML = `
                <option value="1">Línea 1 Observatorio - Pantitlán</option>
                <option value="2">Línea 2 Tasqueña - Cuatro Caminos</option>
                <option value="3">Línea 3 Indios Verdes - Universidad</option>
                <option value="4" selected>Línea 4 Martín Carrera - Santa Anita</option>
                <option value="5">Línea 5 Pantitlán - Politécnico</option>
                <option value="6">Línea 6 El Rosario - Martín Carrera</option>
                <option value="7">Línea 7 El Rosario - Barranca del Muerto</option>
                <option value="8">Línea 8 Garibaldi-Lagunilla - Constitución de 1917</option>
                <option value="9">Línea 9 Pantitlán - Tacubaya</option>
                <option value="A">Línea A Pantitlán - La Paz</option>
                <option value="B">Línea B Buenavista - Ciudad Azteca</option>
                <option value="12">Línea 12 Tláhuac - Mixcoac</option>
            `;
        break;
        case '5':
            estacion.innerHTML = `
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
            linea.innerHTML = `
            <option value="1">Línea 1 Observatorio - Pantitlán</option>
            <option value="2">Línea 2 Tasqueña - Cuatro Caminos</option>
            <option value="3">Línea 3 Indios Verdes - Universidad</option>
            <option value="4">Línea 4 Martín Carrera - Santa Anita</option>
            <option value="5" selected>Línea 5 Pantitlán - Politécnico</option>
            <option value="6">Línea 6 El Rosario - Martín Carrera</option>
            <option value="7">Línea 7 El Rosario - Barranca del Muerto</option>
            <option value="8">Línea 8 Garibaldi-Lagunilla - Constitución de 1917</option>
            <option value="9">Línea 9 Pantitlán - Tacubaya</option>
            <option value="A">Línea A Pantitlán - La Paz</option>
            <option value="B">Línea B Buenavista - Ciudad Azteca</option>
            <option value="12">Línea 12 Tláhuac - Mixcoac</option>
        `;
        break;
        case '6':
            estacion.innerHTML = `
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
            linea.innerHTML = `
                <option value="1">Línea 1 Observatorio - Pantitlán</option>
                <option value="2">Línea 2 Tasqueña - Cuatro Caminos</option>
                <option value="3">Línea 3 Indios Verdes - Universidad</option>
                <option value="4">Línea 4 Martín Carrera - Santa Anita</option>
                <option value="5">Línea 5 Pantitlán - Politécnico</option>
                <option value="6" selected>Línea 6 El Rosario - Martín Carrera</option>
                <option value="7">Línea 7 El Rosario - Barranca del Muerto</option>
                <option value="8">Línea 8 Garibaldi-Lagunilla - Constitución de 1917</option>
                <option value="9">Línea 9 Pantitlán - Tacubaya</option>
                <option value="A">Línea A Pantitlán - La Paz</option>
                <option value="B">Línea B Buenavista - Ciudad Azteca</option>
                <option value="12">Línea 12 Tláhuac - Mixcoac</option>
            `;
        break;
        case '7':
            estacion.innerHTML = `
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
            linea.innerHTML = `
                <option value="1">Línea 1 Observatorio - Pantitlán</option>
                <option value="2">Línea 2 Tasqueña - Cuatro Caminos</option>
                <option value="3">Línea 3 Indios Verdes - Universidad</option>
                <option value="4">Línea 4 Martín Carrera - Santa Anita</option>
                <option value="5">Línea 5 Pantitlán - Politécnico</option>
                <option value="6">Línea 6 El Rosario - Martín Carrera</option>
                <option value="7" selected>Línea 7 El Rosario - Barranca del Muerto</option>
                <option value="8">Línea 8 Garibaldi-Lagunilla - Constitución de 1917</option>
                <option value="9">Línea 9 Pantitlán - Tacubaya</option>
                <option value="A">Línea A Pantitlán - La Paz</option>
                <option value="B">Línea B Buenavista - Ciudad Azteca</option>
                <option value="12">Línea 12 Tláhuac - Mixcoac</option>
            `;
        break;
        case '8':
            estacion.innerHTML = `
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
                linea.innerHTML = `
                <option value="1">Línea 1 Observatorio - Pantitlán</option>
                <option value="2">Línea 2 Tasqueña - Cuatro Caminos</option>
                <option value="3">Línea 3 Indios Verdes - Universidad</option>
                <option value="4">Línea 4 Martín Carrera - Santa Anita</option>
                <option value="5">Línea 5 Pantitlán - Politécnico</option>
                <option value="6">Línea 6 El Rosario - Martín Carrera</option>
                <option value="7">Línea 7 El Rosario - Barranca del Muerto</option>
                <option value="8" selected>Línea 8 Garibaldi-Lagunilla - Constitución de 1917</option>
                <option value="9">Línea 9 Pantitlán - Tacubaya</option>
                <option value="A">Línea A Pantitlán - La Paz</option>
                <option value="B">Línea B Buenavista - Ciudad Azteca</option>
                <option value="12">Línea 12 Tláhuac - Mixcoac</option>
            `;
        break;
        case '9':
            estacion.innerHTML = `
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
            linea.innerHTML = `
                <option value="1">Línea 1 Observatorio - Pantitlán</option>
                <option value="2">Línea 2 Tasqueña - Cuatro Caminos</option>
                <option value="3">Línea 3 Indios Verdes - Universidad</option>
                <option value="4">Línea 4 Martín Carrera - Santa Anita</option>
                <option value="5">Línea 5 Pantitlán - Politécnico</option>
                <option value="6">Línea 6 El Rosario - Martín Carrera</option>
                <option value="7">Línea 7 El Rosario - Barranca del Muerto</option>
                <option value="8">Línea 8 Garibaldi-Lagunilla - Constitución de 1917</option>
                <option value="9" selected>Línea 9 Pantitlán - Tacubaya</option>
                <option value="A">Línea A Pantitlán - La Paz</option>
                <option value="B">Línea B Buenavista - Ciudad Azteca</option>
                <option value="12">Línea 12 Tláhuac - Mixcoac</option>
            `;
        break;
        case 'A':
            estacion.innerHTML = `
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
            linea.innerHTML = `
                <option value="1">Línea 1 Observatorio - Pantitlán</option>
                <option value="2">Línea 2 Tasqueña - Cuatro Caminos</option>
                <option value="3">Línea 3 Indios Verdes - Universidad</option>
                <option value="4">Línea 4 Martín Carrera - Santa Anita</option>
                <option value="5">Línea 5 Pantitlán - Politécnico</option>
                <option value="6">Línea 6 El Rosario - Martín Carrera</option>
                <option value="7">Línea 7 El Rosario - Barranca del Muerto</option>
                <option value="8">Línea 8 Garibaldi-Lagunilla - Constitución de 1917</option>
                <option value="9">Línea 9 Pantitlán - Tacubaya</option>
                <option value="A" selected>Línea A Pantitlán - La Paz</option>
                <option value="B">Línea B Buenavista - Ciudad Azteca</option>
                <option value="12">Línea 12 Tláhuac - Mixcoac</option>
            `;
        break;
        case 'B':
            estacion.innerHTML = `
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
            linea.innerHTML = `
                <option value="1">Línea 1 Observatorio - Pantitlán</option>
                <option value="2">Línea 2 Tasqueña - Cuatro Caminos</option>
                <option value="3">Línea 3 Indios Verdes - Universidad</option>
                <option value="4">Línea 4 Martín Carrera - Santa Anita</option>
                <option value="5">Línea 5 Pantitlán - Politécnico</option>
                <option value="6">Línea 6 El Rosario - Martín Carrera</option>
                <option value="7">Línea 7 El Rosario - Barranca del Muerto</option>
                <option value="8">Línea 8 Garibaldi-Lagunilla - Constitución de 1917</option>
                <option value="9">Línea 9 Pantitlán - Tacubaya</option>
                <option value="A">Línea A Pantitlán - La Paz</option>
                <option value="B" selected>Línea B Buenavista - Ciudad Azteca</option>
                <option value="12">Línea 12 Tláhuac - Mixcoac</option>
            `;
        break;
        case 'B':
            estacion.innerHTML = `
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
            linea.innerHTML = `
                <option value="1">Línea 1 Observatorio - Pantitlán</option>
                <option value="2">Línea 2 Tasqueña - Cuatro Caminos</option>
                <option value="3">Línea 3 Indios Verdes - Universidad</option>
                <option value="4">Línea 4 Martín Carrera - Santa Anita</option>
                <option value="5">Línea 5 Pantitlán - Politécnico</option>
                <option value="6">Línea 6 El Rosario - Martín Carrera</option>
                <option value="7">Línea 7 El Rosario - Barranca del Muerto</option>
                <option value="8">Línea 8 Garibaldi-Lagunilla - Constitución de 1917</option>
                <option value="9">Línea 9 Pantitlán - Tacubaya</option>
                <option value="A">Línea A Pantitlán - La Paz</option>
                <option value="B">Línea B Buenavista - Ciudad Azteca</option>
                <option value="12" selected>Línea 12 Tláhuac - Mixcoac</option>
            `;
        break;
        default:
            estacion.innerHTML = `
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
            linea.innerHTML = `
                <option value="1" selected>Línea 1 Observatorio - Pantitlán</option>
                <option value="2">Línea 2 Tasqueña - Cuatro Caminos</option>
                <option value="3">Línea 3 Indios Verdes - Universidad</option>
                <option value="4">Línea 4 Martín Carrera - Santa Anita</option>
                <option value="5">Línea 5 Pantitlán - Politécnico</option>
                <option value="6">Línea 6 El Rosario - Martín Carrera</option>
                <option value="7">Línea 7 El Rosario - Barranca del Muerto</option>
                <option value="8">Línea 8 Garibaldi-Lagunilla - Constitución de 1917</option>
                <option value="9">Línea 9 Pantitlán - Tacubaya</option>
                <option value="A">Línea A Pantitlán - La Paz</option>
                <option value="B">Línea B Buenavista - Ciudad Azteca</option>
                <option value="12">Línea 12 Tláhuac - Mixcoac</option>
            `;
    };
    fechaOcurrida.value = altercado.fechaOcurrida;
    switch ( altercado.tipo ) {
        case 'Intentos de acoso':
            tipo.innerHTML = `
                <option value="Intentos de acoso" selected>Intentos de acoso</option>
                <option value="Fallo estructural">Fallo estructural</option>
                <option value="Fallo en el vehículo o bagón">Fallo en el vehículo o bagón</option>
                <option value="Acoso sexual">Acoso sexual</option>
                <option value="Robo">Robo</option>
                <option value="Otro">Otro</option>
            `;
        break;
        case 'Fallo estructural':
            tipo.innerHTML = `
                <option value="Intentos de acoso">Intentos de acoso</option>
                <option value="Fallo estructural" selected>Fallo estructural</option>
                <option value="Fallo en el vehículo o bagón">Fallo en el vehículo o bagón</option>
                <option value="Acoso sexual">Acoso sexual</option>
                <option value="Robo">Robo</option>
                <option value="Otro">Otro</option>
            `;
        break;
        case 'Fallo en el vehículo o bagón':
            tipo.innerHTML = `
                <option value="Intentos de acoso">Intentos de acoso</option>
                <option value="Fallo estructural">Fallo estructural</option>
                <option value="Fallo en el vehículo o bagón" selected>Fallo en el vehículo o bagón</option>
                <option value="Acoso sexual">Acoso sexual</option>
                <option value="Robo">Robo</option>
                <option value="Otro">Otro</option>
            `;
        break;
        case 'Acoso sexual':
            tipo.innerHTML = `
                <option value="Intentos de acoso">Intentos de acoso</option>
                <option value="Fallo estructural">Fallo estructural</option>
                <option value="Fallo en el vehículo o bagón">Fallo en el vehículo o bagón</option>
                <option value="Acoso sexual" selected>Acoso sexual</option>
                <option value="Robo">Robo</option>
                <option value="Otro">Otro</option>
            `;
        break;
        case 'Robo':
            tipo.innerHTML = `
                <option value="Intentos de acoso">Intentos de acoso</option>
                <option value="Fallo estructural">Fallo estructural</option>
                <option value="Fallo en el vehículo o bagón">Fallo en el vehículo o bagón</option>
                <option value="Acoso sexual">Acoso sexual</option>
                <option value="Robo" selected>Robo</option>
                <option value="Otro">Otro</option>
            `;
        break;
        case 'Otro':
            tipo.innerHTML = `
                <option value="Intentos de acoso">Intentos de acoso</option>
                <option value="Fallo estructural">Fallo estructural</option>
                <option value="Fallo en el vehículo o bagón">Fallo en el vehículo o bagón</option>
                <option value="Acoso sexual">Acoso sexual</option>
                <option value="Robo">Robo</option>
                <option value="Otro" selected>Otro</option>
            `;
        break;
        default:
            tipo.innerHTML = `
                <option value="Intentos de acoso" selected>Intentos de acoso</option>
                <option value="Fallo estructural">Fallo estructural</option>
                <option value="Fallo en el vehículo o bagón">Fallo en el vehículo o bagón</option>
                <option value="Acoso sexual">Acoso sexual</option>
                <option value="Robo">Robo</option>
                <option value="Otro">Otro</option>
            `;
        break;
    }
    horario.value = altercado.horario;
    descripcion.value = altercado.descripcion
    if ( altercado.imagen ) imagensita.src = altercado.imagen

};
precarga();


// putAltercado
const putAltercado = async() => {

    const file = imagen.files[0];
    const formData = new FormData();
    formData.append( 'archivo', file );
    formData.append( 'linea', linea.value );
    formData.append( 'estacion', estacion.value );
    formData.append( 'tipo', tipo.value );
    formData.append( 'fechaOcurrida', fechaOcurrida.value );
    formData.append( 'horario', horario.value );
    formData.append( 'descripcion', descripcion.value );
    const id = localStorage.getItem( 'edit' )
    return peticion = await fetch( `${ url }/altercado/${ id }`, {
        method: 'PUT',
        headers: {
            'tokensito': localStorage.getItem( 'token' )
        },
        body: formData
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
crear.addEventListener( 'click', async() => {

    const res = await putAltercado();
    if ( res.errors ) {
        renderErrors( res.errors );
    } else if ( res.msg ) {
        alerts.classList = 'alerts alerts-danger';
        alerts.innerHTML = `
            <span>${ res.msg }</span>
            <i class='bx bxs-x-circle' id="deleteMsg"></i>
        `;
        quitarMensaje();
    } else {
        window.location.href = './comenzar.html';
        localStorage.setItem( 'alert', 'Publicación editada exitosamente' );
        localStorage.setItem( 'status', 'success' );
    };

});


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