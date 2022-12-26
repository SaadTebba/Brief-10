let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        let response = JSON.parse(xhr.responseText)
        document.getElementById("TESTING").innerHTML = response;

        let movies = response.movies;
        let item = "";

        for (let i = 0; i < movies.length; i++) {

            item += `<li id="playlistitem"> ${movies[i].titre} </li>`
            document.getelementbyid('LISTTEST').innerHTML = item;
        }
    }
}

xhr.open('GET', 'movies.json', true);
xhr.send();