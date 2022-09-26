const profile = document.querySelector('.profile--name');
const closeMenu = document.querySelector('.no-menu');
const userMenu = document.querySelector('.user-menu');
const page = document.querySelector('body');

profile.addEventListener('click', function(e){
    e.preventDefault();

    page.style.overflow = "hidden";
    userMenu.classList.toggle('show-user-menu');
})

closeMenu.addEventListener('click', function(){
    page.style.overflow = "auto";
    userMenu.classList.toggle('show-user-menu');
})