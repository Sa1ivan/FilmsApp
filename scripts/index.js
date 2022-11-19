fetch('https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=джон уик&page=1', {
    method: 'GET',
    headers: {
        'X-API-KEY': 'a84f31d1-40f1-4481-8357-236bbd55a32a',
        'Content-Type': 'application/json',
    },
})
.then(response => response.json())
.then(result => console.log(result))
