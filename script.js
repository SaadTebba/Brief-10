function createTable(array) {

  for (i = 0; i < array.length; i++) {
    row = "";
    // for (i = 0; i < array.length; i++) {

    // }
    row += 
    `
    <tr>

     <td>${array[i].titre}</td>
     <td>${array[i].réalisateur}</td>
     <td>${array[i].durée} Minutes</td>
     <td>${array[i].production}</td>
     <td><img src="${array[i].poster}"></td>

     <td>
     <ul>
     <li>${array[i].festivals[0]}</li>
     <li>${array[i].festivals[1]}</li>
     <li>${array[i].festivals[2]}</li>
     </ul>
     </td>

     <td>${array[i].acteurs}</td>
    </tr>
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


// function sortTable(n) {

//   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//   table = document.getElementById("table");
//   switching = true;
//   dir = "asc";
//   while (switching) {
//     switching = false;
//     rows = table.rows;
//     for (i = 1; i < (rows.length - 1); i++) {
//       shouldSwitch = false;
//       x = rows[i].getElementsByTagName("TD")[n];
//       y = rows[i + 1].getElementsByTagName("TD")[n];
//       if (dir == "asc") {
//         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//           shouldSwitch = true;
//           break;
//         }
//       } else if (dir == "desc") {
//         if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//           shouldSwitch = true;
//           break;
//         }
//       }
//     }
//     if (shouldSwitch) {
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//       switchcount++;
//     } else {
//       if (switchcount == 0 && dir == "asc") {
//         dir = "desc";
//         switching = true;
//       }
//     }
//   }
// }