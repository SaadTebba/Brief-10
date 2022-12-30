// =================== Function that create tables & gets data from movies.json ===================

function createTable(responseParameter) {

  for (i = 0; i < responseParameter.length; i++) {

    // =================== empty "row" string, i fill it with table rows using template literals ===================

    let row = "";

    row += `
    <tr>
       <td>${responseParameter[i].titre}</td>
       <td>${responseParameter[i].réalisateur}</td>
       <td>${responseParameter[i].durée} Minutes</td>
       <td>${responseParameter[i].production}</td>
       <td><img src="${responseParameter[i].poster}"></td>
       <td>
       <ul>
       `

    for (j = 0; j < responseParameter[i].festivals.length; j++) {
      row += `<li>${responseParameter[i].festivals[j]}</li>`
    }

    row += `</ul> </td> <td> <ul>`

    // 
    for (k = 0; k < responseParameter[i].acteurs.length; k++) {
      row += `<li>${responseParameter[i].acteurs[k].nom} ${responseParameter[i].acteurs[k].prénom} - ${responseParameter[i].acteurs[k].nationalité}</li>`
    }

    row += `</ul> </td>`

    // =================== values is Tbody, i change the innerHTML to "row" ===================

    document.getElementById('values').innerHTML += row;

  }

}

// =================== XMLHttpRequest creation & opening & sending the request ===================

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {

  // =================== ReadyState 4 means response is ready && status 200 means the success of my request ===================

  if (this.readyState == 4 && this.status == 200) {
    let RESPONSE = JSON.parse(xhr.responseText);
    createTable(RESPONSE);
  }
}

xhr.open('GET', 'movies.json');
xhr.send();

// =================== Main sort function with a parameter cellToSort ===================

function sort(cellToSort) {
  
  let rows, switching, x, y, shouldSwitch, dir, switchcount = 0;
  switching = true;
  dir = "from A to Z";
  while (switching) {
    switching = false;
    rows = document.getElementsByTagName('tr');
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[cellToSort];
      y = rows[i + 1].getElementsByTagName("TD")[cellToSort];
      if (dir == "from A to Z") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "from Z to A") {
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
    } else if (switchcount == 0 && dir == "from A to Z") {
        dir = "from Z to A";
        switching = true;
    }
  }
}

// =================== This 4 functions gets the main sort innerfunction & change parameter for each cell ===================

function sortByTitre() {
  sort([0]);
}

function sortByRealisateur() {
  sort([1]);
}

function sortByDuree() {
  sort([2]);
}

function sortByProductionYear() {
  sort([3]);
}

// =================== Search function ===================

function search() {
  let input, filter, tr, td;
  input = document.getElementById("searchbar");
  filter = input.value.toUpperCase();
  tr = document.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerText.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}