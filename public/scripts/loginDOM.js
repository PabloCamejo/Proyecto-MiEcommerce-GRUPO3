const logForm = document.forms.loginForm
const {nombreUsuario, password,logSubmit} = logForm.elements

    //Llamo a los spans vacios donde pegare mensajes de error
const nameSpan = document.querySelector('.spanName-login')
const passSpan = document.querySelector('.spanPass-login')


    // Validacion del formulario. 
logForm.addEventListener('submit', (event)=>{
    const name = nombreUsuario.value;
    const pass = password.value;

    if(validacion(name,pass)){
        logIn(name,pass)
    }else{
        event.preventDefault()
    }
    
})

    //Eventos de los inputs
password.addEventListener('keydown',()=>{
    const name = nombreUsuario.value;
    const pass = password.value;
    getDisabled(name,pass);
    // passMessage(pass)
})
nombreUsuario.addEventListener('keydown',()=>{
    const name = nombreUsuario.value;
    const pass = password.value;
    getDisabled(name,pass);
    // nameMessage(name);
})






/////FUNCION DE VALIDACION Y FUNCIONES DE MENSAJES//////
function validacion(name,pass){
    if(name.length <= 2 ||  pass.length <= 5 ){
        return false
    }else{
        return true
    }
}
function getDisabled(name, pass){
    if(validacion(name,pass)){
        logSubmit.classList.remove('login-dis')
        logSubmit.classList.add('login-able')
    }else{
        logSubmit.classList.remove('login-able')
        logSubmit.classList.add('login-dis')
    }
}

// function nameMessage(name){
//     if(name.length <=2){
//         nameSpan.innerHTML='Su usuario debe tener más de 2 caracteres'
//     }else{
//         nameSpan.innerHTML=''
//     }
// }
// function passMessage(pass){
//     if(pass.length <=5){
//         passSpan.innerHTML='Su contraseña debe tener más de 5 caracteres'
//     }else{
//         passSpan.innerHTML=''
//     }
// }

