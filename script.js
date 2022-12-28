function createTable(array) {

  for (i = 0; i < array.length; i++) {

    row = "";

    row += `
    <tr>
       <td>${array[i].titre}</td>
       <td>${array[i].réalisateur}</td>
       <td>${array[i].durée} Minutes</td>
       <td>${array[i].production}</td>
       <td><img src="${array[i].poster}"></td>
       <td>
       <ul>
       `

    for (j = 0; j < array[i].festivals.length; j++) {
      row += `<li>${array[i].festivals[j]}</li>`
    }

    row +=
      `
    </ul>
    </td>
    <td>
    <ul>
    `
    
    // 
    for (k = 0; k < array[i].acteurs.length; k++) {
      row += `<li>${array[i].acteurs[k].nom} ${array[i].acteurs[k].prénom} - ${array[i].acteurs[k].nationalité}</li>`
    }

    row +=
    `
    </ul>
    </td>
    `

    document.getElementById('values').innerHTML += row;
  }

}

let RESPONSE = [];

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {

  if (this.readyState == 4 && this.status == 200) {
    RESPONSE = JSON.parse(xhr.responseText);
    createTable(RESPONSE);
  }
}

xhr.open('GET', 'movies.json', true);
xhr.send();


function sortTable(n) {

  var table, rows, switching, i, x, y, shouldSwitch, direction, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  direction = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      if (direction == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (direction == "desc") {
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
      if (switchcount == 0 && direction == "asc") {
        direction = "desc";
        switching = true;
      }
    }
  }
}

// function search() {

//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("searchbar");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("table");
//   tr = table.getElementsByTagName("tr");

//   for (i = 0; i < array.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }

// function search() {
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }