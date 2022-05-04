
'use strict'


// navVariables
const navMenu = document.querySelector( '#nav-menu' );
const navToggle = document.querySelector( '#nav-toggle' );
const navClose = document.querySelector( '#nav-close' );


// navAnimation
navToggle.addEventListener( 'click', () => {
    navMenu.classList.add( 'show-menu' );
});
navClose.addEventListener( 'click', () => {
    navMenu.classList.remove( 'show-menu' );
});


// publicationsVariables
const publications = document.querySelector( '#publications' );
const publicationsOpen = document.querySelector( '#publications-open' );
const publicationsClose = document.querySelector( '#publications-close' );


// publicationsAnimation
if ( publicationsOpen ) {
    publicationsOpen.addEventListener( 'click', () => {
        publications.classList.add( 'show-publications' );
    });
}
if ( publicationsClose ) {
    publicationsClose.addEventListener( 'click', () => {
        publications.classList.remove( 'show-publications' );
    });
}


// scrollHeader
const scrollHeader = () => {
    const header = document.querySelector( '#header' );
    ( this.scrollY >= 50 )
        ? header.classList.add( 'scroll-header' )
        : header.classList.remove( 'scroll-header' );
};
window.addEventListener( 'scroll', scrollHeader )


