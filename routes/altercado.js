
// imports
const { Router } = require( 'express' );
const { getAltercado,
        getAltercados,
        postAltercado,
        putAltercado,
        deleteAltercado,
        getAltercadoId,
        putAltercadoUtilidad,
        putAltercadoReporte,
        getAltercadoEstadisticas, 
        deleteAltercadoAdmin} = require( '../controllers/altercado' );
const { validarJwt } = require('../middleware/validarJwt');
const { tieneRol } = require('../middleware/tieneRol');
const { validarReq } = require( '../middleware/validarReq' );
const { check } = require( 'express-validator' );
const { existeLinea, existeTipo } = require( '../helpers/validaciones' );


// router
const router = Router();


// get /altercado
router.get( '/altercado', [
    validarJwt,
    tieneRol( 'USUARIO' ),
    validarReq
], getAltercado );


// get /altercados
router.get( '/altercados', [
    validarJwt,
    tieneRol( 'USUARIO', 'ADMINISTRADOR' ),
    validarReq
], getAltercados );


// get /altercadoId
router.get( '/altercadoId/:id', [
    validarJwt,
    tieneRol( 'USUARIO' ),
    validarReq
], getAltercadoId )


// post /altercado
router.post( '/altercado', [
    validarJwt,
    check( 'linea' ).custom( existeLinea ),
    check( 'estacion', 'La estacion es obligatoria' ).notEmpty(),
    check( 'tipo' ).custom( existeTipo ),
    check( 'horario', 'El horario es obligatorio' ).notEmpty(),
    check( 'fechaOcurrida', 'La fecha en que ocurrio el evento es requerida' ).notEmpty(),
    tieneRol( 'USUARIO' ),
    validarReq
], postAltercado );


// put /altercadoUtilidad/:id
router.put( '/altercadoUtilidad/:id', [
    validarJwt,
    tieneRol( 'USUARIO' ),
    validarReq
], putAltercadoUtilidad );


// put /altercadoReporte/:id
router.put( '/altercadoReporte/:id', [
    validarJwt,
    tieneRol( 'USUARIO' ),
    validarReq
], putAltercadoReporte );


// put /altercado/:id
router.put( '/altercado/:id', [
    validarJwt,
    tieneRol( 'USUARIO', 'ADMINISTRADOR' ),
    validarReq
], putAltercado );


// delete /altercado/:id
router.delete( '/altercado/:id', [
    validarJwt,
    tieneRol( 'USUARIO', 'ADMINISTRADOR' ),
    validarReq
], deleteAltercado );


// get /altercado/estadisticas/:linea
router.get( '/altercado/estadisticas/:linea', [
    validarJwt,
    tieneRol( 'USUARIO' ),
    validarReq
], getAltercadoEstadisticas );


// delete /altercado/adimin/:id
router.delete( '/altercado/admin/:id', [
    validarJwt,
    tieneRol( 'ADMINISTRADOR' ),
    validarReq
], deleteAltercadoAdmin )


// exports
module.exports = router;