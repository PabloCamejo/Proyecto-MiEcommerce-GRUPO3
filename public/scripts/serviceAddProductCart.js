const addProductToCart = async (userId, productId) => {
    const data = {
        userId: Number(userId),
        product: {
            id: productId
        }
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
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
        .catch(Promise.error)
}
