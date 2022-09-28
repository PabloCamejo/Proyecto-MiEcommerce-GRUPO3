//REQUIERO TODOS LOS ELEMENTOS DEL HTML A LOS CUALES LE 
//VOY A CAMBIAR EL ESTILO O UTILIZAR PARA DICHO CAMBIO.
const clickOpenMenu = document.querySelector('.profile--name');
const clickCloseMenu = document.querySelector('.no-menu');
const userMenu = document.querySelector('.user-menu');
const closeSession = document.querySelector('#close-session');

//AL DAR CLICK EN EL AVATAR SE DESPLIEGA EL MENU
clickOpenMenu.addEventListener('click', function(e){
    e.preventDefault();
    page.style.overflow = "hidden";
    userMenu.classList.add('show-user-menu');
})
//AL DAR CLICK EN CUALQUIER ZONA FUERA DEL MENU Y CUANDO
//ESTE ESTA DESPLEGADO, SE CIERRA.
clickCloseMenu.addEventListener('click', function(){
    page.style.overflow = "auto";
    userMenu.classList.remove('show-user-menu');
})

//AL CERRAR SESION SE GUARDAN TODOS LOS DATOS DE LOCALSTORAGE
closeSession.addEventListener('click', function(){
    localStorage.removeItem('darkMode');
    localStorage.removeItem('userLogged');
})








