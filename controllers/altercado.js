
// imports
const { request, response } = require( 'express' );
const Altercado = require( '../models/altercado' );
const Usuario = require( '../models/usuario' );
const cloudinary = require( 'cloudinary' ).v2;


// config
cloudinary.config( process.env.CLOUDINARY_URL );


// getAltercado
const getAltercado = async( req = request, res = response ) => {

    const usuario = req.usuarioAuth._id;

    const total = await Altercado.countDocuments({ usuario, estado: true });
    const altercados = await Altercado.find({ usuario, estado: true });

    res.json({ total, altercados });

};


// getAltercados
const getAltercados = async( req = request, res = response ) => {

    const { linea, estacion, tipo, status } = req.query;
    const usuario = JSON.stringify( req.usuarioAuth._id );

    const filtros = { linea, estacion, tipo, status, estado: true };
    if ( !linea ) delete filtros.linea;
    if ( !estacion ) delete filtros.estacion;
    if ( !tipo ) delete filtros.tipo;
    if ( !status ) delete filtros.status;
    const altercados = await Altercado.find( filtros );

    res.json({ altercados, usuario });

};


// getAltercadoId
const getAltercadoId = async( req = request, res = response ) => {

    const { id } = req.params;

    const altercado = await Altercado.findById( id );
    if ( JSON.stringify( altercado.usuario ) !== JSON.stringify( req.usuarioAuth._id ) ) return res.status( 401 ).json({ msg: 'No estas autorizado para editar este altercado' });

    res.json( altercado );

};


// postAltercado
const postAltercado = async( req = request, res = response ) => {

    const { linea, estacion, tipo, fechaOcurrida, horario, descripcion } = req.body;

    try {
        const altercado = new Altercado({ linea, estacion, tipo, fechaOcurrida, horario, descripcion, usuario: req.usuarioAuth._id });
        if ( req.files ) {
            const { archivo } = req.files
            const { secure_url } = await cloudinary.uploader.upload( archivo.tempFilePath );
            altercado.imagen = secure_url;
        };
        await altercado.save();
        res.json( altercado )
    } catch ( err ) {
        res.status( 500 ).json({ msg: 'Ocurrio un erro en el servidor' })
    };

};


// putAltercadoUtilidad
const putAltercadoUtilidad = async( req = request, res = response ) => {

    const { utilidad = "3" } = req.body;
    const { id } = req.params;
    const usuario = JSON.stringify( req.usuarioAuth._id );

    const { interacciones } = await Altercado.findById( id );
    let inter = interacciones.find( inter => inter.id === usuario );
    if ( inter ) {
        inter.utilidad = utilidad;
        let suma = 0;
        interacciones.forEach( inter => suma += parseInt( inter.utilidad ) );
        const promedio = (( suma / interacciones.length ).toFixed(2));
        const altercado = await Altercado.findByIdAndUpdate( id, { interacciones, utilidad: promedio } );
        return res.json( altercado );
    } else {
        interacciones.push({ id: usuario, utilidad, reporte: false });
        let suma = 0;
        interacciones.forEach( inter => suma += parseInt( inter.utilidad ) );
        const promedio = (( suma / interacciones.length ).toFixed(2));
        const altercado = await Altercado.findByIdAndUpdate( id, { interacciones, utilidad: promedio } );
        return res.json( altercado );
    };

};


// putAltercadoReporte
const putAltercadoReporte = async( req = request, res = response ) => {

    const { reporte } = req.body;
    const { id } = req.params;
    const usuario = JSON.stringify( req.usuarioAuth._id );

    const { interacciones } = await Altercado.findById( id );
    let status;
    let inter = interacciones.find( inter => inter.id === usuario );
    if ( inter ) {
        inter.reporte = reporte;
        ( interacciones.find( inter => inter.reporte == true ))
            ? status = 'reportado'
            : status = 'normal';
        const altercado = await Altercado.findByIdAndUpdate( id, { interacciones, status } );
        return res.json( altercado );
    } else {
        interacciones.push({ id: usuario, utilidad: "3", reporte });
        ( interacciones.find( inter => inter.reporte == true ))
            ? status = 'reportado'
            : status = 'normal';
        const altercado = await Altercado.findByIdAndUpdate( id, { interacciones, status } );
        return res.json( altercado );
    };

};


// putAltercado
const putAltercado = async( req = request, res = response ) => {

    const { id } = req.params;
    const { linea, estacion, tipo, fechaOcurrida, horario, descripcion } = req.body;
    const usuario = req.usuarioAuth._id;

    let altercado = await Altercado.findById( id );
    if ( !altercado ) return res.status( 400 ).json({ msg: 'La publicacion que intentas editar no existe' });
    if ( JSON.stringify( altercado.usuario ) !== JSON.stringify( usuario ) ) return res.status( 401 ).json({ msg: 'No estas autorizado para editar este altercado' });
    let imagen = altercado.imagen;
    if ( req.files ) {
        if ( altercado.imagen ) {
            const nombreArr = altercado.imagen.split('/');
            const nombre    = nombreArr[ nombreArr.length - 1 ];
            const [ public_id ] = nombre.split('.');
            cloudinary.uploader.destroy( public_id );
        };
        const { archivo } = req.files
        const { secure_url } = await cloudinary.uploader.upload( archivo.tempFilePath );
        imagen = secure_url;
    };

    altercado = await Altercado.findByIdAndUpdate( id, { linea, estacion, tipo, fechaOcurrida, horario, descripcion, imagen } )
    res.json( altercado );

};


// deleteAltercado
const deleteAltercado = async( req = request, res = response ) => {

    const { id } = req.params;
    const usuario = req.usuarioAuth._id;

    let altercado = await Altercado.findById( id );
    if ( !altercado ) return res.status( 400 ).json({ msg: 'La publicacion que intentas editar no existe' });
    if ( JSON.stringify( altercado.usuario ) !== JSON.stringify( usuario ) ) return res.status( 401 ).json({ msg: 'No estas autorizado para eliminar este altercado' });

    altercado = await Altercado.findByIdAndUpdate( id, { estado: false } );
    res.json( altercado );

};


// getAltercadoEstadisticas
const getAltercadoEstadisticas = async( req = request, res = response ) => {

    const { linea } = req.params;
    const altercados = await Altercado.find({ linea, estado: true });
    const total = await Altercado.countDocuments({ linea, estado: true });

    let estaciones = [];
    let horarios = [];
    let altercaos = [];
    altercados.forEach( altercado => {
        const nombre = altercado.estacion;
        const estacion = estaciones.find( estacion => estacion.nombre == nombre )
        if ( estacion ) {
            estacion.altercados += 1;
        } else { estaciones.push({ nombre, altercados: 1 })};
        const hora = parseInt(( altercado.horario ).substring( 0, 2 ));
        const horario = horarios.find( horario => horario.hora == hora );
        if ( horario ) {
            horario.rep += 1;
        } else { horarios.push({ hora, rep: 1 }) };
        const tipo = altercado.tipo;
        const altercao = altercaos.find( altercao => altercao.tipo == tipo );
        if ( altercao ) {
            altercao.rep += 1;
        } else { altercaos.push({ tipo, rep: 1 }) };
    });

    let numAltercados = [];
    let numHora = [];
    let numAltercaos = [];
    estaciones.forEach( estacion => numAltercados.push( estacion.altercados ) );
    horarios.forEach( horario => numHora.push( horario.rep ) );
    altercaos.forEach( altercao => numAltercaos.push( altercao.rep ) );

    const maximoEsta = Math.max( ...numAltercados );
    const minimoEsta = Math.min( ...numAltercados );
    const maximoHora = Math.max( ...numHora );
    const maximoAltercao = Math.max( ...numAltercaos );
    let estacionMaximo;
    let estacionMinimo;
    let horarioMaximo;
    let altercaoMaximo;
    estaciones.forEach( estacion => {
        if ( estacion.altercados == maximoEsta ) estacionMaximo = estacion.nombre;
        if ( estacion.altercados == minimoEsta ) estacionMinimo = estacion.nombre;
    });
    horarios.forEach( horario => { if ( horario.rep == maximoHora ) horarioMaximo = horario.hora });
    altercaos.forEach( altercao => { if ( altercao.rep == maximoAltercao ) altercaoMaximo = altercao.tipo });

    res.json({ estacionMaximo, horarioMaximo, estacionMinimo, total, altercaoMaximo });

};


// deleteAltercadoAdmin
const deleteAltercadoAdmin = async( req = request, res = response ) => {

    const { id } = req.params;

    const altercado = await Altercado.findByIdAndUpdate( id, { estado: false } );
    await Usuario.findByIdAndUpdate( altercado.usuario, { alerta: 'Hemos eliminado una publicacion tuya debido a inclumplimiento en nuestras normas' });
    res.json( altercado );

};


// exports
module.exports = {
    getAltercado,
    getAltercados,
    getAltercadoId,
    postAltercado,
    putAltercadoUtilidad,
    putAltercadoReporte,
    putAltercado,
    deleteAltercado,
    getAltercadoEstadisticas,
    deleteAltercadoAdmin
};