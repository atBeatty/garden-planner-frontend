

function getAllPlants() {
    fetch('http://localhost:3000/plants')
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}



