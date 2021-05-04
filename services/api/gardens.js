

function getAllGardens() {
    fetch('http://localhost:3000/gardens')
        .then(resp => resp.json())
        .then(json => json)
        .catch(err => console.log(err))
}

