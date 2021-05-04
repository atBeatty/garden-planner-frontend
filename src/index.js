

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');




    fetch('http://localhost:3000/gardens')
        .then(resp => resp.json())
        .then(json => json.map(json => {
            console.log(new Garden(json))

        }))
        .catch(err => console.log(err))













});