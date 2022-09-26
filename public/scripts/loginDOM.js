// const logForm = document.querySelector("#register-form")
const logForm = document.forms.loginForm
const {nombreUsuario, password} = logForm.elements

const logSubmit = document.querySelector("#submit-login")

const nameSpan = document.querySelector('.spanName-login')
const passSpan = document.querySelector('.spanPass-login')



function validacion(name,pass){
    if(name.length <= 2 ||  pass.length <= 5 ){
        return false
    }else{
        return true
    }
}

logForm.addEventListener('submit', (event)=>{
    const name = nombreUsuario.value;
    const pass = password.value;

    if(validacion(name,pass)){
        console.log(onkeydown)
    }else{
        event.preventDefault()
    }
    
})

password.addEventListener('keydown',()=>{
    const name = nombreUsuario.value;
    const pass = password.value;
    getDisabled(name,pass);
    passMessage(pass)
})
nombreUsuario.addEventListener('keydown',()=>{
    const name = nombreUsuario.value;
    const pass = password.value;
    getDisabled(name,pass);
    nameMessage(name);
})


function getDisabled(name, pass){
    if(validacion(name,pass)){
        logSubmit.classList.remove('login-dis')
        logSubmit.classList.add('login-able')
    }else{
        logSubmit.classList.remove('login-able')
        logSubmit.classList.add('login-dis')
    }
}

function nameMessage(name){
    if(name.length <=2){
        nameSpan.innerHTML='Su usuario debe tener más de 2 caracteres'
    }else{
        nameSpan.innerHTML=''
    }
}
function passMessage(pass){
    if(pass.length <=5){
        passSpan.innerHTML='Su contraseña debe tener más de 5 caracteres'
    }else{
        passSpan.innerHTML=''
    }
}




