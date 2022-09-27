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

