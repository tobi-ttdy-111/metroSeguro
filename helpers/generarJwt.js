
// imports
const jwt = require( 'jsonwebtoken' );


// generarJwt
const generarJwt = async( uid = '' ) => {
    return new Promise( ( resolve, reject ) => {

        const payload = { uid };
        jwt.sign( payload, process.env.SECRETKEY, {
            expiresIn: '30d'
        }, ( err, token ) => {
            if ( err ) {
                console.log( err );
                reject( 'No se pudo generar el token' );
            } else {
                resolve( token );
            };
        });

    });
};


// exports
module.exports = generarJwt;