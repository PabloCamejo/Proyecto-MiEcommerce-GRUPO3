const putProduct = async (userId, productId, amount) => {
    const data = {
        userId: Number(userId),
        product: {
            id: Number(productId),
            quantity: Number(amount)
        }
    }
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    console.log(options);
    fetch('http://localhost:5000/api/cart', options)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                return Promise.reject(res);
            }
        })
        .then((data) => {
            return data;
        })
        .catch(x => console.log(x))
}