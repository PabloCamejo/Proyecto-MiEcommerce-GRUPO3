//CAPTURO EL ELEMENTO BODY 
const page = document.querySelector('body');

//CAPTURO EL ANCLA CON EL CUAL CAMBIO A DARK MODE
const clickChangeTheme = document.querySelector('#dark-mode');

//AGREGA O REMUEVE LA CLASE DARK MODE A TODA LA PAGINA
const setDarkMode = () => {
    if(localStorage.getItem('darkMode') === "true"){
        page.classList.add('body-dark-mode');
    }else{
        page.classList.remove('body-dark-mode');
    }
}

//CAMBIA EL HTML DE LA CONFIGURACION DEL DARK MODE
//DEPENDIENDO DE SI ESTA ACTIVADO O NO
const setTextConfigTheme = () => {
    const text = localStorage.getItem('darkMode') == "true" ? 
        `<i class="fa-regular fa-sun"></i><a class="menu-dark-mode" href="" > Cambiar a tema claro</a></li>` :
        `<i class="fa-regular fa-moon"></i><a href="" > Cambiar a tema oscuro</a></li>`;
    
    clickChangeTheme.innerHTML = text;
}

//SI LA URL ES LA RAIZ Y ADEMAS NO HAY UN VALOR ASIGNADO AL DARKMODE EN EL
//LOCALSTORAGE, SE AGREGA LA KEY DARKMODE CON VALUE FALSE
//!!!!!!! POR DEFECTO UN VALOR BOOLEANO ES CONVERTIDO A STRING !!!!!!!!!
if(location.href == 'http://localhost:3040/' && localStorage.getItem('darkMode') == null){
    localStorage.setItem('darkMode', false);
}

if(location.href == 'http://localhost:3040/login' || location.href == 'http://localhost:3040/register'){
    localStorage.setItem('darkMode', null);
}

//CAMBIA DE DARK MODE A WHITE MODE Y VISCEVERSA
clickChangeTheme.addEventListener('click', function(e){
    e.preventDefault();
    //SI BODY CONTIENE LA CLASE body-dark-mode DEVUELEVE TRUE, SINO FALSE (dah!)
    const estado = document.body.classList.contains('body-dark-mode');
    localStorage.setItem('darkMode', !estado);

    setTextConfigTheme();
    setDarkMode();
})

//INVOCO LAS FUNCIONES PARA QUE AL NAVEGAR ENTRE PAGINAS
//SIEMPRE SE EJECUTEN Y HAGA LOS CAMBIOS PERTINENTES.
setDarkMode();
setTextConfigTheme();






