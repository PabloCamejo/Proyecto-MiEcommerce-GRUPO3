const decreaseBtns = document.querySelectorAll('.decrement');
const increaseBtns = document.querySelectorAll('.increment');

decreaseBtns.forEach((btn,i) => {
    btn.addEventListener('click', async e => {
        let amount = Number(document.querySelectorAll('.result')[i].innerHTML) - 1;
        if (amount > 0) {
            console.log(btn.dataset.id);
            const call = await putProduct(user.id, btn.dataset.id, amount);
            return window.location.reload();
        } else {
            if (confirm(`Desea eliminar el producto ${btn.dataset.name}?`)) {
                const call = await deleteProduct(user.id, btn.dataset.id);
                return window.location.reload();
            }
        }
    })
})

increaseBtns.forEach((btn,i) => {
    btn.addEventListener('click', async e => {
        let amount = Number(document.querySelectorAll('.result')[i].innerHTML) + 1;
        console.log(amount);
        console.log(btn.dataset.id);
        const call = await putProduct(user.id, btn.dataset.id, amount);
        return window.location.reload();

    })
})