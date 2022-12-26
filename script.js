fetch("movies.json");
.then(function(response)){
  return response.json();
}

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {

  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(xhr.responseText);
    let rows = document.getElementById('values');
    let moviesList = "";
    document.getElementById("TESTING").innerHTML = response;

    for (let movie of movies) {
      moviesList += `<tr>
          <td>${movies.titre}</td>
          <td>${movies.réalisateur}</td>
          <td>${movies.durée}</td>
          <td>${movies.production}</td>
          <td>${movies.poster}</td>
          <td>${movies.festivals}</td>
          <td>${movies.acteurs}</td>
          </tr>`
    }

  }
}

xhr.open('GET', 'movies.json', true);
xhr.send();

function sortTable(n) {

  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}