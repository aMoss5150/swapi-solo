const fs = require('fs');
const fetch = require('node-fetch')

function getter(url) {
    fetch(url)
        .then(res => res.json())
        .then(person => {
            console.log(person.name)
            person.films.forEach((film) => {
                filmGetter(film)
            })

        })
}

function filmGetter(filmUrl) {
    fetch(filmUrl)
        .then(res => res.json())
        .then(film => console.log(film.title))
}
function personFilms(personId) {

    getter(`https://swapi.dev/api/people/${personId}/`)

}

personFilms(4)
// getter('https://swapi.dev/api/people/1/')