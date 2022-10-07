function changePhoto(e) {
  let clickedImage = e.target.currentSrc;
  let secondaryImgs = document.querySelectorAll(".img-product-secondary");
  // console.log(e);

  for (let i = 0; i < secondaryImgs.length; i++) {
    secondaryImgs[i].classList.remove("border-red");
    if (clickedImage === secondaryImgs[i].src) {
      document.querySelector(".img-product-principal").src = clickedImage;
      secondaryImgs[i].classList.add("border-red");
    }
  }
}


// DARK LIGHT MODE BUTTON
const ball = document.querySelector('.ball')
const checkbox = document.querySelector('.check-dark')

// if(localStorage.getItem('darkMode')==='true'){
//   document.body.classList.add('dark-mode')
// }


ball.addEventListener('click', () =>{
  const estado = document.body.classList.contains('dark-mode')
  localStorage.setItem("darkMode", !estado)

    ball.classList.toggle('activated')
    document.body.classList.toggle('dark-mode')

  
})

////