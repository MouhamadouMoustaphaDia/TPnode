function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function listerAllContact() {
    console.log("Liste Contacts")

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:8800');
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST', 'OPTIONS');


    formData = new FormData()
    formData.append("appid", "appid")
    var requestOptions = {
        credentials: 'include',
        method: 'GET',
        headers: headers,

    };

    fetch('http://localhost:8800/api/contacts', requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(error => console.log('error', error));
}

function addContact() {
    console.log("ajout Contact")

}

function updateContact() {
    console.log("update Contact")

}

function removeContact() {
    console.log("Remove Contact")
}