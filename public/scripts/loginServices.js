const baseUrl = "http://localhost:5000/api/user/login";

const loginSubmit = async (data) => {
    let options = {
        "method": "post",
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify(data)
    }
    const status = await fetch(baseUrl, options);
    const info = await status.json();

    let response = { status: status, info: info };

    return response

}



