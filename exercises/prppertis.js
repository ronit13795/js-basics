const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

function showProperties(obj) {
    let result = ''
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            result = result + ' ' + key + ' ' + obj[key]
        }

    }
    return result

}

console.log(showProperties(movie))