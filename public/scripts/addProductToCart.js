
const sessionId = localStorage.setItem('id', 0);
const loggedUserId = localStorage.getItem('id');

const url = window.location.href
console.log(url);
const addProd = document.querySelector('.button');
const id = Number(url.split('/').pop());


if(window.location.href.startsWith('http://localhost:3040/products/')){
    addProd.addEventListener('click', async e => {
        if(localStorage.getItem('userLogged')){
    
            const call = await addProductToCart(loggedUserId, id);
            return window.location.href = '/cart';
        
        } else {
            alert('Para añadir productos al Carrito primero debe Iniciar Sesión');
        }
    })
}

