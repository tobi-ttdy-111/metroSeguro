
// imports
const { Router } = require( 'express' );
const { postAuth, getAuth } = require( '../controllers/auth' );
const { check } = require( 'express-validator' );
const { validarReq } = require( '../middleware/validarReq' );
const { validarJwt } = require('../middleware/validarJwt');


// router
const router = Router();


// post /auth
router.post( '/auth', [
    check( 'correo', 'El correo no es válido' ).isEmail(),
    check( 'contraseña', 'La contraseña es obligatoria' ).notEmpty(),
    validarReq
], postAuth );


// get /auth
router.get( '/auth', validarJwt, getAuth )


// exports
module.exports = router;