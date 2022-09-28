//Elementos del dom pertenecientes al form
let loginForm = document.forms.loginForm; //esto funciona solo para forms.
let containerForm = document.querySelector('.container-form');

//Elementos del dom pertenecientes a la ALERTA
let divAlert = document.querySelector('.wrong');
let wrongTitle = document.querySelector('.wrong-title');
let wrongText = document.querySelector('.wrong-text');
let wrongSecondaryBt = document.querySelector('.wrong-secondary-bt');
let wrongPrimaryBt = document.querySelector('.wrong-primary-bt');


const { nombreUsuario, password } = loginForm.elements;


loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (nombreUsuario.value == "" || password.value == "") {

        alert("Ambos campos son obligatorios")
    } else {

        let data = {
            "email": nombreUsuario.value,
            "password": password.value
        }

        let resp = await loginSubmit(data);
        console.log(resp);

        if (resp.status.status == 200) {
            localStorage.setItem("userLogged", JSON.stringify(resp.info));
            console.log(localStorage.getItem('userLogged'));
            window.location.href = 'http://localhost:3040/';
        } else {
            divAlert.classList.toggle('show')
            loginForm.style = "display: none"
            wrongTitle.innerHTML = resp.info.error
            divAlert.style.animationDuration = '1000ms';
        }

    }
    //Codigo para accionar al boton reintentar
    wrongSecondaryBt.addEventListener('click', () => {
        loginForm.style = "display: flex";
        divAlert.classList.remove('show');
    })
    //codigo para detener animacion divAlert
    containerForm.addEventListener('mouseover', () => {
        divAlert.style.animationDuration = '0ms';
    })
    //Codigo para accionar al boton recuperar contraseña
    wrongPrimaryBt.addEventListener('click', () => {
        window.location.href = '/recovery-password'
    })





})

