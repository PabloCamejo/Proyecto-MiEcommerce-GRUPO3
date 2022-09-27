let secondaryImgs = document.querySelectorAll(".img-product-secondary");
let arrayImage = [];

//marcamos primera imagen por default
window.addEventListener('load', () => {
  secondaryImgs[0].classList.add("border-red");
})
//marcamos imagen por click
function changePhoto(e) {
  let clickedImage = e.target.currentSrc;
  secondaryImgs[0].classList.remove("border-red");
  console.log(e);

  for (let i = 0; i < secondaryImgs.length; i++) {
    secondaryImgs[i].classList.remove("border-red");
    if (clickedImage === secondaryImgs[i].src) {
      document.querySelector(".img-product-principal").src = clickedImage;
      secondaryImgs[i].classList.add("border-red");
    }
  }
}

//marcamos imagen por mouseover
secondaryImgs.forEach((elem, i) => {
  elem.addEventListener('mouseover', (e) => {
    secondaryImgs[0].classList.remove("border-red");
    let cI = e.target.currentSrc;

    arrayImage.push(i);
    if (arrayImage.length == 2) {
      secondaryImgs[arrayImage[0]].classList.remove("border-red");
      arrayImage.shift();
    }

    if (cI === secondaryImgs[i].src) {
      document.querySelector(".img-product-principal").src = cI;
      secondaryImgs[i].classList.add("border-red");
    }
    
  })

})


