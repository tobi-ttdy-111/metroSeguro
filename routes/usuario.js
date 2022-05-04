
// imports
const { Router } = require( 'express' );
const { getUsuario,
        postUsuario,
        putUsuario,
        deleteUsuario,
        postAdmin } = require( '../controllers/usuario' );
const { check } = require( 'express-validator' );
const { validarReq } = require( '../middleware/validarReq' );
const { existeCorreo,
        existeRol,
        adminPass } = require( '../helpers/validaciones' );
const { validarJwt } = require('../middleware/validarJwt');
const { tieneRol } = require('../middleware/tieneRol');


// router
const router = Router();


// get /usuario
router.get( '/usuario', [
    validarJwt,
    tieneRol( 'ADMINISTRADOR' ),
    validarReq
], getUsuario );


// post /usuario
router.post( '/usuario', [
    check( 'correo', 'El correo no es válido' ).isEmail(),
    check( 'correo' ).custom( existeCorreo ),
    check( 'nombre', 'El nombre es obligatorio' ).notEmpty(),
    check( 'contraseña', 'La contraseña de tener mínimo 6 carácteres' ).isLength({ min: 6 }),
    check( 'rol' ).custom( existeRol ),
    validarReq
], postUsuario );


// post /admin
router.post( '/admin', [
    validarJwt,
    tieneRol( 'ADMINISTRADOR' ),
    check( 'correo', 'El correo no es válido' ).isEmail(),
    check( 'correo' ).custom( existeCorreo ),
    check( 'nombre', 'El nombre es obligatorio' ).notEmpty(),
    check( 'contraseña' ).custom( adminPass ),
    validarReq
], postAdmin )


// put /usuario
router.put( '/usuario', [
    validarJwt,
    tieneRol( 'USUARIO' ),
    validarReq
], putUsuario );


// delete /usuario
router.delete( '/usuario/:id', [
    validarJwt,
    tieneRol( 'ADMINISTRADOR' ),
    validarReq
], deleteUsuario );


// exports
module.exports = router;