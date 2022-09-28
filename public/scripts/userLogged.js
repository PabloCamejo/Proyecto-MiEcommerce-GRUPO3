const userBar = document.querySelector(".user-bar")
const profile = document.querySelector('.profile')
const userSettings = document.querySelector('.user-id')
const userName = document.querySelector('.user-name')

const rememberUser = document.querySelector(".checkbox-remember")



  // Cambio la barra del headr dependiendo si el usuario esta loggeado o no
if(localStorage.getItem('userLogged')){
  let userLogged = JSON.parse(localStorage.getItem('userLogged')).name
  userBar.style = "display:none"
  profile.style = "display:flex"
  userSettings.innerHTML=`${userLogged}`;
  userName.innerHTML=`${userLogged}`;

}else{
  userBar.style = "display:flex"
  profile.style = "display:none"
}



// Checkbox de recordar usuario

  if(localStorage.getItem("Usuario recordado")=='true'){
    document.querySelector(".checkbox-remember").setAttribute('checked',true)
    document.querySelector("#name-login").value = localStorage.getItem('userEmail')

  }else if((localStorage.getItem("Usuario recordado")=='false')){
    document.querySelector("#name-login").value = ""
    document.querySelector("#name-login").placeholder = "Tu nombre de usuario"

    document.querySelector(".checkbox-remember").removeAttribute('checked')

  }

  rememberUser.addEventListener('click', ()=>{
    if(localStorage.getItem('Usuario recordado')=='true'){
      localStorage.setItem('Usuario recordado', 'false' )
    }
    else{
      localStorage.setItem('userEmail', document.querySelector("#name-login").value)

      localStorage.setItem('Usuario recordado', 'true' )

    }
  })


