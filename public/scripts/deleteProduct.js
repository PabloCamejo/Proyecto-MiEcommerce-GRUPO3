const removeBtns = document.querySelectorAll('.button-list');

const arrBtns = Array.prototype.slice.call(removeBtns);

arrBtns.forEach(btn => {
    btn.addEventListener('click', async e => {
        if (confirm(`Desea eliminar el producto ${btn.name}?`)) {
            const call = await deleteProduct(user.id, btn.value);
            return window.location.reload();
        }
    })
})
