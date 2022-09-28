const searchInput = document.getElementById('search')
const searchForm = document.querySelector('.search')
const main = document.querySelector('.main').innerHTML

let products;
async function traerDatos(url){
    fetch(url)
        .then(res => res.json())
        .then(data =>{
            products = data
        }).catch(error => console.log('error al traer products, revisar!!!'))
}
traerDatos('http://localhost:5000/api/product')

function mostrarProducts(data){
    if (data === null){
        return 
    }
    let container = `
        <div class="all-cards" style="margin-top: 0; min-height: 70%">
                <section class="section-cards ">
    `
    if (data.length) {
        for(let product of data) {
            container +=
            `
            <article class="individual-cards">
                <a href="/products/${product.id}"> 

                    <img class="image-cards" src="${product.images[0] || '/img/notImage.png'}" alt="image-product">
                </a>
                <div class="text-card-container">
                    <p class="product-name-cards">${product.title}</p>
                    <div class="product-priceLegend-cards">
                        <p class="product-price-cards">${product.price}</p>
                        <p class="legend-cards">Puntos</p>
                    </div>
                </div>
            </article>
            `
        }
    } else {
        container += 'No hay Coincidencias'
    }
    
    container +=
    `
                </section>
        </div>
    `
    document.querySelector('.main').innerHTML = container
}

function buscar(){
    let filtrado = products.filter(x => x.title.toLowerCase().includes(searchInput.value))
    filtrado.length == products.length ? mostrarProducts(null) : mostrarProducts(filtrado)

}

searchForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    if (searchInput.value) {
        buscar()
    } else {
        document.querySelector('.main').innerHTML = main
    }
})





