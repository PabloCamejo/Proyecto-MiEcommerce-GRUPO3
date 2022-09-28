const userBar = document.querySelector(".user-bar")
const profile = document.querySelector('.profile')
const userSettings = document.querySelector('.user-id')
const userName = document.querySelector('.user-name')

const rememberUser = document.querySelector(".checkbox-remember")



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
// RECORDAR USUARIO

  if(localStorage.getItem("Usuario recordado")){
    document.querySelector(".checkbox-remember").setAttribute('checked', localStorage.getItem("Usuario recordado"))
    document.querySelector("#name-login").value = JSON.parse(localStorage.getItem('userLogged')).email

  }

rememberUser.addEventListener('click', ()=>{
  if(!localStorage.getItem("Usuario recordado")){
    localStorage.setItem('Usuario recordado', true )
  }else
  {
    localStorage.removeItem('Usuario recordado')
  }
})





// const userName = document.querySelector('.user-name')



