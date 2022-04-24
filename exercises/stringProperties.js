let person = {
    name: 'ronit',
    lastName: 'cohen',
    year: 1993
};

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(key, obj[key])
        }
    }

}
showProperties(person)