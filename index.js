const fetch = require('node-fetch')

function getter(url) {
    fetch(url)
        .then(res => res.json())
        .then(person => {
            console.log('PERSON:', person.name)
            return [person.vehicles[1], person.starships[1], person.homeworld]
        })
        .then(arr => {
            // vehicleGetter(arr[0])
            // starshipGetter(arr[1])
            // homeworldGetter(arr[2])
            return Promise.allSettled(
                [
                    vehicleGetter(arr[0]),
                    starshipGetter(arr[1]),
                    homeworldGetter(arr[2])
                ]
            )

        }).catch(err => {
            console.log(err.message)
        })
}




function vehicleGetter(vehicleUrl) {
    fetch(vehicleUrl)
        .then(res => res.json())
        .then((vehicle) => {
            console.log('VEHICLE:', vehicle.name)
        }).catch(err => {
            console.log(err.message)
        })
}

function starshipGetter(starshipUrl) {
    fetch(starshipUrl)
        .then(res => res.json())
        .then(starship => console.log("STARSHIP:", starship.name))
}

function homeworldGetter(hwUrl) {
    fetch(hwUrl)
        .then(response => response.json())
        .then(homeworld => console.log("HOMEWORLD:", homeworld.name))
}


function call(url) {
    getter(url)
}
call('https://swapi.dev/api/people/1/')

// vehicleGetter(`http://swapi.dev/api/vehicles/14/`)
// console.log(fetch('https://swapi.dev/api/people/1/'));

