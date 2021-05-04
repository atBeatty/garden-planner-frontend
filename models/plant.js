



class Plant {
    constructor({ name, species, id }) {
        this.name = name
        this.species = species
        this.id = id
        Plant.all.push(this)


    }

    // Plant.all = [];
}