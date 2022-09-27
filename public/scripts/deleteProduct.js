const removeBtns = document.querySelectorAll('.button-list');

const arrBtns = Array.prototype.slice.call(removeBtns);

arrBtns.forEach(btn => {
    btn.addEventListener('click', async e => {
        if (confirm(`Desea eliminar el producto ${btn.name}?`)) {
            const call = await deleteProduct(loggedUserId, btn.value);
            return window.location.href = '/cart';
        }
    })
})
