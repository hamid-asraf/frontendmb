const apiUrl = "http://localhost:5000/api/";

const get = (endPoint) => {
    return fetch(apiUrl + endPoint)
    .then(response => {
        if (!response.ok){
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
        }).catch(error => {
            console.log(error);
    });
}

export {get}