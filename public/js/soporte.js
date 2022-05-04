
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