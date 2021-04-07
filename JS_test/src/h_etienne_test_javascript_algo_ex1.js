
var to_check = new Array(9);

// transform the input array to a 2D array of 9x9 entries for better manipulation
function to2DArray(arr){
    data = []
    for (let i = 0;i<arr.length;i++){
        var line = arr[i].split(' ').map(Number);
        data[i]=line;
    }
    return data;    
}

// inject the html to display the table
function displayTable(to_check){
    var table = document.getElementById("table_to_verify");

    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    to_check.forEach(function(items) {
      var row = document.createElement("tr");
      items.forEach(function(item) {
        var cell = document.createElement("td");
        cell.textContent = item;
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
}

// store the date into to_check as a 2D array and display on the page
to_check=to2DArray(array_number);
displayTable(to_check)


