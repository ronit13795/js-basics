const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
]

const movies2018 =
    movies.filter((movie) => movie.year === 2018 && movie.rating >= 4)
        .sort((movieA, movieB) => movieA.rating < movieB.rating ? 1 : -1)
        .forEach((movie) => console.log(movie.title))





