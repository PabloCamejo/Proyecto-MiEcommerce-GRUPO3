const userBar = document.querySelector(".user-bar")
const profile = document.querySelector('.profile')
const userSettings = document.querySelector('.user-id')

if(localStorage.getItem('user')){
  let userLogged = JSON.parse(localStorage.getItem('user'))
  userBar.style = "display:none"
  profile.style = "display:flex"
  userSettings.innerHTML=`${userLogged.userName}`


}else{
  userBar.style = "display:flex"
  profile.style = "display:none"
}


function logIn(name,pass){
    let user = {
        userName: name,
        userPwd:pass
    }
    localStorage.setItem("user",JSON.stringify(user))
}
function logOut(){
    localStorage.removeItem('user')
}