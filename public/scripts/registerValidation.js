
//Capturando los campos
const formRegister = document.formRegister;
const { nameR, lastnameR, emailR, passwordR, password2, sendRegister } = formRegister.elements
let inputs = [nameR, lastnameR, emailR, passwordR, password2]
//Errores
let errores = [0, 0, 0, 0, 0] 


//Validaciones
function noEspacios(value){
    return value.trim() == value
}
//Name
function isValidNameOrLastName(name){
    let sinEspacios = noEspacios(name)
    if (!sinEspacios) {
        return 'No puede contener espacios al principio ni al final'
    }
    let number = 1
    let i = 0
    while (number == 1 && i <= name.length) {
        if (name[i] == Number(name[i])) number = 0
        i++
    }
    return name.length > 1 && number ? '' : 'Debe contener mas de una letra y ningun numero'  
};

//Email
function isValidEmail(email){
    let sinEspacios = noEspacios(email)
    if (!sinEspacios) {
        return 'No puede contener espacios al principio ni al final'
    }
    let emailValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)
    return emailValid ? '' : 'No corresponde con el formato email, tal vez un @'
};


//Password
function isValidPassword(password){
    let sinEspacios = noEspacios(password)
    if (!sinEspacios) {
        return 'No puede contener espacios al principio ni al final'
    }
    if (password.length < 8) {
        return 'Al menos debe contener 8 caracteres alfanumericos'
    }
    if (password.includes('password')) {
        return 'No debe contener "password" como su contraseña'
    }
    let number = 0
    let i = 0
    while (number == 0 && i <= password.length) {
        if (password[i] == Number(password[i])) number++
        i++
    }
    if (!number){
        return 'Debe contener al menos un numero'
    }

    return ''
}

function passwordChange(pass){
    if (pass.length < 8){
        return ['Poco segura', 'red']
    }
    let valid = isValidPassword(pass)
    return  !valid && (pass !== pass.toLowerCase()) ? ['Batante segura', 'green'] : ['Dificultad media', 'yellow']
}


//Password 2
function isEqualPassword(password2){
    if (passwordR.value !== password2 && password2) {
        return 'Las contraseñas deben coincidir' 
    }
    return password2 ? '' : 'Ingrese un valor'
}


const validaciones = [isValidNameOrLastName, isValidNameOrLastName, isValidEmail, isValidPassword, isEqualPassword]

//Eventos
inputs.forEach((x, i) => x.addEventListener('blur', function(){
    let smallMessage = document.querySelector(`.message_error${i}`)
    if (smallMessage.classList.contains('typing-input')) {
        smallMessage.classList.remove('typing-input')
        smallMessage.style.color = 'red'
        smallMessage.innerText = ''
    }
    let validacion = validaciones[i](this.value)
    if (validacion){ 
        smallMessage.innerText = validacion
        errores[i] = 0
        return
    };
    errores[i] = 1
    let error = errores.reduce((sum, x) => sum + x)
    if (error == 5){
        sendRegister.removeAttribute('id')
    }
}))



inputs.forEach((x, i) => x.addEventListener('focus', function(){
    document.querySelector(`.message_error${i}`).innerText = ''
    let error = errores.reduce((sum, x) => sum + x)
    if (error == 5){
        sendRegister.removeAttribute('id')
    }
}))

inputs.forEach((x,i) => x.addEventListener('keypress', function(){
    let validacion = validaciones[i](this.value)
    if (!validacion) {
        errores[i] = 1
    }
    let error = errores.reduce((sum, x) => sum + x)
    if (error == 4){
        sendRegister.removeAttribute('id')
    } else {
        errores[i] = 0
        sendRegister.setAttribute('id', 'deshabilitado')
    }
}))

passwordR.addEventListener('keypress', function(e){
    let message = passwordChange(e.target.value)
    let smallMessage = document.querySelector(`.message_error3`)
    smallMessage.innerText = message[0]
    smallMessage.classList.add('typing-input')
    smallMessage.style.color = message[1]
    if (password2.value == passwordR.value && passwordR.value ) {
        errores[4] = 1
    } else {
        errores[4] = 0
    }

})







/*
animaciones segun seguridad de contraseña
hacer que solo se habilite si todo ok
hacer registro funcional y redireccion al login
modularizar eventos en funciones
*/

sendRegister.setAttribute('id', 'deshabilitado')

formRegister.addEventListener('submit', (e) =>{
    e.preventDefault()
    if (isEqualPassword(password2.value)){
        alert('juanito')
    }
    
})