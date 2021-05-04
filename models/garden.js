



class Garden {
    constructor({ name, location, id }) {
        this.name = name
        this.location = location
        this.id = id


    }

    renderGarden() {
        return `
        <h2>${this.name}</h2>
        `
    }


}